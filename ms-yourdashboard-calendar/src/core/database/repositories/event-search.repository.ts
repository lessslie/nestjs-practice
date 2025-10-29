// ms-yourdashboard-calendar/src/core/database/repositories/event-search.repository.ts

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { Prisma, events_sincronizados } from '../../../../generated/prisma';
import type { 
  EventSearchFilters, 
  EventSearchResult,
  EventMetadataDB
} from '../types/event-database.types';

/**
 * 🔍 EventSearchRepository
 * 
 * Repositorio para búsqueda y filtrado de eventos.
 * Implementa queries complejas con múltiples filtros.
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma
 * - Queries explícitas con filtros tipados
 * - Búsqueda flexible con múltiples criterios
 * - Sin lógica de negocio (solo acceso a datos)
 */
@Injectable()
export class EventSearchRepository {
  private readonly logger = new Logger(EventSearchRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 🔍 BÚSQUEDA DE EVENTOS
  // ================================

  /**
   * 🔎 Buscar eventos con filtros
   * 
   * Permite filtrar por:
   * - Cuenta Gmail específica
   * - Texto en título/ubicación/descripción (case-insensitive)
   * - Rango de fechas (inicio/fin)
   * 
   * @param filters - Criterios de búsqueda
   * @returns Lista de eventos y total encontrados
   */
  async search(filters: EventSearchFilters): Promise<EventSearchResult> {
    try {
      const where: Prisma.events_sincronizadosWhereInput = {};

      // 📧 Filtro por cuenta Gmail
     if (filters.cuenta_gmail_id) {
  (where as Record<string, unknown>).cuenta_gmail_id = filters.cuenta_gmail_id;
}

      // 🔤 Filtro por texto (busca en summary, location, description)
      if (filters.search_text) {
        const searchText = filters.search_text.trim();
        
      (where as Record<string, unknown>).OR = [
  { 
    summary: { 
      contains: searchText, 
      mode: 'insensitive'  
            } 
          },
          { 
            location: { 
              contains: searchText, 
              mode: 'insensitive' 
            } 
          },
          { 
            description: { 
              contains: searchText, 
              mode: 'insensitive' 
            } 
          },
        ];
      }

      // 📅 Filtro por fecha de inicio
     if (filters.start_date) {
  (where as Record<string, unknown>).start_time = { gte: filters.start_date };
}

      // 📅 Filtro por fecha de fin
    if (filters.end_date) {
  (where as Record<string, unknown>).end_time = { lte: filters.end_date };
}

      // Ejecutar búsqueda
      const events: events_sincronizados[] = await this.prisma.events_sincronizados.findMany({
        where,
        orderBy: { start_time: 'asc' },
      });

      this.logger.log(`🔍 Búsqueda ejecutada: ${events.length} eventos encontrados`);

    return {
  events: events.map((event) => this.mapToEventMetadataDB(event)),
  total: events.length,
};
    } catch (error) {
      this.logger.error('❌ Error en búsqueda de eventos:', error);
      throw error;
    }
  }

  /**
   * 🔎 Buscar eventos con paginación
   * 
   * Similar a search() pero con paginación incluida
   * 
   * @param filters - Criterios de búsqueda
   * @param page - Número de página (1-indexed)
   * @param limit - Eventos por página
   */
  async searchPaginated(
    filters: EventSearchFilters,
    page = 1,
    limit = 10
  ): Promise<{ 
    events: events_sincronizados[]; 
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    try {
      const where: Prisma.events_sincronizadosWhereInput = {};

      // 📧 Filtro por cuenta Gmail
      if (filters.cuenta_gmail_id) {
        (where as Record<string, unknown>).cuenta_gmail_id = filters.cuenta_gmail_id;
      }

      // 🔤 Filtro por texto
      if (filters.search_text) {
        const searchText = filters.search_text.trim();
        
        (where as Record<string, unknown>).OR= [
          { summary: { contains: searchText, mode: 'insensitive' } },
          { location: { contains: searchText, mode: 'insensitive' } },
          { description: { contains: searchText, mode: 'insensitive' } },
        ];
      }

      // 📅 Filtros por fechas
      if (filters.start_date) {
        (where as Record<string, unknown>).start_time = { gte: filters.start_date };
      }

      if (filters.end_date) {
        (where as Record<string, unknown>).end_time = { lte: filters.end_date };
      }

      // Ejecutar query con paginación
      const [events, total]: [events_sincronizados[], number] = await Promise.all([
        this.prisma.events_sincronizados.findMany({
          where,
          orderBy: { start_time: 'asc' },
          skip: (page - 1) * limit,
          take: limit,
        }),
        this.prisma.events_sincronizados.count({ where }),
      ]);

      const totalPages = Math.ceil(total / limit);

      this.logger.log(
        `🔍 Búsqueda paginada: ${events.length} eventos (página ${page}/${totalPages})`
      );

      return {
        events,
        total,
        page,
        limit,
        totalPages,
      };
    } catch (error) {
      this.logger.error('❌ Error en búsqueda paginada:', error);
      throw error;
    }
  }

  /**
   * 🔎 Buscar eventos futuros
   * 
   * Retorna solo eventos con start_time > NOW
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @param limit - Cantidad máxima de eventos
   */
  async findUpcoming(
    cuentaGmailId: string,
    limit = 10
  ): Promise<events_sincronizados[]> {
    return this.prisma.events_sincronizados.findMany({
      where: {
        cuenta_gmail_id: cuentaGmailId,
        start_time: { gte: new Date() },
      },
      orderBy: { start_time: 'asc' },
      take: limit,
    });
  }

  /**
   * 🔎 Buscar eventos pasados
   * 
   * Retorna solo eventos con start_time < NOW
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @param limit - Cantidad máxima de eventos
   */
  async findPast(
    cuentaGmailId: string,
    limit = 10
  ): Promise<events_sincronizados[]> {
    return this.prisma.events_sincronizados.findMany({
      where: {
        cuenta_gmail_id: cuentaGmailId,
        start_time: { lt: new Date() },
      },
      orderBy: { start_time: 'desc' },
      take: limit,
    });
  }

  // ================================
  // 🔧 UTILIDADES PRIVADAS
  // ================================

  /**
   * Mapear evento de Prisma a EventMetadataDB
   * 
   * ⚠️ IMPORTANTE: Convierte null → undefined para compatibilidad TypeScript
   * 
   * @private
   */
 private mapToEventMetadataDB(event: events_sincronizados): EventMetadataDB {
  return {
    id: event.id ?? '',
    cuenta_gmail_id: event.cuenta_gmail_id ?? '',
    google_event_id: event.google_event_id ?? '',
    summary: event.summary ?? undefined,
    location: event.location ?? undefined,
    description: event.description ?? undefined,
    start_time: event.start_time ?? undefined,
    end_time: event.end_time ?? undefined,
    attendees: event.attendees ?? undefined,
    fecha_sincronizado: event.fecha_sincronizado ?? undefined,
  };
  }
}