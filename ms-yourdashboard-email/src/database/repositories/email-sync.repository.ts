// ms-yourdashboard-email/src/database/repositories/email-sync.repository.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { emails_sincronizados } from '../../../generated/prisma';

/**
 * 📧 EmailSyncRepository
 * 
 * Repositorio para gestión de emails_sincronizados (metadata de emails).
 * Encapsula toda la lógica de acceso a datos de la tabla emails_sincronizados.
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma (servicios NO tocan Prisma directamente)
 * - Queries explícitas y declarativas (NO lazy loading)
 * - Lógica de negocio en servicios, datos aquí
 */

// 📋 Interfaces (las mismas que usaban en database.service)
export interface EmailMetadataDB {
  id?: string;
  cuenta_gmail_id: string;
  gmail_message_id: string;
  asunto?: string;
  remitente_email?: string;
  remitente_nombre?: string;
  destinatario_email?: string;
  fecha_recibido?: Date;
  esta_leido: boolean;
  tiene_adjuntos: boolean;
  etiquetas_gmail?: string[];
  tamano_bytes?: number;
  fecha_sincronizado?: Date;
}

export interface SyncResult {
  emails_nuevos: number;
  emails_actualizados: number;
  total_procesados: number;
  tiempo_ms: number;
}

export interface EmailSearchFilters {
  cuenta_gmail_id?: string;
  esta_leido?: boolean;
  tiene_adjuntos?: boolean;
  remitente_email?: string;
  busqueda_texto?: string;
  fecha_desde?: Date;
  fecha_hasta?: Date;
}

@Injectable()
export class EmailSyncRepository {
  private readonly logger = new Logger(EmailSyncRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 🔍 CONSULTAS BÁSICAS
  // ================================

  /**
   * Buscar email por Gmail Message ID
   */
  async findByGmailId(
    cuentaGmailId: string,
    gmailMessageId: string
  ): Promise<emails_sincronizados | null> {
    return this.prisma.emails_sincronizados.findFirst({
      where: {
        cuenta_gmail_id: cuentaGmailId,
        gmail_message_id: gmailMessageId
      }
    });
  }

  /**
   * Obtener último email sincronizado de una cuenta
   */
  async findLastSynced(cuentaGmailId: string): Promise<emails_sincronizados | null> {
    return this.prisma.emails_sincronizados.findFirst({
      where: { cuenta_gmail_id: cuentaGmailId },
      orderBy: { fecha_sincronizado: 'desc' }
    });
  }

  /**
   * Contar total de emails de una cuenta
   */
  async countByAccount(cuentaGmailId: string): Promise<number> {
    return this.prisma.emails_sincronizados.count({
      where: { cuenta_gmail_id: cuentaGmailId }
    });
  }

  // ================================
  // 💾 SINCRONIZACIÓN MASIVA (UPSERT)
  // ================================

  /**
   * 🔄 Sincronizar múltiples emails en lote (UPSERT)
   * 
   * Inserta nuevos emails o actualiza existentes.
   * Usa transacción para garantizar atomicidad.
   */
  async syncMany(emails: EmailMetadataDB[]): Promise<SyncResult> {
    if (emails.length === 0) {
      return { 
        emails_nuevos: 0, 
        emails_actualizados: 0, 
        total_procesados: 0, 
        tiempo_ms: 0 
      };
    }

    const startTime = Date.now();
    let emailsNuevos = 0;
    let emailsActualizados = 0;

    try {
      // 🔄 Usar transacción para procesamiento en lote
      await this.prisma.$transaction(async (tx) => {
        for (const email of emails) {
          // Verificar si existe
          const existe = await tx.emails_sincronizados.findFirst({
            where: {
              cuenta_gmail_id: email.cuenta_gmail_id,
              gmail_message_id: email.gmail_message_id
            }
          });

          if (existe) {
            // ✏️ UPDATE
            await tx.emails_sincronizados.update({
              where: { id: existe.id },
              data: {
                asunto: email.asunto,
                remitente_email: email.remitente_email,
                remitente_nombre: email.remitente_nombre,
                destinatario_email: email.destinatario_email,
                esta_leido: email.esta_leido,
                tiene_adjuntos: email.tiene_adjuntos,
                etiquetas_gmail: email.etiquetas_gmail || [],
                tamano_bytes: email.tamano_bytes,
                fecha_sincronizado: new Date()
              }
            });
            emailsActualizados++;
          } else {
            // ➕ INSERT
            await tx.emails_sincronizados.create({
              data: {
                cuenta_gmail_id: email.cuenta_gmail_id,
                gmail_message_id: email.gmail_message_id,
                asunto: email.asunto,
                remitente_email: email.remitente_email,
                remitente_nombre: email.remitente_nombre,
                destinatario_email: email.destinatario_email,
                fecha_recibido: email.fecha_recibido,
                esta_leido: email.esta_leido,
                tiene_adjuntos: email.tiene_adjuntos,
                etiquetas_gmail: email.etiquetas_gmail || [],
                tamano_bytes: email.tamano_bytes,
                fecha_sincronizado: new Date()
              }
            });
            emailsNuevos++;
          }
        }
      });

      const tiempoMs = Date.now() - startTime;
      
      this.logger.log(
        `✅ Sync completado: ${emailsNuevos} nuevos, ${emailsActualizados} actualizados (${tiempoMs}ms)`
      );

      return {
        emails_nuevos: emailsNuevos,
        emails_actualizados: emailsActualizados,
        total_procesados: emails.length,
        tiempo_ms: tiempoMs
      };

    } catch (error) {
      this.logger.error('❌ Error en syncMany:', error);
      throw error;
    }
  }

  // ================================
  // 📖 PAGINACIÓN
  // ================================

  /**
   * Obtener emails con paginación
   */
  async findPaginated(
    cuentaGmailId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<{ emails: emails_sincronizados[]; total: number }> {
    try {
      const skip = (page - 1) * limit;

      const [emails, total] = await Promise.all([
        this.prisma.emails_sincronizados.findMany({
          where: { cuenta_gmail_id: cuentaGmailId },
          orderBy: { fecha_recibido: 'desc' },
          skip,
          take: limit
        }),
        this.prisma.emails_sincronizados.count({
          where: { cuenta_gmail_id: cuentaGmailId }
        })
      ]);

      return { emails, total };

    } catch (error) {
      this.logger.error('❌ Error en findPaginated:', error);
      throw error;
    }
  }

  // ================================
  // 🔍 BÚSQUEDAS AVANZADAS
  // ================================

  /**
   * Buscar emails con filtros
   */
  async search(filters: EmailSearchFilters): Promise<emails_sincronizados[]> {
    const where: any = {};

    if (filters.cuenta_gmail_id) {
      where.cuenta_gmail_id = filters.cuenta_gmail_id;
    }

    if (filters.esta_leido !== undefined) {
      where.esta_leido = filters.esta_leido;
    }

    if (filters.tiene_adjuntos !== undefined) {
      where.tiene_adjuntos = filters.tiene_adjuntos;
    }

    if (filters.remitente_email) {
      where.remitente_email = {
        contains: filters.remitente_email,
        mode: 'insensitive'
      };
    }

    if (filters.busqueda_texto) {
      where.OR = [
        { asunto: { contains: filters.busqueda_texto, mode: 'insensitive' } },
        { remitente_email: { contains: filters.busqueda_texto, mode: 'insensitive' } },
        { remitente_nombre: { contains: filters.busqueda_texto, mode: 'insensitive' } }
      ];
    }

    if (filters.fecha_desde) {
      where.fecha_recibido = { ...where.fecha_recibido, gte: filters.fecha_desde };
    }

    if (filters.fecha_hasta) {
      where.fecha_recibido = { ...where.fecha_recibido, lte: filters.fecha_hasta };
    }

    return this.prisma.emails_sincronizados.findMany({
      where,
      orderBy: { fecha_recibido: 'desc' }
    });
  }

  // ================================
  // 🚦 SISTEMA DE SEMÁFORO (Traffic Light)
  // ================================

  /**
   * Actualizar estado del semáforo de un email
   */
  async updateTrafficLight(
    emailId: string,
    status: string,
    daysWithoutReply: number
  ): Promise<void> {
    await this.prisma.emails_sincronizados.update({
      where: { id: emailId },
      data: {
        traffic_light_status: status,
        days_without_reply: daysWithoutReply
      }
    });
  }

  /**
   * Marcar email como respondido
   */
  async markAsReplied(emailId: string): Promise<void> {
    await this.prisma.emails_sincronizados.update({
      where: { id: emailId },
      data: {
        replied_at: new Date(),
        days_without_reply: 0,
        traffic_light_status: 'GREEN'
      }
    });
  }

  /**
   * Obtener emails por estado de semáforo
   */
  async findByTrafficLight(
    cuentaGmailId: string,
    status: string
  ): Promise<emails_sincronizados[]> {
    return this.prisma.emails_sincronizados.findMany({
      where: {
        cuenta_gmail_id: cuentaGmailId,
        traffic_light_status: status
      },
      orderBy: { fecha_recibido: 'desc' }
    });
  }

  // ================================
  // 🗑️ ELIMINACIÓN
  // ================================

  /**
   * Eliminar email por Gmail ID
   */
  async deleteByGmailId(
    cuentaGmailId: string,
    gmailMessageId: string
  ): Promise<boolean> {
    try {
      await this.prisma.emails_sincronizados.deleteMany({
        where: {
          cuenta_gmail_id: cuentaGmailId,
          gmail_message_id: gmailMessageId
        }
      });
      return true;
    } catch (error) {
      this.logger.error('❌ Error eliminando email:', error);
      return false;
    }
  }
}