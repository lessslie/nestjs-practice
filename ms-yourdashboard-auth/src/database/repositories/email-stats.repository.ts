// ms-yourdashboard-auth/src/database/repositories/email-stats.repository.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmailStatsRepository {
  private readonly logger = new Logger(EmailStatsRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * 📧 Obtener count de emails por cuenta Gmail
   */
  async getEmailCountByCuentaGmail(cuentaGmailId: string): Promise<number> {
    try {
      const count = await this.prisma.emails_sincronizados.count({
        where: { cuenta_gmail_id: cuentaGmailId }
      });
      
      return count;
    } catch (error) {
      this.logger.error(`❌ Error obteniendo count de emails para cuenta ${cuentaGmailId}:`, error);
      return 0;
    }
  }

  /**
   * 📧 Obtener count de emails no leídos por cuenta Gmail
   */
  async getUnreadEmailCountByCuentaGmail(cuentaGmailId: string): Promise<number> {
    try {
      const count = await this.prisma.emails_sincronizados.count({
        where: { 
          cuenta_gmail_id: cuentaGmailId,
          esta_leido: false
        }
      });
      
      return count;
    } catch (error) {
      this.logger.error(`❌ Error obteniendo count de emails no leídos para cuenta ${cuentaGmailId}:`, error);
      return 0;
    }
  }

  /**
   * 📊 Obtener estadísticas de emails de un usuario
   * Recibe los IDs de cuentas del usuario
   */
  async getEmailStatsByUser(cuentasGmailIds: string[]): Promise<{
    total_emails_sincronizados: number;
    emails_no_leidos: number;
  }> {
    try {
      if (cuentasGmailIds.length === 0) {
        return {
          total_emails_sincronizados: 0,
          emails_no_leidos: 0
        };
      }

      // Total de emails del usuario (todas sus cuentas)
      const total = await this.prisma.emails_sincronizados.count({
        where: {
          cuenta_gmail_id: { in: cuentasGmailIds }
        }
      });

      // Emails no leídos
      const noLeidos = await this.prisma.emails_sincronizados.count({
        where: {
          cuenta_gmail_id: { in: cuentasGmailIds },
          esta_leido: false
        }
      });

      this.logger.log(`📊 Estadísticas emails: Total=${total}, No leídos=${noLeidos}`);

      return {
        total_emails_sincronizados: total,
        emails_no_leidos: noLeidos
      };

    } catch (error) {
      this.logger.error(`❌ Error obteniendo estadísticas de emails:`, error);
      return {
        total_emails_sincronizados: 0,
        emails_no_leidos: 0
      };
    }
  }

  /**
   * 📊 Obtener cuenta Gmail con más emails (la más activa)
   */
  async getMostActiveCuentaGmail(usuarioId: string): Promise<{
    email_gmail: string;
    emails_count: number;
  } | null> {
    try {
      const cuentas = await this.prisma.cuentas_gmail_asociadas.findMany({
        where: {
          usuario_principal_id: usuarioId,
          esta_activa: true
        },
        include: {
          _count: {
            select: { emails_sincronizados: true }
          }
        },
        orderBy: {
          emails_sincronizados: {
            _count: 'desc'
          }
        },
        take: 1
      });

      if (cuentas.length === 0) {
        return null;
      }

      return {
        email_gmail: cuentas[0].email_gmail,
        emails_count: cuentas[0]._count.emails_sincronizados
      };

    } catch (error) {
      this.logger.error(`❌ Error obteniendo cuenta más activa:`, error);
      return null;
    }
  }
}