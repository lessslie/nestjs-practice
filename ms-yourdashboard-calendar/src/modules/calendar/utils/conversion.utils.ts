// ms-yourdashboard-calendar/src/modules/calendar/utils/conversion.utils.ts

import { 
  GoogleCalendarEvent, 
  CalendarEventMetadata,
  CreateEventRequestBody,
  UpdateEventRequestBody 
} from '../interfaces/calendar-types';

// ✅ IMPORT CORRECTO - desde types/
import { EventMetadataDB } from '../../../core/database/types';

// ================================
// 🔄 CONVERSION UTILITIES
// ================================

/**
 * Convierte un evento de Google Calendar API a CalendarEventMetadata tipado
 */
export function convertAPIToEventMetadata(apiEvent: GoogleCalendarEvent): CalendarEventMetadata {
  return {
    id: apiEvent.id || '',
    summary: apiEvent.summary || 'Sin título',
    location: apiEvent.location || undefined,
    description: apiEvent.description || undefined,
    startTime: new Date(apiEvent.start?.dateTime || apiEvent.start?.date || ''),
    endTime: new Date(apiEvent.end?.dateTime || apiEvent.end?.date || ''),
    attendees: apiEvent.attendees?.map(a => a.email || '').filter(Boolean) || [],
    isAllDay: !!apiEvent.start?.date, // Si tiene date en lugar de dateTime, es todo el día
    status: apiEvent.status || 'confirmed',
    // ✅ Campos agregados para compatibilidad
    cuenta_gmail_id: '', // Se debe setear desde el caller
    google_event_id: apiEvent.id || ''
  };
}

/**
 * Convierte un evento de BD a CalendarEventMetadata tipado
 */
export function convertDBToEventMetadata(dbEvent: EventMetadataDB): CalendarEventMetadata {
  return {
    id: dbEvent.google_event_id,
    summary: dbEvent.summary || 'Sin título',
    location: dbEvent.location,
    description: dbEvent.description,
    startTime: dbEvent.start_time || new Date(),
    endTime: dbEvent.end_time || new Date(),
    attendees: dbEvent.attendees || [],
    isAllDay: false, // Por ahora asumimos que no son de todo el día
    status: 'confirmed',
    // ✅ Campos agregados
    cuenta_gmail_id: dbEvent.cuenta_gmail_id,
    google_event_id: dbEvent.google_event_id
  };
}

/**
 * Convierte CreateEventRequestBody a objeto para Google Calendar API
 */
export function convertCreateEventToGoogleFormat(eventBody: CreateEventRequestBody): GoogleCalendarEvent {
  const googleEvent: GoogleCalendarEvent = {
    summary: eventBody.summary,
    start: {
      dateTime: eventBody.startDateTime
    },
    end: {
      dateTime: eventBody.endDateTime
    }
  };

  // Campos opcionales
  if (eventBody.location && eventBody.location.trim()) {
    googleEvent.location = eventBody.location.trim();
  }

  if (eventBody.description && eventBody.description.trim()) {
    googleEvent.description = eventBody.description.trim();
  }

  if (eventBody.attendees && eventBody.attendees.length > 0) {
    googleEvent.attendees = eventBody.attendees
      .filter(email => email && email.trim())
      .map(email => ({ email: email.trim() }));
  }

  return googleEvent;
}

/**
 * Convierte UpdateEventRequestBody a objeto para Google Calendar API
 */
export function convertUpdateEventToGoogleFormat(eventBody: UpdateEventRequestBody): Partial<GoogleCalendarEvent> {
  const googleEvent: Partial<GoogleCalendarEvent> = {};

  if (eventBody.summary !== undefined) {
    googleEvent.summary = eventBody.summary;
  }

  if (eventBody.location !== undefined) {
    googleEvent.location = eventBody.location?.trim() || undefined;
  }

  if (eventBody.description !== undefined) {
    googleEvent.description = eventBody.description?.trim() || undefined;
  }

  if (eventBody.startDateTime) {
    googleEvent.start = { dateTime: eventBody.startDateTime };
  }

  if (eventBody.endDateTime) {
    googleEvent.end = { dateTime: eventBody.endDateTime };
  }

  if (eventBody.attendees !== undefined) {
    googleEvent.attendees = eventBody.attendees
      ?.filter(email => email && email.trim())
      .map(email => ({ email: email.trim() })) || [];
  }

  return googleEvent;
}

/**
 * Obtiene el título de un evento de forma segura
 */
export function getSafeEventTitle(event: GoogleCalendarEvent | null | undefined): string {
  if (!event) return 'Sin título';
  return event.summary?.trim() || 'Sin título';
}

/**
 * Valida si un body de crear evento es válido
 */
export function isValidCreateEventBody(body: CreateEventRequestBody): boolean {
  if (!body.summary || !body.summary.trim()) return false;
  if (!body.startDateTime || !body.endDateTime) return false;
  
  try {
    const start = new Date(body.startDateTime);
    const end = new Date(body.endDateTime);
    return start < end;
  } catch {
    return false;
  }
}