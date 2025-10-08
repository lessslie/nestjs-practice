// ms-yourdashboard-email/src/database/mappers/email.mapper.ts
import type { emails_sincronizados } from '../../../generated/prisma';
import type { EmailMetadataDBWithTrafficLight } from '../../emails/interfaces/traffic-light.interfaces';

/**
 * 🔄 EmailMapper
 * 
 * Convierte tipos de Prisma a interfaces del dominio.
 * Prisma usa `null`, nuestro dominio usa `undefined`.
 * 
 * ✅ Cumple especificación del jefe:
 * - Aísla la conversión de tipos
 * - Service NO ve tipos de Prisma
 */
export class EmailMapper {
  
  /**
   * Convertir emails_sincronizados (Prisma) → EmailMetadataDBWithTrafficLight
   */
  static toEmailMetadataWithTrafficLight(
    prismaEmail: emails_sincronizados
  ): EmailMetadataDBWithTrafficLight {
    return {
      id: prismaEmail.id,
      cuenta_gmail_id: prismaEmail.cuenta_gmail_id,
      gmail_message_id: prismaEmail.gmail_message_id,
      asunto: prismaEmail.asunto ?? undefined,
      remitente_email: prismaEmail.remitente_email ?? undefined,
      remitente_nombre: prismaEmail.remitente_nombre ?? undefined,
      destinatario_email: prismaEmail.destinatario_email ?? undefined,
      fecha_recibido: prismaEmail.fecha_recibido ?? undefined,
      esta_leido: prismaEmail.esta_leido ?? false,
      tiene_adjuntos: prismaEmail.tiene_adjuntos ?? false,
      etiquetas_gmail: (prismaEmail.etiquetas_gmail as string[]) ?? undefined,
      tamano_bytes: prismaEmail.tamano_bytes ?? undefined,
      fecha_sincronizado: prismaEmail.fecha_sincronizado ?? undefined,
      replied_at: prismaEmail.replied_at ?? undefined,
      days_without_reply: prismaEmail.days_without_reply ?? 0,
      traffic_light_status: (prismaEmail.traffic_light_status as any) ?? undefined,
    };
  }

  /**
   * Convertir array de emails
   */
  static toEmailMetadataListWithTrafficLight(
    prismaEmails: emails_sincronizados[]
  ): EmailMetadataDBWithTrafficLight[] {
    return prismaEmails.map(email => 
      this.toEmailMetadataWithTrafficLight(email)
    );
  }
}