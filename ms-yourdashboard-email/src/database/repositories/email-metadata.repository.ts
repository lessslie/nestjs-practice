// ms-yourdashboard-email/src/database/repositories/email-metadata.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { EmailMapper } from '../mappers/email.mapper';
import type { EmailMetadataDBWithTrafficLight } from '../../emails/interfaces/traffic-light.interfaces';

/**
 * 📧 EmailMetadataRepository
 * 
 * Repository para gestión de emails_sincronizados.
 * Retorna tipos del dominio (NO tipos de Prisma).
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma
 * - Queries explícitas
 * - Usa Mapper para conversión de tipos
 */
@Injectable()
export class EmailMetadataRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 🔍 CONSULTAS BÁSICAS
  // ================================

  /**
   * Buscar email por Gmail Message ID
   */
  async findByGmailMessageId(
    gmailMessageId: string
  ): Promise<EmailMetadataDBWithTrafficLight | null> {
    const email = await this.prisma.emails_sincronizados.findFirst({
      where: { gmail_message_id: gmailMessageId }
    });

    return email ? EmailMapper.toEmailMetadataWithTrafficLight(email) : null;
  }

  // ================================
  // 📖 PAGINACIÓN
  // ================================

  /**
   * Obtener emails paginados de una cuenta
   */
  async findByAccountPaginated(
    cuentaGmailId: string,
    page: number = 1,
    limit: number = 50,
    onlyUnread: boolean = false
  ): Promise<{ emails: EmailMetadataDBWithTrafficLight[]; total: number }> {
    const skip = (page - 1) * limit;
    
    const where: any = {
      cuenta_gmail_id: cuentaGmailId,
      traffic_light_status: { not: 'deleted' }
    };

    if (onlyUnread) {
      where.esta_leido = false;
    }

    const [emails, total] = await Promise.all([
      this.prisma.emails_sincronizados.findMany({
        where,
        orderBy: { fecha_recibido: 'desc' },
        skip,
        take: limit
      }),
      this.prisma.emails_sincronizados.count({ where })
    ]);

    return { 
      emails: EmailMapper.toEmailMetadataListWithTrafficLight(emails),
      total 
    };
  }

  // ================================
  // 🔎 BÚSQUEDAS
  // ================================

  /**
   * Buscar emails por texto
   */
  async searchByText(
    cuentaGmailId: string,
    searchText: string,
    page: number = 1,
    limit: number = 50
  ): Promise<{ emails: EmailMetadataDBWithTrafficLight[]; total: number }> {
    const skip = (page - 1) * limit;

    const where: any = {
      cuenta_gmail_id: cuentaGmailId,
      traffic_light_status: { not: 'deleted' },
      OR: [
        { asunto: { contains: searchText, mode: 'insensitive' } },
        { remitente_email: { contains: searchText, mode: 'insensitive' } },
        { remitente_nombre: { contains: searchText, mode: 'insensitive' } }
      ]
    };

    const [emails, total] = await Promise.all([
      this.prisma.emails_sincronizados.findMany({
        where,
        orderBy: { fecha_recibido: 'desc' },
        skip,
        take: limit
      }),
      this.prisma.emails_sincronizados.count({ where })
    ]);

    return { 
      emails: EmailMapper.toEmailMetadataListWithTrafficLight(emails),
      total 
    };
  }

  // ================================
  // 📊 ESTADÍSTICAS
  // ================================

  /**
   * Obtener estadísticas de una cuenta
   */
  async getStatsByAccount(cuentaGmailId: string): Promise<{
    total: number;
    unread: number;
    read: number;
  }> {
    const [total, unread] = await Promise.all([
      this.prisma.emails_sincronizados.count({
        where: { 
          cuenta_gmail_id: cuentaGmailId,
          traffic_light_status: { not: 'deleted' }
        }
      }),
      this.prisma.emails_sincronizados.count({
        where: { 
          cuenta_gmail_id: cuentaGmailId,
          esta_leido: false,
          traffic_light_status: { not: 'deleted' }
        }
      })
    ]);

    return {
      total,
      unread,
      read: total - unread
    };
  }

  // ================================
  // 🚦 SEMÁFORO (TRAFFIC LIGHT)
  // ================================

  /**
   * Buscar emails por estado de semáforo
   */
  async findByTrafficLight(
    cuentaGmailId: string,
    status: 'red' | 'yellow' | 'green',
    limit: number = 10
  ): Promise<EmailMetadataDBWithTrafficLight[]> {
    const emails = await this.prisma.emails_sincronizados.findMany({
      where: {
        cuenta_gmail_id: cuentaGmailId,
        traffic_light_status: status
      },
      orderBy: { days_without_reply: 'desc' },
      take: limit
    });

    return EmailMapper.toEmailMetadataListWithTrafficLight(emails);
  }

  /**
   * Obtener estadísticas de semáforo por cuenta
   */
  async getTrafficLightStats(cuentaGmailId: string): Promise<Array<{
    status: string;
    count: string;
  }>> {
    const result = await this.prisma.$queryRaw<Array<{
      status: string;
      count: bigint;
    }>>`
      SELECT 
        traffic_light_status as status,
        COUNT(*) as count
      FROM emails_sincronizados
      WHERE cuenta_gmail_id = ${cuentaGmailId}
        AND traffic_light_status IN ('red', 'yellow', 'green')
      GROUP BY traffic_light_status
    `;

    return result.map(row => ({
      status: row.status,
      count: row.count.toString()
    }));
  }

  /**
   * Marcar email como respondido
   */
  async markAsReplied(gmailMessageId: string): Promise<{
    old_status: string;
    new_status: string;
    days_saved: number;
  } | null> {
    const email = await this.prisma.emails_sincronizados.findFirst({
      where: { gmail_message_id: gmailMessageId }
    });

    if (!email) return null;

    const oldStatus = email.traffic_light_status || 'green';
    const daysSaved = email.days_without_reply || 0;

    await this.prisma.emails_sincronizados.update({
      where: { id: email.id },
      data: {
        replied_at: new Date(),
        days_without_reply: 0,
        traffic_light_status: 'green'
      }
    });

    return {
      old_status: oldStatus,
      new_status: 'green',
      days_saved: daysSaved
    };
  }

  /**
   * Marcar email como eliminado
   */
  async markAsDeleted(gmailMessageId: string): Promise<{
    previousStatus: string;
  } | null> {
    const email = await this.prisma.emails_sincronizados.findFirst({
      where: { gmail_message_id: gmailMessageId }
    });

    if (!email) return null;

    const previousStatus = email.traffic_light_status || 'green';

    await this.prisma.emails_sincronizados.update({
      where: { id: email.id },
      data: {
        traffic_light_status: 'deleted'
      }
    });

    return { previousStatus };
  }

  /**
   * Actualizar semáforos de todos los emails
   */
  async updateAllTrafficLights(): Promise<{
    actualizados: number;
  }> {
    const result = await this.prisma.$executeRaw`
      UPDATE emails_sincronizados
      SET 
        days_without_reply = CASE
          WHEN replied_at IS NULL THEN 
            EXTRACT(DAY FROM (NOW() - fecha_recibido))
          ELSE 0
        END,
        traffic_light_status = CASE
          WHEN replied_at IS NOT NULL THEN 'green'
          WHEN EXTRACT(DAY FROM (NOW() - fecha_recibido)) >= 7 THEN 'red'
          WHEN EXTRACT(DAY FROM (NOW() - fecha_recibido)) >= 3 THEN 'yellow'
          ELSE 'green'
        END
      WHERE replied_at IS NULL OR traffic_light_status != 'green'
    `;

    return { actualizados: Number(result) };
  }

  // ================================
  // 🔧 UTILIDADES
  // ================================

  /**
   * Obtener último email sincronizado
   */
  async getLastSynced(
    cuentaGmailId: string
  ): Promise<EmailMetadataDBWithTrafficLight | null> {
    const email = await this.prisma.emails_sincronizados.findFirst({
      where: { cuenta_gmail_id: cuentaGmailId },
      orderBy: { fecha_sincronizado: 'desc' }
    });

    return email ? EmailMapper.toEmailMetadataWithTrafficLight(email) : null;
  }

  /**
   * Buscar email con cuenta (para verificar pertenencia)
   */
  async findByIdWithAccount(
    gmailMessageId: string,
    userId: string
  ): Promise<{
    email: EmailMetadataDBWithTrafficLight;
    cuentaGmail: any;
  } | null> {
    const result = await this.prisma.emails_sincronizados.findFirst({
      where: { gmail_message_id: gmailMessageId },
      include: {
        cuentas_gmail_asociadas: {
          include: {
            usuarios_principales: true
          }
        }
      }
    });

    if (!result || !result.cuentas_gmail_asociadas) {
      return null;
    }

    // Verificar que pertenece al usuario
    if (result.cuentas_gmail_asociadas.usuario_principal_id !== userId) {
      return null;
    }

    return {
      email: EmailMapper.toEmailMetadataWithTrafficLight(result),
      cuentaGmail: result.cuentas_gmail_asociadas
    };
  }
}