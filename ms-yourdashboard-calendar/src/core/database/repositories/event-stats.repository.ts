// ms-yourdashboard-calendar/src/core/database/repositories/event-stats.repository.ts

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

/**
 * 📊 EventStatsRepository
 * 
 * Repositorio para obtención de estadísticas de eventos.
 * Calcula métricas como totales, eventos futuros/pasados, etc.
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma
 * - Queries explícitas para agregaciones
 * - Retorna estadísticas calculadas
 * - Tipado fuerte, SIN any
 */

// 📊 Interface para estadísticas de eventos
export interface EventStats {
  /** Total de eventos sincronizados */
  total_events: number;
  
  /** Eventos futuros (start_time >= NOW) */
  upcoming_events: number;
  
  /** Eventos pasados (start_time < NOW) */
  past_events: number;
  
  /** Fecha del próximo evento */
  next_event_date?: Date;
}

@Injectable()
export class EventStatsRepository {
  private readonly logger = new Logger(EventStatsRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 📊 ESTADÍSTICAS DE EVENTOS
  // ================================

  /**
   * 📊 Obtener estadísticas completas de una cuenta
   * 
   * Calcula:
   * - Total de eventos
   * - Eventos futuros
   * - Eventos pasados
   * - Fecha del próximo evento
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   */
  async getStats(cuentaGmailId: string): Promise<EventStats> {
    try {
      const now = new Date();

      // Ejecutar queries en paralelo para mejor performance
      const [total, upcoming, past, next] = await Promise.all([
        // Total de eventos
        this.prisma.events_sincronizados.count({
          where: { cuenta_gmail_id: cuentaGmailId },
        }),

        // Eventos futuros
        this.prisma.events_sincronizados.count({
          where: {
            cuenta_gmail_id: cuentaGmailId,
            start_time: { gte: now },
          },
        }),

        // Eventos pasados
        this.prisma.events_sincronizados.count({
          where: {
            cuenta_gmail_id: cuentaGmailId,
            start_time: { lt: now },
          },
        }),

        // Próximo evento
        this.prisma.events_sincronizados.findFirst({
          where: {
            cuenta_gmail_id: cuentaGmailId,
            start_time: { gte: now },
          },
          orderBy: { start_time: 'asc' },
          select: { start_time: true },
        }),
      ]);

      this.logger.log(
        `📊 Stats para ${cuentaGmailId}: ${total} total (${upcoming} futuros, ${past} pasados)`
      );

      return {
        total_events: total,
        upcoming_events: upcoming,
        past_events: past,
        next_event_date: next?.start_time || undefined,
      };
    } catch (error) {
      this.logger.error(`❌ Error obteniendo estadísticas para ${cuentaGmailId}:`, error);
      throw error;
    }
  }

  /**
   * 📊 Obtener estadísticas globales del sistema
   * 
   * Calcula totales agregados de todas las cuentas
   */
  async getGlobalStats(): Promise<{
    total_accounts: number;
    total_events: number;
    total_upcoming: number;
    total_past: number;
  }> {
    try {
      const now = new Date();

      // Contar cuentas únicas y eventos
      const [accounts, totalEvents, upcomingEvents, pastEvents] = await Promise.all([
        this.prisma.cuentas_gmail_asociadas.count({
          where: { esta_activa: true },
        }),

        this.prisma.events_sincronizados.count(),

        this.prisma.events_sincronizados.count({
          where: { start_time: { gte: now } },
        }),

        this.prisma.events_sincronizados.count({
          where: { start_time: { lt: now } },
        }),
      ]);

      this.logger.log(
        `🌍 Stats globales: ${accounts} cuentas, ${totalEvents} eventos totales`
      );

      return {
        total_accounts: accounts,
        total_events: totalEvents,
        total_upcoming: upcomingEvents,
        total_past: pastEvents,
      };
    } catch (error) {
      this.logger.error('❌ Error obteniendo estadísticas globales:', error);
      throw error;
    }
  }

  /**
   * 📅 Obtener estadísticas por rango de fechas
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @param startDate - Fecha de inicio del rango
   * @param endDate - Fecha de fin del rango
   */
  async getStatsByDateRange(
    cuentaGmailId: string,
    startDate: Date,
    endDate: Date
  ): Promise<{
    total_in_range: number;
    start_date: Date;
    end_date: Date;
  }> {
    try {
      const count = await this.prisma.events_sincronizados.count({
        where: {
          cuenta_gmail_id: cuentaGmailId,
          start_time: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      return {
        total_in_range: count,
        start_date: startDate,
        end_date: endDate,
      };
    } catch (error) {
      this.logger.error('❌ Error obteniendo estadísticas por rango:', error);
      throw error;
    }
  }

  /**
   * 📊 Obtener distribución de eventos por mes
   * 
   * Agrupa eventos por mes para gráficas/reportes
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @param year - Año a analizar (default: año actual)
   */
  async getMonthlyDistribution(
    cuentaGmailId: string,
    year?: number
  ): Promise<Array<{ month: number; count: number }>> {
    try {
      const targetYear = year || new Date().getFullYear();
      const startDate = new Date(targetYear, 0, 1);
      const endDate = new Date(targetYear, 11, 31, 23, 59, 59);

      // Obtener todos los eventos del año
      const events = await this.prisma.events_sincronizados.findMany({
        where: {
          cuenta_gmail_id: cuentaGmailId,
          start_time: {
            gte: startDate,
            lte: endDate,
          },
        },
        select: {
          start_time: true,
        },
      });

      // Agrupar por mes (1-12)
      const monthlyCount: Record<number, number> = {};
      
      for (let i = 1; i <= 12; i++) {
        monthlyCount[i] = 0;
      }

      events.forEach((event) => {
        if (event.start_time) {
          const month = event.start_time.getMonth() + 1; // 0-indexed → 1-indexed
          monthlyCount[month]++;
        }
      });

      // Convertir a array de objetos
      const distribution = Object.entries(monthlyCount).map(([month, count]) => ({
        month: parseInt(month),
        count,
      }));

      return distribution;
    } catch (error) {
      this.logger.error('❌ Error obteniendo distribución mensual:', error);
      throw error;
    }
  }

  /**
   * 🔢 Contar eventos por cuenta (múltiples cuentas)
   * 
   * Útil para dashboards con múltiples cuentas Gmail
   * 
   * @param cuentaGmailIds - Array de IDs de cuentas
   */
  async getStatsForMultipleAccounts(
    cuentaGmailIds: string[]
  ): Promise<Array<{ cuenta_gmail_id: string; total_events: number }>> {
    try {
      const stats = await Promise.all(
        cuentaGmailIds.map(async (id) => {
          const count = await this.prisma.events_sincronizados.count({
            where: { cuenta_gmail_id: id },
          });
          
          return {
            cuenta_gmail_id: id,
            total_events: count,
          };
        })
      );

      return stats;
    } catch (error) {
      this.logger.error('❌ Error obteniendo stats para múltiples cuentas:', error);
      throw error;
    }
  }
}