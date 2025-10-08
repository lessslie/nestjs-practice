// ms-yourdashboard-email/src/database/repositories/gmail-account.repository.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { cuentas_gmail_asociadas } from '../../../generated/prisma';

/**
 * 📧 GmailAccountRepository
 * 
 * Repositorio para gestión de cuentas Gmail asociadas.
 * Se enfoca en las operaciones necesarias para el microservicio de emails.
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma
 * - Queries explícitas y declarativas
 * - Sin lógica de negocio (solo acceso a datos)
 */

@Injectable()
export class GmailAccountRepository {
  private readonly logger = new Logger(GmailAccountRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 🔍 CONSULTAS BÁSICAS
  // ================================

  /**
   * Buscar cuenta Gmail por ID
   */
  async findById(id: string): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findUnique({
      where: { id }
    });
  }

  /**
   * Buscar cuenta Gmail por email
   */
  async findByEmail(email: string): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findFirst({
      where: { 
        email_gmail: email,
        esta_activa: true
      }
    });
  }

  /**
   * Buscar todas las cuentas Gmail de un usuario
   */
  async findByUserId(userId: string): Promise<cuentas_gmail_asociadas[]> {
    return this.prisma.cuentas_gmail_asociadas.findMany({
      where: { 
        usuario_principal_id: userId,
        esta_activa: true
      },
      orderBy: { fecha_conexion: 'desc' }
    });
  }

  /**
   * Buscar primera cuenta activa de un usuario
   */
  async findFirstActiveByUserId(userId: string): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findFirst({
      where: { 
        usuario_principal_id: userId,
        esta_activa: true
      },
      orderBy: { fecha_conexion: 'desc' }
    });
  }

  // ================================
  // 🔄 CUENTAS ACTIVAS PARA CRON
  // ================================

  /**
   * 🔄 Obtener cuentas Gmail activas para sincronización automática
   * 
   * Para el CRON de sincronización automática.
   * Prioriza cuentas que no se han sincronizado recientemente.
   */
  async findActiveAccounts(limit: number = 100): Promise<Array<{
    id: string;
    email_gmail: string;
    access_token: string;
    usuario_principal_id: string;
  }>> {
    try {
      const accounts = await this.prisma.cuentas_gmail_asociadas.findMany({
        where: {
          esta_activa: true,
          access_token: { not: null }
        },
        select: {
          id: true,
          email_gmail: true,
          access_token: true,
          usuario_principal_id: true
        },
        orderBy: { 
          ultima_sincronizacion: 'asc' // Las menos sincronizadas primero
        },
        take: limit
      });

      this.logger.log(`✅ Encontradas ${accounts.length} cuentas Gmail activas`);
      
      return accounts.map(acc => ({
        id: acc.id,
        email_gmail: acc.email_gmail,
        access_token: acc.access_token!,
        usuario_principal_id: acc.usuario_principal_id
      }));

    } catch (error) {
      this.logger.error('❌ Error obteniendo cuentas activas:', error);
      throw error;
    }
  }

  // ================================
  // ✏️ ACTUALIZACIONES
  // ================================

  /**
   * Actualizar fecha de última sincronización
   */
  async updateLastSyncDate(accountId: string): Promise<void> {
    await this.prisma.cuentas_gmail_asociadas.update({
      where: { id: accountId },
      data: { ultima_sincronizacion: new Date() }
    });
  }

  /**
   * Actualizar access token
   */
  async updateAccessToken(
    accountId: string,
    accessToken: string,
    expiresAt?: Date
  ): Promise<void> {
    await this.prisma.cuentas_gmail_asociadas.update({
      where: { id: accountId },
      data: {
        access_token: accessToken,
        token_expira_en: expiresAt
      }
    });
  }

  /**
   * Actualizar contador de syncs vacíos
   * 
   * Para trackear cuentas que no devuelven emails nuevos
   */
  async updateConsecutiveZeroSyncs(
    accountId: string,
    count: number
  ): Promise<void> {
    await this.prisma.cuentas_gmail_asociadas.update({
      where: { id: accountId },
      data: { consecutive_zero_syncs: count }
    });
  }

  // ================================
  // 📊 ESTADÍSTICAS
  // ================================

  /**
   * Contar cuentas activas de un usuario
   */
  async countActiveByUserId(userId: string): Promise<number> {
    return this.prisma.cuentas_gmail_asociadas.count({
      where: {
        usuario_principal_id: userId,
        esta_activa: true
      }
    });
  }

  /**
   * Obtener estadísticas globales de cuentas
   */
  async getGlobalStats(): Promise<{
    total: number;
    activas: number;
    con_tokens: number;
  }> {
    const [total, activas, conTokens] = await Promise.all([
      this.prisma.cuentas_gmail_asociadas.count(),
      this.prisma.cuentas_gmail_asociadas.count({
        where: { esta_activa: true }
      }),
      this.prisma.cuentas_gmail_asociadas.count({
        where: {
          esta_activa: true,
          access_token: { not: null }
        }
      })
    ]);

    return { total, activas, con_tokens: conTokens };
  }

  // ================================
  // 🔐 VALIDACIONES
  // ================================

  /**
   * Verificar si una cuenta tiene token válido
   */
  async hasValidToken(accountId: string): Promise<boolean> {
    const account = await this.prisma.cuentas_gmail_asociadas.findUnique({
      where: { id: accountId },
      select: { access_token: true, esta_activa: true }
    });

    return !!(account?.access_token && account.esta_activa);
  }


/**
 * Buscar cuentas Gmail de un usuario CON conteo de emails
 * 
 * Este método es equivalente a obtenerCuentasGmailUsuario() del DatabaseService
 */
async findByUserIdWithEmailCount(userId: string): Promise<Array<{
  id: string;
  email_gmail: string;
  nombre_cuenta: string;
  alias_personalizado: string | null;
  fecha_conexion: Date;
  ultima_sincronizacion: Date | null;
  esta_activa: boolean;
  emails_count: number;
}>> {
  const cuentasConConteo = await this.prisma.$queryRaw<Array<{
    id: string;
    email_gmail: string;
    nombre_cuenta: string;
    alias_personalizado: string | null;
    fecha_conexion: Date;
    ultima_sincronizacion: Date | null;
    esta_activa: boolean;
    emails_count: bigint;
  }>>`
    SELECT 
      cga.id,
      cga.email_gmail,
      cga.nombre_cuenta,
      cga.alias_personalizado,
      cga.fecha_conexion,
      cga.ultima_sincronizacion,
      cga.esta_activa,
      COALESCE(COUNT(es.id), 0)::bigint as emails_count
    FROM cuentas_gmail_asociadas cga
    LEFT JOIN emails_sincronizados es ON cga.id = es.cuenta_gmail_id
    WHERE cga.usuario_principal_id = ${userId}::uuid
      AND cga.esta_activa = TRUE
    GROUP BY cga.id
    ORDER BY cga.fecha_conexion DESC
  `;

  // Convertir bigint a number para TypeScript
  return cuentasConConteo.map(cuenta => ({
    ...cuenta,
    emails_count: Number(cuenta.emails_count)
  }));
}


}