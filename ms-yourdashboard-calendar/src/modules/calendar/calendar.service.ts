// ms-yourdashboard-calendar/src/modules/calendar/calendar.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { google, calendar_v3 } from 'googleapis';
import { ConfigService } from '@nestjs/config';

// 🎯 REPOSITORIOS
import { TokenRepository } from '../../core/database/repositories/token.repository';
import { EventSyncRepository } from '../../core/database/repositories/event-sync.repository';
import { UserGmailAccountsRepository } from '../../core/database/repositories/user-gmail-accounts.repository';
import { EventStatsRepository } from '../../core/database/repositories/event-stats.repository';
import { EventSearchRepository } from '../../core/database/repositories/event-search.repository';

// 🎯 TYPES E INTERFACES
import { EventMetadataDB, EventSearchFilters } from '../../core/database/types';
import { CreateEventDto } from './dto/create-event.dto';
import { 
  CreateEventRequestBody, 
  GoogleCalendarEvent, 
  safeGetErrorCode, 
  safeGetErrorMessage, 
  ShareCalendarResponse, 
  UnshareCalendarResponse, 
  UpdateEventRequestBody 
} from './interfaces/calendar-types';
import { 
  convertAPIToEventMetadata, 
  convertCreateEventToGoogleFormat, 
  convertDBToEventMetadata, 
  convertUpdateEventToGoogleFormat,
  isValidCreateEventBody 
} from './utils/conversion.utils';

// 🎯 INTERFACES LOCALES
export interface SyncOptions {
  maxEvents?: number;
  timeMin?: string;
  timeMax?: string | number;
  futureOnly?: boolean;
}

export interface CalendarListResponse {
  events: CalendarEventMetadata[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  searchTerm?: string;
}

export interface CalendarEventMetadata {
  id: string;
  summary: string;
  location?: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  attendees?: string[];
  isAllDay: boolean;
  status: string;
}

export interface CalendarStats {
  totalEvents: number;
  upcomingEvents: number;
  pastEvents: number;
}

export interface CalendarEventDetail extends CalendarEventMetadata {
  creator?: string;
  organizer?: string;
  htmlLink?: string;
  sourceAccount?: string;
  sourceAccountId?: string;
}

export interface CalendarServiceError {
  message: string;
  code?: number;
  status?: number;
}

@Injectable()
export class CalendarService {
  private readonly logger = new Logger(CalendarService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly tokenRepo: TokenRepository,
    private readonly eventSyncRepo: EventSyncRepository,
    private readonly userAccountsRepo: UserGmailAccountsRepository,
    private readonly eventStatsRepo: EventStatsRepository,
    private readonly eventSearchRepo: EventSearchRepository,
  ) {}

  // ================================
  // 📅 LISTAR EVENTOS
  // ================================
  async listEventsWithToken(
    accessToken: string, 
    cuentaGmailId: string,
    timeMin: string,
    timeMax?: string | number | Date,
    page: number = 1,
    limit: number = 10
  ): Promise<CalendarListResponse> {
    try {
      this.logger.log(`📅 Listando eventos para cuenta Gmail ${cuentaGmailId} - Página ${page}`);

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      try {
        this.logger.log(`📡 Obteniendo eventos desde Google Calendar API`);
        
        const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);
        
        if (!validAccessToken) {
          throw new Error('No se pudo obtener token válido');
        }

        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: validAccessToken });
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        let maxTime: string;
        if (timeMax) {
          maxTime = typeof timeMax === 'string' ? timeMax : new Date(timeMax).toISOString();
        } else {
          maxTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
        }
        
        const maxResults = Math.min(limit * page, 250);
        
        const response = await calendar.events.list({
          calendarId: 'primary',
          timeMin,
          timeMax: maxTime,
          maxResults,
          singleEvents: true,
          orderBy: 'startTime'
        });

        const allEvents = response.data.items || [];
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedEvents = allEvents.slice(startIndex, endIndex);
        
        const events = paginatedEvents
          .filter(event => event && event.id)
          .map(event => convertAPIToEventMetadata(event as GoogleCalendarEvent));
          
        const totalPages = Math.ceil(allEvents.length / limit);

        this.logger.log(`✅ Eventos obtenidos: ${allEvents.length} total, ${events.length} en página ${page}`);

        return {
          events,
          total: allEvents.length,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1
        };
        
      } catch (apiError: unknown) {
        const errorMessage = safeGetErrorMessage(apiError);
        this.logger.error(`❌ Error en Calendar API, usando BD como fallback: ${errorMessage}`);
        
        const dbResult = await this.eventSyncRepo.findPaginated(cuentaGmailId, page, limit, true);

        if (dbResult.total > 0) {
          this.logger.log(`💾 FALLBACK exitoso: ${dbResult.events.length} eventos desde BD`);
          
      const events = dbResult.events
  .filter(dbEvent => dbEvent.cuenta_gmail_id !== null)
  .map(dbEvent => convertDBToEventMetadata(dbEvent as unknown as EventMetadataDB));

          const totalPages = Math.ceil(dbResult.total / limit);
          
          return {
            events,
            total: dbResult.total,
            page,
            limit,
            totalPages,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1
          };
        }
        
        throw new Error(`Error al consultar eventos: ${errorMessage}`);
      }

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.error('❌ Error obteniendo eventos:', errorMessage);
      throw new Error('Error al consultar eventos: ' + errorMessage);
    }
  }

  // ================================
  // 🔍 BUSCAR EVENTOS
  // ================================
  async searchEventsWithToken(
    accessToken: string,
    cuentaGmailId: string,
    timeMin: string,
    searchTerm: string,
    page: number = 1,
    limit: number = 10
  ): Promise<CalendarListResponse> {
    try {
      this.logger.log(`🔍 Buscando eventos "${searchTerm}" para cuenta Gmail ${cuentaGmailId}`);

      if (!searchTerm || searchTerm.trim() === '') {
        return {
          events: [],
          total: 0,
          page,
          limit,
          totalPages: 0,
          hasNextPage: false,
          hasPreviousPage: false,
          searchTerm: searchTerm || ''
        };
      }

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      try {
        this.logger.log(`🌐 Buscando en Google Calendar API`);
        
        const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);
        
        if (!validAccessToken) {
          throw new Error('No se pudo obtener token válido');
        }

        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: validAccessToken });
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        const maxResults = Math.min(250, limit * page * 3);

        let response = await calendar.events.list({
          calendarId: 'primary',
          timeMin,
          q: searchTerm.trim(),
          maxResults,
          singleEvents: true,
          orderBy: 'startTime'
        });

        let allEvents = response.data.items || [];

        if (allEvents.length === 0) {
          this.logger.log(`🔍 Sin resultados con Google API, buscando localmente...`);
          
          response = await calendar.events.list({
            calendarId: 'primary',
            timeMin,
            maxResults: 250,
            singleEvents: true,
            orderBy: 'startTime'
          });

          const eventsToFilter = response.data.items || [];
          const searchTermLower = searchTerm.toLowerCase().trim();

          allEvents = eventsToFilter.filter((event): event is calendar_v3.Schema$Event => {
            if (!event) return false;
            
            const summary = (event.summary || '').toLowerCase();
            const description = (event.description || '').toLowerCase();
            const location = (event.location || '').toLowerCase();
            
            return summary.includes(searchTermLower) || 
                   description.includes(searchTermLower) ||
                   location.includes(searchTermLower);
          });

          this.logger.log(`🎯 Filtrado local encontró: ${allEvents.length} eventos`);
        }
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedEvents = allEvents.slice(startIndex, endIndex);
        
        const events = paginatedEvents
          .filter(event => event && event.id)
          .map(event => convertAPIToEventMetadata(event as GoogleCalendarEvent));
          
        const totalPages = Math.ceil(allEvents.length / limit);

        this.logger.log(`✅ Búsqueda completada: ${allEvents.length} eventos encontrados`);

        return {
          events,
          total: allEvents.length,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
          searchTerm: searchTerm.trim()
        };
        
      } catch (apiError: unknown) {
        const errorMessage = safeGetErrorMessage(apiError);
        this.logger.warn(`⚠️ Calendar API falló, usando BD: ${errorMessage}`);
        
        const filters: EventSearchFilters = {
          search_text: searchTerm.trim(),
          start_date: new Date(timeMin)
        };

      const searchResult = await this.eventSearchRepo.search(filters);
const events = searchResult.events
  .filter((dbEvent): dbEvent is EventMetadataDB => dbEvent.cuenta_gmail_id !== null)
  .map(dbEvent => convertDBToEventMetadata(dbEvent));

// Y TAMBIÉN necesitas usar searchResult.total para el total count
const startIndex = (page - 1) * limit;
const endIndex = startIndex + limit;
const paginatedEvents = events.slice(startIndex, endIndex);
const totalPages = Math.ceil(searchResult.total / limit);

        return {
          events: paginatedEvents,
          total: events.length,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
          searchTerm: searchTerm.trim()
        };
      }

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.error('❌ Error en búsqueda:', errorMessage);
      throw new Error(`Error al buscar eventos: ${errorMessage}`);
    }
  }

  // ================================
  // 📋 OBTENER EVENTO POR ID
  // ================================
  async getEventByIdWithToken(
    accessToken: string,
    cuentaGmailId: string,
    eventId: string
  ): Promise<GoogleCalendarEvent> {
    try {
      this.logger.log(`📋 Obteniendo evento ${eventId}`);

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      if (!eventId || eventId.trim() === '') {
        throw new Error('eventId es requerido');
      }

      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);
      
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      const response = await calendar.events.get({
        calendarId: 'primary',
        eventId: eventId
      });

      if (!response.data) {
        throw new Error(`Evento ${eventId} not found`);
      }

      const event = response.data as GoogleCalendarEvent;

      const formattedEvent: GoogleCalendarEvent = {
        id: event.id,
        summary: event.summary || 'Sin título',
        location: event.location || '',
        description: event.description || '',
        start: event.start,
        end: event.end,
        attendees: event.attendees?.map(attendee => ({
          email: attendee.email || '',
          displayName: attendee.displayName,
          responseStatus: attendee.responseStatus
        })).filter(attendee => attendee.email) || [],
        status: event.status || 'confirmed',
        creator: event.creator,
        organizer: event.organizer,
        htmlLink: event.htmlLink || '',
        created: event.created || '',
        updated: event.updated || '',
        transparency: event.transparency || 'opaque',
        visibility: event.visibility || 'default',
        recurrence: event.recurrence || [],
        recurringEventId: event.recurringEventId || undefined
      };

      this.logger.log(`✅ Evento ${eventId} obtenido`);
      return formattedEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error obteniendo evento: ${errorMessage}`);
      
      if (errorCode === 404) throw new Error(`Evento ${eventId} no encontrado`);
      if (errorCode === 403) throw new Error('Sin permisos');
      if (errorCode === 401) throw new Error('Token inválido');
      
      throw new Error(`Error obteniendo evento: ${errorMessage}`);
    }
  }

  // ================================
  // ➕ CREAR EVENTO
  // ================================
  async createEventWithToken(
    accessToken: string, 
    cuentaGmailId: string, 
    eventBody: CreateEventRequestBody
  ): Promise<GoogleCalendarEvent> {
    try {
      const eventTitle = eventBody.summary || 'Sin título';
      this.logger.log(`➕ Creando evento "${eventTitle}"`);

      if (!isValidCreateEventBody(eventBody)) {
        throw new Error('Campos requeridos: summary, startDateTime, endDateTime');
      }

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);
      
      if (!validAccessToken) {
        throw new Error('No se pudo obtener token válido');
      }

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      const googleEvent = convertCreateEventToGoogleFormat(eventBody);

      const response = await calendar.events.insert({
        calendarId: 'primary',
        sendUpdates: googleEvent.attendees ? 'all' : 'none',
        requestBody: googleEvent
      });

      if (!response.data || !response.data.id) {
        throw new Error('Google Calendar no devolvió evento válido');
      }

      this.saveEventToDB(response.data as GoogleCalendarEvent, cuentaGmailId).catch(err => {
        this.logger.debug(`Background save error: ${safeGetErrorMessage(err)}`);
      });

      this.logger.log(`✅ Evento creado: ${response.data.id}`);
      return response.data as GoogleCalendarEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error creando evento: ${errorMessage}`);
      
      if (errorMessage.includes('Invalid dateTime')) {
        throw new Error('Formato de fecha inválido');
      }
      if (errorCode === 400) throw new Error(`Validación: ${errorMessage}`);
      if (errorCode === 401 || errorCode === 403) throw new Error('Autenticación fallida');
      
      throw new Error(`Error al crear evento: ${errorMessage}`);
    }
  }

  // ================================
  // ➕ CREAR EVENTO PRIVADO
  // ================================
  async createPrivateEventWithToken(
    accessToken: string,
    cuentaGmailId: string,
    dto: CreateEventDto
  ): Promise<GoogleCalendarEvent> {
    try {
      this.logger.log(`➕ Creando evento PRIVADO`);

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: {
          summary: dto.summary,
          location: dto.location,
          description: dto.description,
          start: { dateTime: dto.startDateTime },
          end: { dateTime: dto.endDateTime },
          visibility: 'private',
          attendees: dto.attendees?.map((email) => ({ email })) || [],
        },
      });

      if (!response.data || !response.data.id) {
        throw new Error('Google Calendar no devolvió evento válido');
      }

      this.saveEventToDB(response.data as GoogleCalendarEvent, cuentaGmailId).catch(err => {
        this.logger.debug(`Background save error: ${safeGetErrorMessage(err)}`);
      });

      this.logger.log(`✅ Evento privado creado: ${response.data.id}`);
      return response.data as GoogleCalendarEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.error('❌ Error creando evento privado:', errorMessage);
      throw new Error('Error al crear evento privado');
    }
  }

  // ================================
  // ✏️ ACTUALIZAR EVENTO
  // ================================
  async updateEventWithToken(
    accessToken: string,
    cuentaGmailId: string,
    eventId: string,
    eventBody: UpdateEventRequestBody
  ): Promise<GoogleCalendarEvent> {
    try {
      this.logger.log(`✏️ Actualizando evento ${eventId}`);

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);
      
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      const updateData = convertUpdateEventToGoogleFormat(eventBody);

      const response = await calendar.events.patch({
        calendarId: 'primary',
        eventId: eventId,
        sendUpdates: 'all',
        requestBody: updateData
      });

      if (!response.data || !response.data.id) {
        throw new Error('Google Calendar no devolvió evento válido');
      }

      this.updateEventInDB(eventId, response.data as GoogleCalendarEvent, cuentaGmailId).catch(err => {
        this.logger.debug(`Background update error: ${safeGetErrorMessage(err)}`);
      });

      this.logger.log(`✅ Evento actualizado: ${eventId}`);
      return response.data as GoogleCalendarEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error actualizando evento: ${errorMessage}`);
      
      if (errorCode === 404) throw new Error(`Evento ${eventId} no encontrado`);
      if (errorCode === 403) throw new Error('Sin permisos');
      if (errorCode === 401) throw new Error('Token inválido');
      
      throw new Error('Error al actualizar evento');
    }
  }

  // ================================
  // 🗑️ ELIMINAR EVENTO
  // ================================
  async deleteEventWithToken(
    accessToken: string,
    cuentaGmailId: string,
    eventId: string
  ): Promise<{ message: string }> {
    try {
      this.logger.log(`🗑️ Eliminando evento ${eventId}`);

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);
      
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      await calendar.events.delete({
        calendarId: 'primary',
        eventId: eventId,
        sendUpdates: 'all'
      });

      this.deleteEventFromDB(eventId).catch(err => {
        this.logger.debug(`Background delete error: ${safeGetErrorMessage(err)}`);
      });

      this.logger.log(`✅ Evento eliminado: ${eventId}`);
      return { message: 'Evento eliminado correctamente' };

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error eliminando evento: ${errorMessage}`);
      
      if (errorCode === 404) throw new Error(`Evento ${eventId} no encontrado`);
      if (errorCode === 403) throw new Error('Sin permisos');
      if (errorCode === 401) throw new Error('Token inválido');
      
      throw new Error('Error al eliminar evento');
    }
  }

  // ================================
  // 🤝 COMPARTIR CALENDARIO
  // ================================
  async shareCalendarWithToken(
    accessToken: string,
    cuentaGmailId: string,
    calendarId: string,
    userEmail: string,
    role: 'reader' | 'writer' | 'owner'
  ): Promise<ShareCalendarResponse> {
    try {
      this.logger.log(`🤝 Compartiendo calendario con ${userEmail}`);

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      const response = await calendar.acl.insert({
        calendarId,
        requestBody: {
          role,
          scope: {
            type: 'user',
            value: userEmail,
          },
        },
      });

      const aclData = response.data;
      if (!aclData || !aclData.id) {
        throw new Error('Google Calendar no devolvió regla ACL válida');
      }

      this.logger.log(`✅ Calendario compartido con ${userEmail}`);
      
      return {
        success: true,
        message: 'Calendar compartido exitosamente',
        shared_with: userEmail,
        role: aclData.role || role,
        calendar_id: calendarId
      };

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error compartiendo calendario: ${errorMessage}`);
      
      if (errorCode === 400) throw new Error(`Validación: ${errorMessage}`);
      if (errorCode === 403) throw new Error('Sin permisos');
      if (errorCode === 401) throw new Error('Token inválido');
      
      throw new Error('Error al compartir calendario');
    }
  }

  // ================================
  // 🚫 REVOCAR ACCESO
  // ================================
  async unshareCalendarWithToken(
    accessToken: string,
    cuentaGmailId: string,
    calendarId: string,
    aclRuleId: string,
    userEmail: string
  ): Promise<UnshareCalendarResponse> {
    try {
      this.logger.log(`🚫 Revocando acceso a ${userEmail}`);

      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      await calendar.acl.delete({
        calendarId,
        ruleId: aclRuleId
      });

      this.logger.log(`✅ Acceso revocado a ${userEmail}`);
      
      return {
        success: true,
        message: 'Acceso revocado exitosamente',
        revoked_from: userEmail,
        calendar_id: calendarId
      };

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error revocando acceso: ${errorMessage}`);
      
      if (errorCode === 404) throw new Error('Usuario no tiene acceso');
      if (errorCode === 403) throw new Error('Sin permisos');
      if (errorCode === 401) throw new Error('Token inválido');
      
      throw new Error('Error revocando acceso');
    }
  }

  // ================================
  // 📊 ESTADÍSTICAS
  // ================================
  async getCalendarStatsWithToken(
    accessToken: string, 
    cuentaGmailId: string
  ): Promise<CalendarStats> {
    try {
      this.logger.log(`📊 Obteniendo stats para cuenta ${cuentaGmailId}`);
      
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }

      try {
        return await this.getStatsFromCalendarAPI(accessToken, cuentaGmailId);
      } catch {
        this.logger.warn(`⚠️ Calendar API no disponible, usando BD`);
        
        const dbStats = await this.eventStatsRepo.getStats(cuentaGmailId);
        
        if (dbStats.total_events > 0) {
          return {
            totalEvents: dbStats.total_events,
            upcomingEvents: dbStats.upcoming_events,
            pastEvents: dbStats.past_events
          };
        }
        
        return {
          totalEvents: 0,
          upcomingEvents: 0,
          pastEvents: 0
        };
      }

    } catch (error) {
      this.logger.error('❌ Error obteniendo estadísticas:', error);
      throw new Error('Error al obtener estadísticas');
    }
  }

  // ================================
  // 🔄 SINCRONIZACIÓN
  // ================================
  async syncEventsWithToken(
    accessToken: string,
    cuentaGmailId: string,
    options: SyncOptions = {}
  ) {
    try {
      this.logger.log(`🔄 Sincronizando cuenta ${cuentaGmailId}`);
      
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId inválido');
      }
      
      const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);
      
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      const timeMin = options.timeMin || new Date().toISOString();
      const maxResults = Math.min(options.maxEvents || 100, 250);
      
      let timeMaxString: string | undefined;
      if (options.timeMax) {
        timeMaxString = typeof options.timeMax === 'string' 
          ? options.timeMax 
          : new Date(options.timeMax).toISOString();
      }

      const response = await calendar.events.list({
        calendarId: 'primary',
        timeMin,
        timeMax: timeMaxString,
        maxResults,
        singleEvents: true,
        orderBy: 'startTime'
      });

      const events = response.data.items || [];
      this.logger.log(`📅 Encontrados ${events.length} eventos`);

      if (events.length === 0) {
        return {
          success: true,
          message: 'No hay eventos nuevos',
          stats: {
            cuenta_gmail_id: cuentaGmailId,
            events_nuevos: 0,
            events_actualizados: 0,
            tiempo_total_ms: 0
          }
        };
      }

      const eventsMetadata: EventMetadataDB[] = events.map(event => ({
        cuenta_gmail_id: cuentaGmailId,
        google_event_id: event.id!,
        summary: event.summary || '',
        location: event.location || '',
        description: event.description || '',
        start_time: event.start?.dateTime ? new Date(event.start.dateTime) : undefined,
        end_time: event.end?.dateTime ? new Date(event.end.dateTime) : undefined,
        attendees: event.attendees?.map(a => a.email!).filter(Boolean) || []
      }));

      const syncResult = await this.eventSyncRepo.syncEventsMetadata(eventsMetadata);

      this.logger.log(`✅ Sync: ${syncResult.events_nuevos} nuevos, ${syncResult.events_actualizados} actualizados`);

      return {
        success: true,
        message: 'Sincronización completada',
        stats: {
          cuenta_gmail_id: cuentaGmailId,
          events_nuevos: syncResult.events_nuevos,
          events_actualizados: syncResult.events_actualizados,
          tiempo_total_ms: syncResult.tiempo_ms
        }
      };

    } catch (error) {
      this.logger.error(`❌ Error en sincronización:`, error);
      throw new Error('Error sincronizando eventos');
    }
  }

  // ================================
  // 🔍 OBTENER CUENTAS GMAIL
  // ================================
  async obtenerCuentasGmailUsuario(userId: string) {
    try {
      this.logger.log(`🔍 Obteniendo cuentas Gmail para usuario ${userId}`);
      const cuentas = await this.userAccountsRepo.findByUser(userId);
      this.logger.log(`📧 Usuario ${userId} tiene ${cuentas?.length || 0} cuentas`);
      return cuentas;
    } catch (error) {
      this.logger.error(`❌ Error obteniendo cuentas:`, error);
      throw new Error('Error obteniendo cuentas Gmail');
    }
  }

  // ================================
  // 🔧 MÉTODOS PRIVADOS
  // ================================
  private async getStatsFromCalendarAPI(
    accessToken: string, 
    cuentaGmailId: string
  ): Promise<CalendarStats> {
    if (!cuentaGmailId || cuentaGmailId.trim() === '') {
      throw new Error('cuentaGmailId inválido');
    }

    const validAccessToken = await this.tokenRepo.getValidToken(cuentaGmailId);

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: validAccessToken });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const now = new Date().toISOString();

    const [pastEvents, futureEvents] = await Promise.all([
      calendar.events.list({
        calendarId: 'primary',
        timeMax: now,
        maxResults: 250,
        singleEvents: true
      }),
      calendar.events.list({
        calendarId: 'primary',
        timeMin: now,
        maxResults: 250,
        singleEvents: true
      })
    ]);

    const pastCount = pastEvents.data.items?.length || 0;
    const futureCount = futureEvents.data.items?.length || 0;

    return {
      totalEvents: pastCount + futureCount,
      upcomingEvents: futureCount,
      pastEvents: pastCount
    };
  }

  private async saveEventToDB(
    event: GoogleCalendarEvent, 
    cuentaGmailId: string
  ): Promise<void> {
    try {
      if (!event.id) return;

      const eventMetadata: EventMetadataDB = {
        cuenta_gmail_id: cuentaGmailId,
        google_event_id: event.id,
        summary: event.summary || '',
        location: event.location || '',
        description: event.description || '',
        start_time: event.start?.dateTime ? new Date(event.start.dateTime) : undefined,
        end_time: event.end?.dateTime ? new Date(event.end.dateTime) : undefined,
        attendees: event.attendees?.map(a => a.email || '').filter(Boolean) || []
      };

      await this.eventSyncRepo.syncEventsMetadata([eventMetadata]);
      this.logger.log(`💾 Evento ${event.id} guardado`);
    } catch (error: unknown) {
      this.logger.debug(`Background save error: ${safeGetErrorMessage(error)}`);
    }
  }

  private async updateEventInDB(
    eventId: string, 
    event: GoogleCalendarEvent, 
    cuentaGmailId: string
  ): Promise<void> {
    try {
      await this.saveEventToDB(event, cuentaGmailId);
      this.logger.log(`✏️ Evento ${eventId} actualizado en BD`);
    } catch (error: unknown) {
      this.logger.debug(`Background update error: ${safeGetErrorMessage(error)}`);
    }
  }

  private async deleteEventFromDB(eventId: string): Promise<void> {
    try {
      await this.eventSyncRepo.deleteByGoogleEventId(eventId);
      this.logger.log(`🗑️ Evento ${eventId} eliminado de BD`);
    } catch (error: unknown) {
      this.logger.debug(`Background delete error: ${safeGetErrorMessage(error)}`);
    }
  }


/**
 * 🔑 Obtener token válido para una cuenta específica
 */
async getValidTokenForAccount(cuentaGmailId: string): Promise<string> {
  try {
    this.logger.log(`🔑 Obteniendo token para cuenta Gmail ${cuentaGmailId}`);
    return await this.tokenRepo.getValidToken(cuentaGmailId);
  } catch (error: unknown) {
    const errorMessage = safeGetErrorMessage(error);
    this.logger.error(`❌ Error obteniendo token: ${errorMessage}`);
    throw new Error(`No se pudo obtener token para cuenta ${cuentaGmailId}: ${errorMessage}`);
  }
}
}