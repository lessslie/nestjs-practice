// ms-yourdashboard-calendar/src/core/database/types/event-database.types.ts

/**
 * 📋 TIPOS DE BASE DE DATOS - MS-CALENDAR

 * 
 * ✅ Siguiendo filosofía database-first del jefe:
 * - La BD es la fuente de verdad
 * - Estas interfaces reflejan el schema de PostgreSQL
 * - Se usan en los repositorios (capa de acceso a datos)
 * - Tipado fuerte, SIN any
 */

// ================================
// 📅 EVENTOS DE CALENDARIO
// ================================

/**
 * Metadata de eventos sincronizados desde Google Calendar
 * Corresponde a la tabla: events_sincronizados
 */
export interface EventMetadataDB {
  /** ID interno de PostgreSQL (opcional en inserts) */
  id?: string;
  
  /** ID de la cuenta Gmail asociada (FK) */
  cuenta_gmail_id: string;
  
  /** ID del evento en Google Calendar (único por cuenta) */
  google_event_id: string;
  
  /** Título/resumen del evento */
  summary?: string;
  
  /** Ubicación del evento */
  location?: string;
  
  /** Descripción detallada */
  description?: string;
  
  /** Fecha y hora de inicio */
  start_time?: Date;
  
  /** Fecha y hora de fin */
  end_time?: Date;
  
  /** Lista de emails de asistentes */
  attendees?: string[];
  
  /** Timestamp de creación en BD */
  created_at?: Date;
  
  /** Timestamp de última actualización */
  updated_at?: Date;
  
  /** Timestamp de última sincronización */
  fecha_sincronizado?: Date;
}

// ================================
// 🔍 FILTROS Y BÚSQUEDAS
// ================================

/**
 * Filtros para búsqueda de eventos
 */
export interface EventSearchFilters {
  /** Filtrar por cuenta Gmail específica */
  cuenta_gmail_id?: string;
  
  /** Búsqueda de texto en título/descripción/ubicación */
  search_text?: string;
  
  /** Fecha mínima (eventos desde esta fecha) */
  start_date?: Date;
  
  /** Fecha máxima (eventos hasta esta fecha) */
  end_date?: Date;
}

/**
 * Resultado de búsqueda de eventos
 */
export interface EventSearchResult {
  /** Lista de eventos encontrados */
  events: EventMetadataDB[];
  
  /** Total de eventos que cumplen los criterios */
  total: number;
}

// ================================
// 📊 RESULTADOS DE SINCRONIZACIÓN
// ================================

/**
 * Estadísticas de una operación de sincronización
 * Usada para reportar el resultado de un UPSERT masivo
 */
export interface SyncResult {
  /** Cantidad de eventos nuevos insertados */
  events_nuevos: number;
  
  /** Cantidad de eventos existentes actualizados */
  events_actualizados: number;
  
  /** Total de eventos procesados (nuevos + actualizados) */
  total_procesados: number;
  
  /** Tiempo que tomó la operación en milisegundos */
  tiempo_ms: number;
}

// ================================
// 📧 CUENTAS GMAIL
// ================================

/**
 * Cuenta Gmail activa con tokens válidos
 * Usado para obtener cuentas listas para sincronizar
 */
export interface ActiveGmailAccount {
  /** ID de la cuenta Gmail */
  id: string;
  
  /** Email de la cuenta Gmail */
  email_gmail: string;
  
  /** Token de acceso de Google OAuth */
  access_token: string;
  
  /** ID del usuario principal propietario (FK) */
  usuario_principal_id: string;
}

/**
 * Información de tokens de una cuenta Gmail
 * Usado para renovación de tokens
 */
export interface GmailTokenInfo {
  /** ID de la cuenta */
  id: string;
  
  /** Token de acceso actual */
  access_token: string;
  
  /** Token de refresco */
  refresh_token?: string;
  
  /** Timestamp de expiración del access_token */
  token_expiracion?: Date;
}

// ================================
// 📋 RESPUESTAS DE QUERIES GENÉRICOS
// ================================

/**
 * Resultado de una query SQL raw
 * Usado para queries personalizados que no se mapean a Prisma
 */
export interface QueryResult<T = Record<string, unknown>> {
  /** Filas retornadas por el query */
  rows: T[];
  
  /** Cantidad de filas afectadas/retornadas */
  rowCount: number;
}