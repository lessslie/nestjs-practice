// ms-yourdashboard-calendar/src/modules/calendar/utils/conversion-prisma.utils.ts

// ✅ PATH CORREGIDO - 4 niveles arriba hacia generated/prisma
import type { events_sincronizados } from '../../../../generated/prisma';
import type { CalendarEventMetadata } from '../types/prisma-calendar.types';

/**
 * Convierte un evento de Prisma (events_sincronizados) a CalendarEventMetadata
 * 
 * ✅ Maneja correctamente los tipos nullable de Prisma
 */
export function convertDBEventToMetadata(
  dbEvent: events_sincronizados
): CalendarEventMetadata {
  return {
    // ✅ FIX: Manejar cuenta_gmail_id nullable
    cuenta_gmail_id: dbEvent.cuenta_gmail_id || '',
    google_event_id: dbEvent.google_event_id,
    id: dbEvent.id,
    summary: dbEvent.summary || 'Sin título',
    location: dbEvent.location || undefined,
    description: dbEvent.description || undefined,
    startTime: dbEvent.start_time || new Date(),
    endTime: dbEvent.end_time || new Date(),
    attendees: dbEvent.attendees || [],
    isAllDay: false,
    status: 'confirmed',
    // ✅ FIX: Manejar nullables con || undefined
    sourceAccount: dbEvent.cuenta_gmail_id || undefined,
    sourceAccountId: dbEvent.cuenta_gmail_id || undefined,
  };
}

/**
 * Mapea múltiples eventos de Prisma a CalendarEventMetadata
 */
export function convertDBEventsToMetadata(
  dbEvents: events_sincronizados[]
): CalendarEventMetadata[] {
  return dbEvents.map(convertDBEventToMetadata);
}