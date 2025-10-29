import type { events_sincronizados } from '../../../../generated/prisma';
import type { CalendarEventMetadata, CreateEventDto, UpdateEventDto } from '../types/prisma-calendar.types';
import type { GoogleCalendarEvent } from '../interfaces/calendar-types';

/**
 * Convierte un evento de BD (Prisma) a CalendarEventMetadata
 */
export function convertDBToEventMetadata(dbEvent: events_sincronizados): CalendarEventMetadata {
  return {
    id: dbEvent.google_event_id,
    google_event_id: dbEvent.google_event_id,  // <-- agregado
    cuenta_gmail_id: dbEvent.cuenta_gmail_id,  // corregido
    summary: dbEvent.summary || 'Sin título',
    location: dbEvent.location ?? undefined,
    description: dbEvent.description ?? undefined,
    startTime: dbEvent.start_time || new Date(),
    endTime: dbEvent.end_time || new Date(),
    attendees: dbEvent.attendees || [],
    isAllDay: false,
    status: 'confirmed',
    sourceAccount: dbEvent.cuenta_gmail_id,
    sourceAccountId: dbEvent.cuenta_gmail_id,
  };
}


/**
 * Convierte CreateEventDto a formato Google Calendar
 */
export function convertCreateEventToGoogleFormat(eventBody: CreateEventDto): GoogleCalendarEvent {
  const googleEvent: GoogleCalendarEvent = {
    summary: eventBody.summary,
    start: { dateTime: eventBody.startDateTime },
    end: { dateTime: eventBody.endDateTime },
  };

  if (eventBody.location) googleEvent.location = eventBody.location;
  if (eventBody.description) googleEvent.description = eventBody.description;
  if (eventBody.attendees) googleEvent.attendees = eventBody.attendees.map(email => ({ email }));

  return googleEvent;
}

/**
 * Convierte UpdateEventDto a formato Google Calendar
 */
export function convertUpdateEventToGoogleFormat(eventBody: UpdateEventDto): Partial<GoogleCalendarEvent> {
  const updateData: Partial<GoogleCalendarEvent> = {};
  if (eventBody.summary) updateData.summary = eventBody.summary;
  if (eventBody.location) updateData.location = eventBody.location;
  if (eventBody.description) updateData.description = eventBody.description;
  if (eventBody.startDateTime) updateData.start = { dateTime: eventBody.startDateTime };
  if (eventBody.endDateTime) updateData.end = { dateTime: eventBody.endDateTime };
  if (eventBody.attendees) updateData.attendees = eventBody.attendees.map(email => ({ email }));
  return updateData;
}
