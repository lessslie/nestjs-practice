// ms-yourdashboard-auth/src/database/repositories/gmail-account.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { cuentas_gmail_asociadas } from '../../../generated/prisma';

/**
 * 📧 GmailAccountRepository
 * 
 * Repositorio para gestión de cuentas Gmail asociadas.
 * Encapsula toda la lógica de acceso a datos de cuentas_gmail_asociadas.
 */
@Injectable()
export class GmailAccountRepository {
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
   * 🆕 Buscar cuenta Gmail por ID con datos del usuario principal
   */
  async findByIdWithUser(id: string): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findFirst({
      where: { 
        id,
        esta_activa: true
      },
      include: {
        usuarios_principales: true  // Trae la relación con usuario
      }
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
   * Buscar cuenta Gmail por Google ID
   */
  async findByGoogleId(googleId: string): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findFirst({
      where: { 
        google_id: googleId
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
   * 🆕 Buscar PRIMERA cuenta Gmail activa de un usuario
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
  // ✏️ OPERACIONES DE ESCRITURA
  // ================================

  /**
   * Crear nueva cuenta Gmail
   */
  async create(data: {
    usuario_principal_id: string;
    email_gmail: string;
    google_id: string;
    nombre_cuenta: string;
    access_token: string;
    refresh_token: string;
    token_expira_en: Date;
    scopes: string[];
  }): Promise<cuentas_gmail_asociadas> {
    return this.prisma.cuentas_gmail_asociadas.create({
      data: {
        usuario_principal_id: data.usuario_principal_id,
        email_gmail: data.email_gmail,
        google_id: data.google_id,
        nombre_cuenta: data.nombre_cuenta,
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        token_expira_en: data.token_expira_en,
        esta_activa: true
        // scopes se podría guardar como JSONB si lo necesitamos
      }
    });
  }

  /**
   * Actualizar tokens de una cuenta Gmail
   */
  async updateTokens(
    id: string,
    tokens: {
      access_token: string;
      refresh_token?: string;
      token_expira_en: Date;
    }
  ): Promise<cuentas_gmail_asociadas> {
    return this.prisma.cuentas_gmail_asociadas.update({
      where: { id },
      data: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        token_expira_en: tokens.token_expira_en,
        ultima_sincronizacion: new Date()
      }
    });
  }

  /**
   * 🆕 Actualizar access token por EMAIL (para renovación de tokens)
   */
  async updateAccessToken(
    emailGmail: string,
    accessToken: string,
    refreshToken: string,
    expiresAt: Date
  ): Promise<cuentas_gmail_asociadas> {
    return this.prisma.cuentas_gmail_asociadas.updateMany({
      where: { email_gmail: emailGmail },
      data: {
        access_token: accessToken,
        refresh_token: refreshToken,
        token_expira_en: expiresAt,
        ultima_sincronizacion: new Date()
      }
    }).then(async () => {
      // Retornar la cuenta actualizada
      const cuenta = await this.findByEmail(emailGmail);
      if (!cuenta) throw new Error(`Cuenta Gmail ${emailGmail} no encontrada después de actualizar`);
      return cuenta;
    });
  }

  /**
   * Actualizar alias de una cuenta Gmail
   */
  async updateAlias(id: string, alias: string | null): Promise<cuentas_gmail_asociadas> {
    return this.prisma.cuentas_gmail_asociadas.update({
      where: { id },
      data: { alias_personalizado: alias }
    });
  }

  /**
   * Desactivar cuenta Gmail
   */
  async deactivate(id: string): Promise<cuentas_gmail_asociadas> {
    return this.prisma.cuentas_gmail_asociadas.update({
      where: { id },
      data: { 
        esta_activa: false,
        ultima_sincronizacion: new Date()
      }
    });
  }

  // ================================
  // 📊 ESTADÍSTICAS Y AGREGACIONES
  // ================================

  /**
   * Contar cuentas Gmail activas de un usuario
   */
  async countActiveAccounts(userId: string): Promise<number> {
    return this.prisma.cuentas_gmail_asociadas.count({
      where: {
        usuario_principal_id: userId,
        esta_activa: true
      }
    });
  }

  /**
   * 🆕 Obtener estadísticas globales de tokens
   */
  async getTokenStats(): Promise<{
    totalUsers: number;
    validTokens: number;
    expiredTokens: number;
  }> {
    // Contar usuarios únicos con cuentas Gmail
    const totalUsers = await this.prisma.usuarios_principales.count({
      where: {
        cuentas_gmail_asociadas: {
          some: {}  // Tiene al menos una cuenta Gmail
        }
      }
    });

    // Contar tokens válidos
    const validTokens = await this.prisma.cuentas_gmail_asociadas.count({
      where: {
        esta_activa: true,
        token_expira_en: {
          gt: new Date()  // Mayor que ahora
        }
      }
    });

    // Contar tokens expirados o inactivos
    const expiredTokens = await this.prisma.cuentas_gmail_asociadas.count({
      where: {
        OR: [
          { esta_activa: false },
          { 
            token_expira_en: {
              lte: new Date()  // Menor o igual que ahora
            }
          }
        ]
      }
    });

    return {
      totalUsers,
      validTokens,
      expiredTokens
    };
  }

  /**
   * 🆕 Listar usuarios con sus cuentas Gmail y estado de tokens
   */
  async getUsersWithTokenStatus(): Promise<Array<{
    id: string;
    name: string;
    email: string;
    created_at: Date;
    expires_at: Date | null;
    token_valid: boolean;
    cuentas_gmail_count: number;
  }>> {
    // Obtener todos los usuarios con sus cuentas Gmail
    const usuarios = await this.prisma.usuarios_principales.findMany({
      include: {
        cuentas_gmail_asociadas: {
          where: { esta_activa: true }
        }
      },
      orderBy: { fecha_registro: 'desc' }
    });

    // Mapear a la estructura requerida
    return usuarios.map(usuario => {
      const primeraActiva = usuario.cuentas_gmail_asociadas[0];
      const tokenValid = primeraActiva 
        ? (primeraActiva.token_expira_en ? new Date() < new Date(primeraActiva.token_expira_en) : false)
        : false;

      return {
        id: usuario.id,
        name: usuario.nombre,
        email: usuario.email,
        created_at: usuario.fecha_registro ?? new Date(0), // fallback to epoch if null
        expires_at: primeraActiva?.token_expira_en || null,
        token_valid: tokenValid,
        cuentas_gmail_count: usuario.cuentas_gmail_asociadas.length
      };
    });
  }
}