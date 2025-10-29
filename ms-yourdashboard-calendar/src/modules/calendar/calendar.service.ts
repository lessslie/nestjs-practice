// IMPLEMENTACIÓN DE PRISMA PRUEBA NO TERMINADA CON ERRORES

// import { Injectable, Logger } from '@nestjs/common';
// import { google, calendar_v3 } from 'googleapis';
// import { EventSyncRepository } from '../../core/database/repositories/event-sync.repository';
// import { EventStatsRepository } from '../../core/database/repositories/event-stats.repository';
// import { EventSearchRepository } from '../../core/database/repositories/event-search.repository';
// import { GmailAccountRepository } from '../../core/database/repositories/gmail-account.repository';
// import { TokenRepository } from '../../core/database/repositories/token.repository';
// import { UserGmailAccountsRepository } from '../../core/database/repositories/user-gmail-accounts.repository';
// import { HealthRepository } from '../../core/database/repositories/health.repository';

// // import type { GoogleCalendarEvent } from '../calendar/interfaces/calendar-types';
// import type {
//   CalendarEventMetadata,
//   EventSearchFilters,
//   EventSearchResult,
//   SyncResult,
//   CreateEventDto,
//   UpdateEventDto
// } from '../calendar/types/prisma-calendar.types';

// import { 
//   convertCreateEventToGoogleFormat, 
//   convertUpdateEventToGoogleFormat 
// } from '../calendar/utils/conversion-prisma.utils';

// import { safeGetErrorMessage, safeGetErrorCode } from '../calendar/interfaces/calendar-types';

// @Injectable()
// export class CalendarService {
//   private readonly logger = new Logger(CalendarService.name);

//   constructor(
//     private readonly eventSyncRepo: EventSyncRepository,
//     private readonly eventStatsRepo: EventStatsRepository,
//     private readonly eventSearchRepo: EventSearchRepository,
//     private readonly gmailAccountRepo: GmailAccountRepository,
//     private readonly tokenRepo: TokenRepository,
//     private readonly userAccountsRepo: UserGmailAccountsRepository,
//     private readonly healthRepo: HealthRepository,
//   ) {}

//   // ===============================
//   // 🔑 TOKEN CON AUTO-REFRESH
//   // ===============================
//   async getValidTokenForAccount(cuentaGmailId: string): Promise<string> {
//     try {
//       this.logger.log(`🔑 Obteniendo token para cuenta Gmail ${cuentaGmailId}`);
//       return this.tokenRepo.getValidToken(cuentaGmailId);
//     } catch (error: unknown) {
//       const msg = safeGetErrorMessage(error);
//       this.logger.error(`❌ Error obteniendo token para cuenta ${cuentaGmailId}: ${msg}`);
//       throw new Error(`No se pudo obtener token para cuenta Gmail ${cuentaGmailId}: ${msg}`);
//     }
//   }

//   // ===============================
//   // 🔄 FUNCION PRIVADA: MAPEAR GOOGLE EVENT → PRISMA
//   // ===============================

// private mapGoogleEventToMetadata(
//   event: calendar_v3.Schema$Event,
//   cuentaGmailId: string
// ): CalendarEventMetadata {
//   return {
//     cuenta_gmail_id: cuentaGmailId,
//     id: event.id || '',                     // si es null, lo convierte en ''
//     google_event_id: event.id || '',
//     summary: event.summary || '',
//     location: event.location ?? undefined,
//     description: event.description ?? undefined,
//     startTime: event.start?.dateTime ? new Date(event.start.dateTime) : new Date(),
//     endTime: event.end?.dateTime ? new Date(event.end.dateTime) : new Date(),
//     attendees: event.attendees?.map(a => a.email!).filter(Boolean) || [],
//     isAllDay: false,
//     status: event.status || 'confirmed',
//     sourceAccount: cuentaGmailId,
//     sourceAccountId: cuentaGmailId,
//   };
// }


//   // ===============================
//   // 🤝 COMPARTIR CALENDARIO
//   // ===============================
//   async shareCalendarWithToken(
//     cuentaGmailId: string,
//     calendarId: string,
//     userEmail: string,
//     role: 'reader' | 'writer' | 'owner',
//   ): Promise<any> {
//     try {
//       if (!cuentaGmailId?.trim()) throw new Error('cuentaGmailId inválido');

//       const accessToken = await this.getValidTokenForAccount(cuentaGmailId);
//       const oauth2Client = new google.auth.OAuth2();
//       oauth2Client.setCredentials({ access_token: accessToken });
//       const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

//       const response = await calendar.acl.insert({
//         calendarId,
//         requestBody: { role, scope: { type: 'user', value: userEmail } },
//       });

//       const aclData = response.data;
//       if (!aclData?.id) throw new Error('Regla ACL inválida');

//       this.logger.log(`✅ Calendario compartido con ${userEmail}`);
//       return {
//         success: true,
//         message: 'Calendar compartido exitosamente',
//         shared_with: userEmail,
//         role: aclData.role || role,
//         calendar_id: calendarId,
//       };
//     } catch (error: unknown) {
//       const code = safeGetErrorCode(error);
//       const msg = safeGetErrorMessage(error);
//       if (code === 400) throw new Error(`Error de validación: ${msg}`);
//       if (code === 403) throw new Error('No tienes permisos para compartir este calendario');
//       if (code === 401) throw new Error('Token inválido o expirado');
//       throw new Error(`Error compartiendo calendario: ${msg}`);
//     }
//   }

//   // ===============================
//   // 📊 OBTENER ESTADÍSTICAS
//   // ===============================
//   async getCalendarStatsWithToken(cuentaGmailId: string): Promise<any> {
//     if (!cuentaGmailId?.trim()) throw new Error('cuentaGmailId inválido');
//     try {
//       const stats = await this.eventStatsRepo.getStats(cuentaGmailId);
//       return {
//         totalEvents: stats.total_events,
//         upcomingEvents: stats.upcoming_events,
//         pastEvents: stats.past_events,
//       };
//     } catch (error: unknown) {
//       const msg = safeGetErrorMessage(error);
//       this.logger.error(`❌ Error obteniendo estadísticas: ${msg}`);
//       throw new Error('Error al obtener estadísticas de Calendar');
//     }
//   }

//   // ===============================
//   // 🔄 SINCRONIZACIÓN DE EVENTOS
//   // ===============================
//   async syncEventsWithToken(cuentaGmailId: string, options: { timeMin?: Date; timeMax?: Date; maxEvents?: number } = {}): Promise<SyncResult> {
//     if (!cuentaGmailId?.trim()) throw new Error('cuentaGmailId inválido');

//     const accessToken = await this.getValidTokenForAccount(cuentaGmailId);
//     const oauth2Client = new google.auth.OAuth2();
//     oauth2Client.setCredentials({ access_token: accessToken });
//     const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

//     const timeMin = options.timeMin?.toISOString() || new Date().toISOString();
//     const timeMax = options.timeMax?.toISOString();
//     const maxResults = Math.min(options.maxEvents || 100, 250);

//     const response = await calendar.events.list({
//       calendarId: 'primary',
//       timeMin,
//       timeMax,
//       maxResults,
//       singleEvents: true,
//       orderBy: 'startTime',
//     });

//     const events = response.data.items || [];
//     const eventsMetadata = events.map(e => this.mapGoogleEventToMetadata(e, cuentaGmailId));

//     const existingIds = (await this.eventSyncRepo.findPaginated(cuentaGmailId, 1, 1000))
//       .events.map(e => e.google_event_id);

//     const newEvents = eventsMetadata.filter(e => !existingIds.includes(e.google_event_id));
//     const updatedEvents = eventsMetadata.filter(e => existingIds.includes(e.google_event_id));

//     const startTime = Date.now();
//     if (newEvents.length) await this.eventSyncRepo.upsertMany(newEvents as any);
//     if (updatedEvents.length) await this.eventSyncRepo.upsertMany(updatedEvents as any);
//     const tiempo = Date.now() - startTime;

//     return {
//       events_nuevos: newEvents.length,
//       events_actualizados: updatedEvents.length,
//       total_procesados: events.length,
//       tiempo_ms: tiempo,
//     };
//   }

//   // ===============================
//   // 💾 CREAR / ACTUALIZAR / ELIMINAR EVENTOS
//   // ===============================
//   async createEvent(eventBody: CreateEventDto, cuentaGmailId: string) {
//     const accessToken = await this.getValidTokenForAccount(cuentaGmailId);
//     const oauth2Client = new google.auth.OAuth2();
//     oauth2Client.setCredentials({ access_token: accessToken });
//     const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

//     const googleEvent = convertCreateEventToGoogleFormat(eventBody);
//     const createdEvent = await calendar.events.insert({ calendarId: 'primary', requestBody: googleEvent });

//     await this.saveEventToDB(createdEvent.data, cuentaGmailId);

//     return this.mapGoogleEventToMetadata(createdEvent.data, cuentaGmailId);
//   }

//   async updateEvent(eventId: string, eventBody: UpdateEventDto, cuentaGmailId: string) {
//     const accessToken = await this.getValidTokenForAccount(cuentaGmailId);
//     const oauth2Client = new google.auth.OAuth2();
//     oauth2Client.setCredentials({ access_token: accessToken });
//     const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

//     const googleEvent = convertUpdateEventToGoogleFormat(eventBody);
//     const updatedEvent = await calendar.events.update({ calendarId: 'primary', eventId, requestBody: googleEvent });

//     await this.saveEventToDB(updatedEvent.data, cuentaGmailId);

//     return this.mapGoogleEventToMetadata(updatedEvent.data, cuentaGmailId);
//   }

//   async deleteEvent(eventId: string) {
//   await this.eventSyncRepo.delete({
//     where: { google_event_id: eventId },
//   });
//   this.logger.log(`🗑️ Evento ${eventId} eliminado de BD`);
// }

//   async saveEventToDB(event: calendar_v3.Schema$Event, cuentaGmailId: string) {
//   if (!event.id) return;
//   await this.eventSyncRepo.upsertMany([this.mapGoogleEventToMetadata(event, cuentaGmailId)] as any);
//   this.logger.log(`💾 Evento ${event.id} guardado en BD`);
// }

//   // ===============================
//   // 🔍 BÚSQUEDA DE EVENTOS Y CUENTAS
//   // ===============================
//   async searchEvents(filters: EventSearchFilters): Promise<EventSearchResult[]> {
//     const events = await this.eventSearchRepo.search(filters);
//     return events.map(e => ({
//       cuenta_gmail_id: e.cuenta_gmail_id,
//       id: e.id,
//       google_event_id: e.google_event_id,
//       summary: e.summary,
//       location: e.location,
//       description: e.description,
//       start_time: e.start_time,
//       end_time: e.end_time,
//       attendees: e.attendees,
//       fecha_sincronizado: e.fecha_sincronizado,
//     }));
//   }

//   async obtenerCuentasGmailUsuario(userId: string) {
//     return this.userAccountsRepo.findByUser(userId);
//   }
// }




import { Injectable, Logger } from '@nestjs/common';
import { google, calendar_v3 } from 'googleapis';
import { ConfigService } from '@nestjs/config';
import { 
  DatabaseService, 
  EventMetadataDB, 
  EventSearchFilters 
} from '../../core/database/database.service';

import { CreateEventDto } from './dto/create-event.dto';
import { CreateEventRequestBody, GoogleCalendarEvent, safeGetErrorCode, safeGetErrorMessage, ShareCalendarResponse, UnshareCalendarResponse, UpdateEventRequestBody } from './interfaces/calendar-types';
import { convertAPIToEventMetadata, convertCreateEventToGoogleFormat, convertDBToEventMetadata, convertUpdateEventToGoogleFormat, getSafeEventTitle, isValidCreateEventBody } from './utils/conversion.utils';

// 🎯 INTERFACES PARA CALENDAR SERVICE
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
    private readonly databaseService: DatabaseService
  ) {}

  // ================================
  // 📅 EVENTOS - MÉTODOS PRINCIPALES
  // ================================

/**
   * 📅 Listar eventos con token - PATRÓN MS-EMAIL CON TIPADO SEGURO
   */
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

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 🎯 ESTRATEGIA: Google Calendar API primero (como MS-Email)
      try {
        this.logger.log(`📡 Obteniendo eventos desde Google Calendar API`);
        
        // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
        const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);
        
        if (!validAccessToken) {
          throw new Error('No se pudo obtener token válido');
        }

        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: validAccessToken });
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        // ✅ CORRECCIÓN: Convertir timeMax y asegurar tipos
       let maxTime: string;
if (timeMax) {
  maxTime = typeof timeMax === 'string' ? timeMax : new Date(timeMax).toISOString();
} else {
  maxTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
}
        // 🎯 Para paginación en Calendar API, usamos pageToken en lugar de skip/limit
        const maxResults = Math.min(limit * page, 250); // Calendar API limit
        
        const response = await calendar.events.list({
          calendarId: 'primary',
          timeMin,
          timeMax: maxTime,
          maxResults,
          singleEvents: true,
          orderBy: 'startTime'
        });

        const allEvents = response.data.items || [];
        
        // Simular paginación manualmente
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedEvents = allEvents.slice(startIndex, endIndex);
        
        // Usar utility function tipada
        const events = paginatedEvents
          .filter(event => event && event.id) // Filtrar eventos válidos
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
        
        // 🎯 FALLBACK: BD local si falla API
        const dbResult = await this.databaseService.getEventsPaginated(
          cuentaGmailId, 
          page, 
          limit,
          true // Solo eventos futuros
        );

        if (dbResult.total > 0) {
          this.logger.log(`💾 FALLBACK exitoso: ${dbResult.events.length} eventos desde BD`);
          
          const events = dbResult.events.map(dbEvent => convertDBToEventMetadata(dbEvent));
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
      this.logger.error('❌ Error obteniendo eventos:', {
        message: errorMessage,
        cuentaGmailId
      });
      
      throw new Error('Error al consultar eventos: ' + errorMessage);
    }
  }

/**
   * 🔍 Buscar eventos con token - CON BÚSQUEDA PARCIAL MEJORADA Y TIPADO SEGURO
   */
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

      // 🔍 Validaciones básicas
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

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 🎯 ESTRATEGIA: Google Calendar API primero
      try {
        this.logger.log(`🌐 Buscando en Google Calendar API`);
        
        // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
        const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);
        
        if (!validAccessToken) {
          throw new Error('No se pudo obtener token válido');
        }

        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: validAccessToken });
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        // ✨ MEJORA: Obtener más eventos para filtrar localmente
        const maxResults = Math.min(250, limit * page * 3); // Obtener 3x más para filtrar

        // 🔍 PRIMERA BÚSQUEDA: Con término original
        let response = await calendar.events.list({
          calendarId: 'primary',
          timeMin,
          q: searchTerm.trim(),
          maxResults,
          singleEvents: true,
          orderBy: 'startTime'
        });

        let allEvents = response.data.items || [];

        // ✨ SI NO ENCUENTRA NADA, BUSCAR SIN FILTRO Y FILTRAR LOCALMENTE
        if (allEvents.length === 0) {
          this.logger.log(`🔍 Sin resultados con Google API, buscando localmente...`);
          
          // Obtener eventos sin filtro de búsqueda
          response = await calendar.events.list({
            calendarId: 'primary',
            timeMin,
            maxResults: 250,
            singleEvents: true,
            orderBy: 'startTime'
          });

          const eventsToFilter = response.data.items || [];
          const searchTermLower = searchTerm.toLowerCase().trim();

          // 🎯 FILTRAR LOCALMENTE CON BÚSQUEDA PARCIAL - TIPADO SEGURO
          allEvents = eventsToFilter.filter((event): event is calendar_v3.Schema$Event => {
            if (!event) return false;
            
            const summary = (event.summary || '').toLowerCase();
            const description = (event.description || '').toLowerCase();
            const location = (event.location || '').toLowerCase();
            
            // Búsqueda parcial: "duo" encuentra "duolingo"
            return summary.includes(searchTermLower) || 
                   description.includes(searchTermLower) ||
                   location.includes(searchTermLower);
          });

          this.logger.log(`🎯 Filtrado local encontró: ${allEvents.length} eventos`);
        }
        
        // Paginación manual con los eventos filtrados
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedEvents = allEvents.slice(startIndex, endIndex);
        
        // Usar utility function tipada
        const events = paginatedEvents
          .filter(event => event && event.id) // Filtrar eventos válidos
          .map(event => convertAPIToEventMetadata(event as GoogleCalendarEvent));
          
        const totalPages = Math.ceil(allEvents.length / limit);

        this.logger.log(`✅ Búsqueda completada: ${allEvents.length} eventos encontrados, ${events.length} en página ${page}`);

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
        this.logger.warn(`⚠️ Calendar API falló para búsqueda, intentando BD como fallback: ${errorMessage}`);
        
        // 🎯 FALLBACK: BD local con búsqueda parcial
        const filters: EventSearchFilters = {
          search_text: searchTerm.trim(),
          start_date: new Date(timeMin)
        };

        const searchResult = await this.databaseService.searchEventsInDB(
          cuentaGmailId,
          filters,
          page,
          limit
        );

        const events = searchResult.events.map(dbEvent => convertDBToEventMetadata(dbEvent));
        const totalPages = Math.ceil(searchResult.total / limit);

        this.logger.log(`💾 Fallback BD exitoso: ${searchResult.total} eventos encontrados`);

        return {
          events,
          total: searchResult.total,
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
      this.logger.error('❌ Error en búsqueda de eventos:', {
        message: errorMessage,
        searchTerm,
        cuentaGmailId
      });
      
      throw new Error(`Error al buscar eventos: ${errorMessage}`);
    }
  }
/**
   * 🚫 Revocar acceso al calendar con token (CON AUTO-REFRESH Y TIPADO SEGURO)
   */
  async unshareCalendarWithToken(
    accessToken: string,
    cuentaGmailId: string,
    calendarId: string,
    aclRuleId: string,
    userEmail: string
  ): Promise<UnshareCalendarResponse> {
    try {
      this.logger.log(`🚫 Revocando acceso al calendar ${calendarId} para ${userEmail} (regla: ${aclRuleId})`);

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // Obtener token válido (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);

      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      // Eliminar la regla ACL
      await calendar.acl.delete({
        calendarId,
        ruleId: aclRuleId
      });

      this.logger.log(`✅ Acceso revocado exitosamente para ${userEmail} en calendar ${calendarId}`);
      
      return {
        success: true,
        message: 'Acceso al calendar revocado exitosamente',
        revoked_from: userEmail,
        calendar_id: calendarId
      };

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error revocando acceso al calendar: ${errorMessage}`);
      
      // Manejo específico de errores de Google Calendar API
      if (errorCode === 404) {
        throw new Error(`El usuario ${userEmail} no tiene acceso a este calendar`);
      }
      
      if (errorCode === 403) {
        throw new Error('No tienes permisos para gestionar el acceso a este calendar');
      }
      
      if (errorCode === 401) {
        throw new Error('Token de autorización inválido o expirado');
      }
      
      throw new Error(`Error revocando acceso al calendar: ${errorMessage}`);
    }
  }
  
 /**
   * 📋 Obtener evento específico por ID con token (CON AUTO-REFRESH Y TIPADO SEGURO)
   */
  async getEventByIdWithToken(
    accessToken: string,
    cuentaGmailId: string,
    eventId: string
  ): Promise<GoogleCalendarEvent> {
    try {
      this.logger.log(`📋 Obteniendo evento ${eventId} para cuenta Gmail ${cuentaGmailId}`);

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      if (!eventId || eventId.trim() === '') {
        throw new Error('eventId es requerido');
      }

      // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);
      
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      // 🎯 OBTENER EVENTO ESPECÍFICO POR ID
      const response = await calendar.events.get({
        calendarId: 'primary',
        eventId: eventId
      });

      if (!response.data) {
        throw new Error(`Evento ${eventId} not found`);
      }

      const event = response.data as GoogleCalendarEvent;

      // 🔄 FORMATEAR RESPUESTA CONSISTENTE CON OTROS MÉTODOS
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
        
        // 🆕 CAMPOS ADICIONALES ÚTILES
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

      this.logger.log(`✅ Evento ${eventId} obtenido exitosamente`);
      return formattedEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error obteniendo evento ${eventId}: ${errorMessage}`);
      
      // 🎯 MANEJO ESPECÍFICO DE ERRORES DE GOOGLE API
      if (errorCode === 404 || errorMessage.includes('Not Found') || errorMessage.includes('not found')) {
        throw new Error(`Evento ${eventId} no encontrado`);
      }
      
      if (errorCode === 403) {
        throw new Error('No tienes permisos para acceder a este evento');
      }
      
      if (errorCode === 401) {
        throw new Error('Token de autorización inválido o expirado');
      }
      
      if (errorCode === 410) {
        throw new Error('El evento ha sido eliminado');
      }
      
      throw new Error(`Error obteniendo evento: ${errorMessage}`);
    }
  }
  /**
   * ➕ Crear evento con token (CON AUTO-REFRESH)
   */

  async createEventWithToken(
    accessToken: string, 
    cuentaGmailId: string, 
    eventBody: CreateEventRequestBody
  ): Promise<GoogleCalendarEvent> {
    try {
      // Obtener título seguro para logging
      const eventTitle = getSafeEventTitle(eventBody);
      this.logger.log(`➕ Creando evento "${eventTitle}" para cuenta Gmail ${cuentaGmailId}`);

      // Validación tipada
      if (!isValidCreateEventBody(eventBody)) {
        throw new Error('Los campos summary, startDateTime y endDateTime son requeridos');
      }

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);
      
      if (!validAccessToken) {
        throw new Error('No se pudo obtener token válido para la cuenta');
      }

      // Configurar Google Calendar API
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      // 🔧 CONSTRUIR OBJETO PARA GOOGLE CALENDAR API - TIPADO SEGURO
      const googleEvent = convertCreateEventToGoogleFormat(eventBody);

      this.logger.debug(`🔧 Evento a crear en Google Calendar:`, {
        summary: googleEvent.summary,
        start: googleEvent.start,
        end: googleEvent.end,
        hasLocation: !!googleEvent.location,
        hasDescription: !!googleEvent.description,
        attendeesCount: googleEvent.attendees?.length || 0
      });

      // 🎯 CREAR EVENTO EN GOOGLE CALENDAR
      const response = await calendar.events.insert({
        calendarId: 'primary',
        sendUpdates: googleEvent.attendees ? 'all' : 'none', // Solo enviar updates si hay asistentes
        requestBody: googleEvent
      });

      if (!response.data || !response.data.id) {
        throw new Error('Google Calendar no devolvió un evento válido');
      }

      // 🎯 GUARDAR EN BD EN BACKGROUND (como MS-Email)
      this.saveEventToDB(response.data as GoogleCalendarEvent, cuentaGmailId).catch(err => {
        const errorMessage = safeGetErrorMessage(err);
        this.logger.debug(`Background save error (ignorado): ${errorMessage}`);
      });

      this.logger.log(`✅ Evento creado exitosamente: ${response.data.id}`);
      this.logger.log(`🔗 Link del evento: ${response.data.htmlLink}`);

      return response.data as GoogleCalendarEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error creando evento:`, {
        message: errorMessage,
        code: errorCode,
        eventSummary: getSafeEventTitle(eventBody)
      });
      
      // 🎯 MANEJO ESPECÍFICO DE ERRORES
      if (errorMessage.includes('Invalid dateTime')) {
        throw new Error('Formato de fecha inválido. Use formato ISO 8601 (ej: 2025-08-20T15:00:00.000Z)');
      }
      
      if (errorCode === 400) {
        throw new Error(`Error de validación: ${errorMessage}`);
      }
      
      if (errorCode === 401 || errorCode === 403) {
        throw new Error('Error de autenticación: Token inválido o permisos insuficientes');
      }
      
      if (errorCode === 429) {
        throw new Error('Límite de API alcanzado. Intenta de nuevo en unos minutos');
      }
      
      throw new Error(`Error al crear evento: ${errorMessage}`);
    }
  }

  /**
   * ➕ Crear evento privado con token (CON AUTO-REFRESH)
   */
 async createPrivateEventWithToken(
    accessToken: string,
    cuentaGmailId: string,
    dto: CreateEventDto
  ): Promise<GoogleCalendarEvent> {
    try {
      this.logger.log(`➕ Creando evento PRIVADO para cuenta Gmail ${cuentaGmailId}`);

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);

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
        throw new Error('Google Calendar no devolvió un evento válido');
      }

      // Guardar en BD en background
      this.saveEventToDB(response.data as GoogleCalendarEvent, cuentaGmailId).catch(err => {
        const errorMessage = safeGetErrorMessage(err);
        this.logger.debug(`Background save error (ignorado): ${errorMessage}`);
      });

      this.logger.log(`✅ Evento privado creado: ${response.data.id}`);
      return response.data as GoogleCalendarEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.error('❌ Error creando evento privado:', errorMessage);
      throw new Error('Error al crear evento privado');
    }
  }

 /**
   * ✏️ Actualizar evento con token (CON AUTO-REFRESH Y TIPADO SEGURO)
   */
  async updateEventWithToken(
    accessToken: string,
    cuentaGmailId: string,
    eventId: string,
    eventBody: UpdateEventRequestBody
  ): Promise<GoogleCalendarEvent> {
    try {
      this.logger.log(`✏️ Actualizando evento ${eventId} para cuenta Gmail ${cuentaGmailId}`);

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);
      
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      // Convertir DTO a formato Google Calendar usando utility tipada
      const updateData = convertUpdateEventToGoogleFormat(eventBody);

      const response = await calendar.events.patch({
        calendarId: 'primary',
        eventId: eventId,
        sendUpdates: 'all',
        requestBody: updateData
      });

      if (!response.data || !response.data.id) {
        throw new Error('Google Calendar no devolvió un evento válido');
      }

      // Actualizar en BD en background
      this.updateEventInDB(eventId, response.data as GoogleCalendarEvent, cuentaGmailId).catch(err => {
        const errorMessage = safeGetErrorMessage(err);
        this.logger.debug(`Background update error (ignorado): ${errorMessage}`);
      });

      this.logger.log(`✅ Evento actualizado: ${eventId}`);
      return response.data as GoogleCalendarEvent;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error actualizando evento ${eventId}: ${errorMessage}`);
      
      // Manejo específico de errores
      if (errorCode === 404) {
        throw new Error(`Evento ${eventId} no encontrado`);
      }
      
      if (errorCode === 403) {
        throw new Error('No tienes permisos para actualizar este evento');
      }
      
      if (errorCode === 401) {
        throw new Error('Token de autorización inválido o expirado');
      }
      
      throw new Error('Error al actualizar evento');
    }
  }

  /**
   * 🗑️ Eliminar evento con token (CON AUTO-REFRESH Y TIPADO SEGURO)
   */
  async deleteEventWithToken(
    accessToken: string,
    cuentaGmailId: string,
    eventId: string
  ): Promise<{ message: string }> {
    try {
      this.logger.log(`🗑️ Eliminando evento ${eventId} para cuenta Gmail ${cuentaGmailId}`);

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);
      
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      await calendar.events.delete({
        calendarId: 'primary',
        eventId: eventId,
        sendUpdates: 'all'
      });

      // Eliminar de BD en background
      this.deleteEventFromDB(eventId).catch(err => {
        const errorMessage = safeGetErrorMessage(err);
        this.logger.debug(`Background delete error (ignorado): ${errorMessage}`);
      });

      this.logger.log(`✅ Evento eliminado: ${eventId}`);
      return { message: 'Evento eliminado correctamente' };

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      const errorCode = safeGetErrorCode(error);
      
      this.logger.error(`❌ Error eliminando evento ${eventId}: ${errorMessage}`);
      
      // Manejo específico de errores
      if (errorCode === 404) {
        throw new Error(`Evento ${eventId} no encontrado`);
      }
      
      if (errorCode === 403) {
        throw new Error('No tienes permisos para eliminar este evento');
      }
      
      if (errorCode === 401) {
        throw new Error('Token de autorización inválido o expirado');
      }
      
      throw new Error('Error al eliminar evento');
    }
  }

/**
   * 🤝 Compartir calendario con token (CON AUTO-REFRESH Y TIPADO SEGURO)
   */
  async shareCalendarWithToken(
    accessToken: string,
    cuentaGmailId: string,
    calendarId: string,
    userEmail: string,
    role: 'reader' | 'writer' | 'owner'
  ): Promise<ShareCalendarResponse> {
    try {
      this.logger.log(`🤝 Compartiendo calendario con ${userEmail} como ${role}`);

      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);

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

      // Validar respuesta tipada
      const aclData = response.data;
      if (!aclData || !aclData.id) {
        throw new Error('Google Calendar no devolvió una regla ACL válida');
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
      
      // Manejo específico de errores
      if (errorCode === 400) {
        throw new Error(`Error de validación: ${errorMessage}`);
      }
      
      if (errorCode === 403) {
        throw new Error('No tienes permisos para compartir este calendario');
      }
      
      if (errorCode === 401) {
        throw new Error('Token de autorización inválido o expirado');
      }
      
      throw new Error('Error al compartir calendario');
    }
  }

  /**
   * 📊 Obtener estadísticas con token
   */
  async getCalendarStatsWithToken(accessToken: string, cuentaGmailId: string): Promise<CalendarStats> {
    try {
      this.logger.log(`📊 🎯 ESTADÍSTICAS para cuenta Gmail ${cuentaGmailId}`);
      
      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }

      // 1️⃣ ESTRATEGIA: Google Calendar API primero
      try {
        this.logger.log(`📡 Obteniendo stats desde Google Calendar API`);
        return await this.getStatsFromCalendarAPI(accessToken, cuentaGmailId);
        
      } catch {
        this.logger.warn(`⚠️ Calendar API no disponible para stats, usando BD local`);
        
        // 2️⃣ FALLBACK: BD local
        const dbStats = await this.databaseService.getEventStatsFromDB(cuentaGmailId);
        
        if (dbStats.total_events > 0) {
          this.logger.log(`💾 FALLBACK stats desde BD: ${dbStats.total_events} eventos total`);
          
          return {
            totalEvents: dbStats.total_events,
            upcomingEvents: dbStats.upcoming_events,
            pastEvents: dbStats.past_events
          };
        } else {
          // Si no hay datos, retornar ceros
          return {
            totalEvents: 0,
            upcomingEvents: 0,
            pastEvents: 0
          };
        }
      }

    } catch (error) {
      this.logger.error('❌ Error obteniendo estadísticas:', error);
      throw new Error('Error al obtener estadísticas de Calendar');
    }
  }

  /**
   * 🔄 Sincronizar eventos con token (CON AUTO-REFRESH)
   */
  async syncEventsWithToken(
    accessToken: string,
    cuentaGmailId: string,
    options: SyncOptions = {}
  ) {
    try {
      this.logger.log(`🔄 🎉 INICIANDO SYNC para cuenta Gmail ${cuentaGmailId}`);
      
      // ✅ CAMBIO: Eliminar parsing y validar string
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new Error('cuentaGmailId debe ser un valor válido');
      }
      
      // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
      const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);
      
      // Obtener eventos desde Google Calendar API
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token: validAccessToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      const timeMin = options.timeMin || new Date().toISOString();
      const maxResults = Math.min(options.maxEvents || 100, 250); // Límite de Calendar API
      
      // ✅ CORRECCIÓN: Convertir timeMax a string si existe
   let timeMaxString: string | undefined;
if (options.timeMax) {
  timeMaxString = typeof options.timeMax === 'string' 
    ? options.timeMax 
    : new Date(options.timeMax).toISOString();
} else {
  timeMaxString = undefined;
}

      const response = await calendar.events.list({
        calendarId: 'primary',
        timeMin,
        timeMax: timeMaxString,  // ✅ Usar string convertido
        maxResults,
        singleEvents: true,
        orderBy: 'startTime'
      });

      const events = response.data.items || [];
      this.logger.log(`📅 ¡Encontrados ${events.length} eventos en Calendar!`);

      if (events.length === 0) {
        return {
          success: true,
          message: 'No hay eventos nuevos para sincronizar',
          stats: {
            cuenta_gmail_id: cuentaGmailId,
            events_nuevos: 0,
            events_actualizados: 0,
            tiempo_total_ms: 0
          }
        };
      }

      // Convertir a formato BD y guardar
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

      const syncResult = await this.databaseService.syncEventsMetadata(eventsMetadata);

      this.logger.log(`✅ Sync completado: ${syncResult.events_nuevos} nuevos, ${syncResult.events_actualizados} actualizados`);

      return {
        success: true,
        message: 'Sincronización completada exitosamente',
        stats: {
          cuenta_gmail_id: cuentaGmailId,
          events_nuevos: syncResult.events_nuevos,
          events_actualizados: syncResult.events_actualizados,
          tiempo_total_ms: syncResult.tiempo_ms
        }
      };

    } catch (error) {
      this.logger.error(`❌ Error en sincronización:`, error);
      const calendarError = error as CalendarServiceError;
      throw new Error('Error sincronizando eventos: ' + calendarError.message);
    }
  }

  // ================================
  // 🔧 MÉTODOS PRIVADOS AUXILIARES
  // ================================


  /**
   * 📊 Obtener estadísticas desde Google Calendar API (CON AUTO-REFRESH)
   */
 private async getStatsFromCalendarAPI(accessToken: string, cuentaGmailId: string): Promise<CalendarStats> {
    // ✅ CAMBIO: Eliminar parsing y validar string
    if (!cuentaGmailId || cuentaGmailId.trim() === '') {
      throw new Error('cuentaGmailId debe ser un valor válido');
    }

    // 🔄 OBTENER TOKEN VÁLIDO (con auto-refresh)
    const validAccessToken = await this.databaseService.getValidAccessToken(cuentaGmailId);

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: validAccessToken });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const now = new Date().toISOString();

    // Obtener eventos pasados y futuros en paralelo
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
    const totalCount = pastCount + futureCount;

    return {
      totalEvents: totalCount,
      upcomingEvents: futureCount,
      pastEvents: pastCount
    };
  }



  /**
   * 💾 Guardar evento en BD (background)
   */
 private async saveEventToDB(event: GoogleCalendarEvent, cuentaGmailId: string): Promise<void> {
    try {
      if (!event.id) {
        this.logger.debug(`Evento sin ID, saltando guardado en BD`);
        return;
      }

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

      await this.databaseService.syncEventsMetadata([eventMetadata]);
      this.logger.log(`💾 Evento ${event.id} guardado en BD`);
    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.debug(`Background save error: ${errorMessage}`);
    }
  }

  /**
   * ✏️ Actualizar evento en BD (background)
   */
 private async updateEventInDB(eventId: string, event: GoogleCalendarEvent, cuentaGmailId: string): Promise<void> {
    try {
      // Por simplicidad, reutilizamos el método de sync que hace UPSERT
      await this.saveEventToDB(event, cuentaGmailId);
      this.logger.log(`✏️ Evento ${eventId} actualizado en BD`);
    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.debug(`Background update error: ${errorMessage}`);
    }
  }

  /**
   * 🗑️ Eliminar evento de BD (background)
   */
private async deleteEventFromDB(eventId: string): Promise<void> {
    try {
      await this.databaseService.query(
        'DELETE FROM events_sincronizados WHERE google_event_id = $1',
        [eventId]
      );
      this.logger.log(`🗑️ Evento ${eventId} eliminado de BD`);
    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.debug(`Background delete error: ${errorMessage}`);
    }
  }


  // ================================
  // 🎯 MÉTODOS AUXILIARES PARA ENDPOINTS UNIFICADOS
  // ================================

  /**
   * 🔍 Obtener todas las cuentas Gmail de un usuario
   * Reutiliza la lógica del DatabaseService
   */
  async obtenerCuentasGmailUsuario(userId: string) {
    try {
      this.logger.log(`🔍 Obteniendo cuentas Gmail para usuario ${userId}`);
      
      // 🎯 USAR EL MÉTODO EXISTENTE DEL DATABASE SERVICE
      const cuentas = await this.databaseService.obtenerCuentasGmailUsuario(userId);
      
      this.logger.log(`📧 Usuario ${userId} tiene ${cuentas?.length || 0} cuentas Gmail`);
      
      return cuentas;
      
    } catch (error) {
      this.logger.error(`❌ Error obteniendo cuentas de usuario ${userId}:`, error);
      throw new Error(`Error obteniendo cuentas Gmail del usuario: ${error}`);
    }
  }

 /**
   * 🔑 Obtener token válido para una cuenta específica - TIPADO SEGURO
   */
  async getValidTokenForAccount(cuentaGmailId: string): Promise<string> {
    try {
      this.logger.log(`🔑 Obteniendo token para cuenta Gmail ${cuentaGmailId}`);
      
      // 🎯 CONSULTAR A MS-AUTH PARA OBTENER TOKEN (como MS-Email)
      const response = await fetch(`http://localhost:3001/tokens/gmail/${cuentaGmailId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Error obteniendo token: ${response.status}`);
      }

      // Tipado seguro de la respuesta
      const tokenData = await response.json() as {
        success?: boolean;
        accessToken?: string;
        [key: string]: unknown;
      };

      if (!tokenData.success || !tokenData.accessToken || typeof tokenData.accessToken !== 'string') {
        throw new Error('Token no válido recibido de MS-Auth');
      }

      this.logger.log(`✅ Token obtenido exitosamente para cuenta Gmail ${cuentaGmailId}`);
      return tokenData.accessToken;

    } catch (error: unknown) {
      const errorMessage = safeGetErrorMessage(error);
      this.logger.error(`❌ Error obteniendo token para cuenta ${cuentaGmailId}: ${errorMessage}`);
      throw new Error(`No se pudo obtener token para cuenta Gmail ${cuentaGmailId}: ${errorMessage}`);
    }
  }
}