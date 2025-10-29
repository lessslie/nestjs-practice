// ms-yourdashboard-calendar/src/core/database/repositories/event-sync.repository.ts

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { events_sincronizados } from '../../../../generated/prisma';
import type { 
  EventMetadataDB, 
  SyncResult 
} from '../types/event-database.types';

/**
 * 📅 EventSyncRepository
 * 
 * Repositorio para sincronización de eventos de Google Calendar.
 * Maneja la tabla events_sincronizados con operaciones UPSERT.
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma (servicios NO tocan Prisma)
 * - Queries explícitas y declarativas
 * - Lógica de negocio en servicios, datos aquí
 * - SIN uso de any
 */
@Injectable()
export class EventSyncRepository {
  private readonly logger = new Logger(EventSyncRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 💾 SINCRONIZACIÓN MASIVA (UPSERT)
  // ================================

  /**
   * 🔄 Sincronizar múltiples eventos con conteo preciso
   * 
   * Implementa UPSERT con conteo de nuevos vs actualizados.
   * Usa el truco de xmax para saber si fue INSERT o UPDATE:
   * - xmax = 0 → Fue INSERT (nuevo)
   * - xmax > 0 → Fue UPDATE (actualizado)
   * 
   * @param events - Array de eventos a sincronizar
   * @returns SyncResult con estadísticas detalladas
   */
  async syncEventsMetadata(events: EventMetadataDB[]): Promise<SyncResult> {
    if (events.length === 0) {
      return { 
        events_nuevos: 0, 
        events_actualizados: 0, 
        total_procesados: 0, 
        tiempo_ms: 0 
      };
    }

    const startTime = Date.now();
    let eventsNuevos = 0;
    let eventsActualizados = 0;

    try {
      // 🎯 PROCESAR EN TRANSACCIÓN
      await this.prisma.$transaction(async (tx) => {
        for (const event of events) {
          // Usar $queryRaw para detectar si es INSERT o UPDATE
          const result = await tx.$queryRaw<Array<{ inserted: boolean }>>`
            INSERT INTO events_sincronizados (
              cuenta_gmail_id, 
              google_event_id, 
              summary, 
              location, 
              description, 
              start_time, 
              end_time,
              attendees, 
              fecha_sincronizado
            )
            VALUES (
              ${event.cuenta_gmail_id},
              ${event.google_event_id},
              ${event.summary || null},
              ${event.location || null},
              ${event.description || null},
              ${event.start_time || null},
              ${event.end_time || null},
              ${event.attendees || null}::text[],
              NOW()
            )
            ON CONFLICT (cuenta_gmail_id, google_event_id) 
            DO UPDATE SET
              summary = EXCLUDED.summary,
              location = EXCLUDED.location,
              description = EXCLUDED.description,
              start_time = EXCLUDED.start_time,
              end_time = EXCLUDED.end_time,
              attendees = EXCLUDED.attendees,
              fecha_sincronizado = NOW()
            RETURNING (xmax = 0) AS inserted
          `;

          // xmax = 0 significa INSERT, xmax > 0 significa UPDATE
          if (result[0]?.inserted) {
            eventsNuevos++;
          } else {
            eventsActualizados++;
          }
        }
      });

      const tiempoMs = Date.now() - startTime;

      this.logger.log(
        `✅ Sincronización completada: ${eventsNuevos} nuevos, ${eventsActualizados} actualizados (${tiempoMs}ms)`
      );

      return {
        events_nuevos: eventsNuevos,
        events_actualizados: eventsActualizados,
        total_procesados: events.length,
        tiempo_ms: tiempoMs,
      };
    } catch (error) {
      this.logger.error('❌ Error en syncEventsMetadata:', error);
      throw error;
    }
  }

  /**
   * 💾 Upsert simple sin conteo (más rápido para casos simples)
   * 
   * @param events - Array de eventos a guardar
   */
  async upsertMany(events: Partial<events_sincronizados>[]): Promise<void> {
    if (events.length === 0) return;

    try {
      const operations = events.map((event) =>
        this.prisma.events_sincronizados.upsert({
          where: {
            // ✅ CONSTRAINT NAME CORRECTO del schema
            cuenta_gmail_id_google_event_id: {
              cuenta_gmail_id: event.cuenta_gmail_id!,
              google_event_id: event.google_event_id!,
            },
          },
          update: { 
            ...event, 
            fecha_sincronizado: new Date() 
          },
          create: { 
            ...event as events_sincronizados,
            fecha_sincronizado: new Date() 
          },
        })
      );

      await this.prisma.$transaction(operations);
      
      this.logger.log(`✅ ${events.length} eventos guardados con upsertMany`);
    } catch (error) {
      this.logger.error('❌ Error en upsertMany:', error);
      throw error;
    }
  }

  // ================================
  // 🔍 CONSULTAS Y BÚSQUEDAS
  // ================================

  /**
   * 📄 Paginación de eventos de una cuenta
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @param page - Número de página (1-indexed)
   * @param limit - Cantidad de eventos por página
   * @param futureOnly - Si true, solo eventos futuros
   */
  async findPaginated(
    cuentaGmailId: string,
    page = 1,
    limit = 10,
    futureOnly = false
  ): Promise<{ events: events_sincronizados[]; total: number }> {
    const where = {
      cuenta_gmail_id: cuentaGmailId,
      ...(futureOnly ? { start_time: { gte: new Date() } } : {}),
    };

    const [events, total] = await Promise.all([
      this.prisma.events_sincronizados.findMany({
        where,
        orderBy: { start_time: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.events_sincronizados.count({ where }),
    ]);

    return { events, total };
  }

  /**
   * 🕐 Obtener último evento sincronizado
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   */
  async getLastSynced(
    cuentaGmailId: string
  ): Promise<events_sincronizados | null> {
    return this.prisma.events_sincronizados.findFirst({
      where: { cuenta_gmail_id: cuentaGmailId },
      orderBy: { fecha_sincronizado: 'desc' },
    });
  }

  /**
   * 🗑️ Eliminar evento por Google Event ID
   * 
   * @param googleEventId - ID del evento en Google Calendar
   */
  async deleteByGoogleEventId(googleEventId: string): Promise<void> {
    await this.prisma.events_sincronizados.deleteMany({
      where: { google_event_id: googleEventId },
    });
    
    this.logger.log(`🗑️ Evento ${googleEventId} eliminado`);
  }

  /**
   * 🔢 Contar eventos de una cuenta
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   */
  async count(cuentaGmailId: string): Promise<number> {
    return this.prisma.events_sincronizados.count({
      where: { cuenta_gmail_id: cuentaGmailId },
    });
  }

  /**
   * 🔍 Buscar evento por Google Event ID
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @param googleEventId - ID del evento en Google
   */
  async findByGoogleEventId(
    cuentaGmailId: string,
    googleEventId: string
  ): Promise<events_sincronizados | null> {
    return this.prisma.events_sincronizados.findUnique({
      where: {
        cuenta_gmail_id_google_event_id: {
          cuenta_gmail_id: cuentaGmailId,
          google_event_id: googleEventId,
        },
      },
    });
  }
}