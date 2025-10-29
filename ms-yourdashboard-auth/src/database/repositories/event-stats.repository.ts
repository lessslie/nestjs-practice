// ms-yourdashboard-auth/src/database/repositories/event-stats.repository.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EventStatsRepository {
  private readonly logger = new Logger(EventStatsRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * 📊 Obtener count de eventos por cuenta Gmail
   */
  async getEventCountByCuentaGmail(cuentaGmailId: string): Promise<number> {
    try {
      const count = await this.prisma.events_sincronizados.count({
        where: { cuenta_gmail_id: cuentaGmailId }
      });
      
      return count;
    } catch (error) {
      this.logger.error(`❌ Error obteniendo count de eventos para cuenta ${cuentaGmailId}:`, error);
      return 0;
    }
  }

  /**
   * 📊 Obtener estadísticas de eventos de un usuario
   * Recibe los IDs de cuentas del usuario
   */
  async getEventStatsByUser(cuentasGmailIds: string[]): Promise<{
    total_eventos_sincronizados: number;
    eventos_proximos: number;
    eventos_pasados: number;
  }> {
    try {
      if (cuentasGmailIds.length === 0) {
        return {
          total_eventos_sincronizados: 0,
          eventos_proximos: 0,
          eventos_pasados: 0
        };
      }

      const now = new Date();

      // Total de eventos del usuario (todas sus cuentas)
      const total = await this.prisma.events_sincronizados.count({
        where: {
          cuenta_gmail_id: { in: cuentasGmailIds }
        }
      });

      // Eventos próximos (desde hoy en adelante)
      const proximos = await this.prisma.events_sincronizados.count({
        where: {
          cuenta_gmail_id: { in: cuentasGmailIds },
          start_time: {
            gte: now
          }
        }
      });

      // Eventos pasados
      const pasados = await this.prisma.events_sincronizados.count({
        where: {
          cuenta_gmail_id: { in: cuentasGmailIds },
          end_time: {
            lt: now
          }
        }
      });

      this.logger.log(`📊 Estadísticas eventos: Total=${total}, Próximos=${proximos}, Pasados=${pasados}`);

      return {
        total_eventos_sincronizados: total,
        eventos_proximos: proximos,
        eventos_pasados: pasados
      };

    } catch (error) {
      this.logger.error(`❌ Error obteniendo estadísticas de eventos:`, error);
      return {
        total_eventos_sincronizados: 0,
        eventos_proximos: 0,
        eventos_pasados: 0
      };
    }
  }
}