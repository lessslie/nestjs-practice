// ms-yourdashboard-email/src/database/repositories/email-complete.repository.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { emails_completos } from '../../../generated/prisma';

/**
 * 📄 EmailCompleteRepository
 * 
 * Repositorio para gestión de emails_completos (cuerpo HTML, attachments).
 * Almacena el contenido completo de los emails.
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma
 * - Queries explícitas
 * - Lógica simple de datos
 */

export interface EmailCompleteData {
  gmail_message_id: string;
  cuenta_gmail_id: string;
  usuario_principal_id: string;
  email_sincronizado_id?: string;
  cuerpo_texto?: string;
  cuerpo_html?: string;
  headers_completos?: any;
  adjuntos?: any;
  thread_id?: string;
  labels_completos?: any;
}

@Injectable()
export class EmailCompleteRepository {
  private readonly logger = new Logger(EmailCompleteRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 🔍 CONSULTAS
  // ================================

  /**
   * Buscar contenido completo por Gmail Message ID
   */
  async findByGmailId(
    cuentaGmailId: string,
    gmailMessageId: string
  ): Promise<emails_completos | null> {
    return this.prisma.emails_completos.findFirst({
      where: {
        cuenta_gmail_id: cuentaGmailId,
        gmail_message_id: gmailMessageId
      }
    });
  }

  /**
   * Verificar si existe contenido completo
   */
  async exists(
    cuentaGmailId: string,
    gmailMessageId: string
  ): Promise<boolean> {
    const count = await this.prisma.emails_completos.count({
      where: {
        cuenta_gmail_id: cuentaGmailId,
        gmail_message_id: gmailMessageId
      }
    });
    return count > 0;
  }

  // ================================
  // 💾 CREAR/ACTUALIZAR
  // ================================

  /**
   * Guardar contenido completo de email
   * 
   * Usa upsert para insertar o actualizar si ya existe
   */
  async save(data: EmailCompleteData): Promise<emails_completos> {
    try {
      // 🔍 Primero intentamos encontrar si existe
      const existing = await this.prisma.emails_completos.findFirst({
        where: {
          cuenta_gmail_id: data.cuenta_gmail_id,
          gmail_message_id: data.gmail_message_id
        }
      });

      if (existing) {
        // ✏️ UPDATE
        return await this.prisma.emails_completos.update({
          where: { id: existing.id },
          data: {
            cuerpo_texto: data.cuerpo_texto,
            cuerpo_html: data.cuerpo_html,
            headers_completos: data.headers_completos as any,
            adjuntos: data.adjuntos as any,
            thread_id: data.thread_id,
            labels_completos: data.labels_completos as any,
            fecha_guardado: new Date()
          }
        });
      } else {
        // ➕ INSERT
        return await this.prisma.emails_completos.create({
          data: {
            gmail_message_id: data.gmail_message_id,
            cuenta_gmail_id: data.cuenta_gmail_id,
            usuario_principal_id: data.usuario_principal_id,
            email_sincronizado_id: data.email_sincronizado_id,
            cuerpo_texto: data.cuerpo_texto,
            cuerpo_html: data.cuerpo_html,
            headers_completos: data.headers_completos as any,
            adjuntos: data.adjuntos as any,
            thread_id: data.thread_id,
            labels_completos: data.labels_completos as any,
            fecha_guardado: new Date()
          }
        });
      }

    } catch (error) {
      this.logger.error('❌ Error guardando email completo:', error);
      throw error;
    }
  }

  // ================================
  // 📊 ESTADÍSTICAS
  // ================================

  /**
   * Contar emails completos guardados de una cuenta
   */
  async countByAccount(cuentaGmailId: string): Promise<number> {
    return this.prisma.emails_completos.count({
      where: { cuenta_gmail_id: cuentaGmailId }
    });
  }

  // ================================
  // 🗑️ ELIMINACIÓN
  // ================================

  /**
   * Eliminar contenido completo por Gmail ID
   */
  async deleteByGmailId(
    cuentaGmailId: string,
    gmailMessageId: string
  ): Promise<boolean> {
    try {
      await this.prisma.emails_completos.deleteMany({
        where: {
          cuenta_gmail_id: cuentaGmailId,
          gmail_message_id: gmailMessageId
        }
      });
      return true;
    } catch (error) {
      this.logger.error('❌ Error eliminando email completo:', error);
      return false;
    }
  }
}