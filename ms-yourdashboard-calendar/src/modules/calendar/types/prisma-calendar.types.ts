import type { events_sincronizados } from '../../../../generated/prisma';

/**
 * Metadata interna de eventos
 */
export interface CalendarEventMetadata {
  cuenta_gmail_id: string;
  google_event_id: string;
  id: string;
  summary: string;
  location?: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  attendees?: string[];
  isAllDay: boolean;
  status: string;
  sourceAccount?: string;
  sourceAccountId?: string;
}

/**
 * Filtros de búsqueda de eventos
 */
export interface EventSearchFilters {
  search_text?: string;
  start_date?: Date;
  end_date?: Date;
}

/**
 * Resultado de búsqueda
 */
export interface EventSearchResult {
  events: events_sincronizados[];
  total: number;
}

/**
 * Resultado de sincronización
 */
export interface SyncResult {
  events_nuevos: number;
  events_actualizados: number;
  total_procesados: number;
  tiempo_ms: number;
}

/**
 * DTO para crear evento
 */
export interface CreateEventDto {
  summary: string;
  location?: string;
  description?: string;
  startDateTime: string;
  endDateTime: string;
  attendees?: string[];
}

/**
 * DTO para actualizar evento
 */
export interface UpdateEventDto {
  summary?: string;
  location?: string;
  description?: string;
  startDateTime?: string;
  endDateTime?: string;
  attendees?: string[];
}

