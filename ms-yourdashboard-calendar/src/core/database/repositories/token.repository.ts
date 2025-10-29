// ms-yourdashboard-calendar/src/core/database/repositories/token.repository.ts

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { google } from 'googleapis';
import type { cuentas_gmail_asociadas } from '../../../../generated/prisma';

/**
 * 🔐 TokenRepository
 * 
 * Repositorio para gestión de tokens OAuth de Google.
 * Maneja renovación automática de access tokens cuando expiran.
 * 
 * ✅ Cumple especificaciones del jefe:
 * - Encapsula Prisma
 * - Lógica específica de autenticación OAuth
 * - Auto-renovación transparente de tokens
 * - Tipado fuerte, SIN any
 */
@Injectable()
export class TokenRepository {
  private readonly logger = new Logger(TokenRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 🔍 CONSULTAS BÁSICAS
  // ================================

  /**
   * 🔍 Obtener cuenta Gmail por ID
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   */
  async getByGmailId(
    cuentaGmailId: string
  ): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findUnique({
      where: { id: cuentaGmailId },
    });
  }

  // ================================
  // 🔄 RENOVACIÓN DE TOKENS
  // ================================

  /**
   * 🔄 Renovar access token usando refresh token
   * 
   * Usa el refresh token almacenado para obtener un nuevo access token
   * de los servidores de Google OAuth.
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @returns Nuevo access token o null si falla
   */
  async refreshToken(cuentaGmailId: string): Promise<string | null> {
    try {
      const account = await this.getByGmailId(cuentaGmailId);
      
      if (!account?.refresh_token) {
        this.logger.warn(`⚠️ No hay refresh_token para cuenta ${cuentaGmailId}`);
        return null;
      }

      // Configurar cliente OAuth de Google
      const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
      );
      
      oauth2Client.setCredentials({ 
        refresh_token: account.refresh_token 
      });

      // Solicitar nuevo access token
      const { credentials } = await oauth2Client.refreshAccessToken();
      const newAccessToken = credentials.access_token;

      if (!newAccessToken) {
        this.logger.error(`❌ No se pudo obtener nuevo access_token para ${cuentaGmailId}`);
        return null;
      }

      // Calcular fecha de expiración (1 hora por defecto)
      const expiresAt = new Date(Date.now() + 3600_000); // 1 hora

      // Actualizar token en BD
      await this.prisma.cuentas_gmail_asociadas.update({
        where: { id: cuentaGmailId },
        data: {
          access_token: newAccessToken,
          token_expira_en: expiresAt,
          ultima_sincronizacion: new Date(),
        },
      });

      this.logger.log(`✅ Token renovado para cuenta ${cuentaGmailId}`);
      
      return newAccessToken;
    } catch (error) {
      this.logger.error(`❌ Error renovando token para ${cuentaGmailId}:`, error);
      return null;
    }
  }

  // ================================
  // 🔑 OBTENCIÓN DE TOKEN VÁLIDO
  // ================================

  /**
   * 🔑 Obtener token válido con auto-renovación
   * 
   * Este método verifica si el token actual sigue válido.
   * Si está por expirar (menos de 5 minutos), lo renueva automáticamente.
   * 
   * **Lógica de renovación:**
   * - Token válido por > 5 min → Retorna token actual
   * - Token válido por < 5 min → Renueva y retorna nuevo token
   * - Token expirado → Renueva y retorna nuevo token
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @returns Access token válido
   * @throws Error si no hay token o no se puede renovar
   */
  async getValidToken(cuentaGmailId: string): Promise<string> {
    const account = await this.getByGmailId(cuentaGmailId);

    if (!account?.access_token) {
      throw new Error(`Access token ausente para cuenta ${cuentaGmailId}`);
    }

    const now = new Date();
    const expiresAt = account.token_expira_en ?? now;
    
    // Calcular tiempo restante hasta expiración
    const timeToExpireMs = expiresAt.getTime() - now.getTime();
    const timeToExpireMinutes = timeToExpireMs / (60 * 1000);

    // Si el token expira en menos de 5 minutos, renovarlo
    const TOKEN_RENEWAL_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutos
    
    if (timeToExpireMs < TOKEN_RENEWAL_THRESHOLD_MS) {
      this.logger.log(
        `🔄 Token expira en ${timeToExpireMinutes.toFixed(1)} min, renovando...`
      );
      
      const newToken = await this.refreshToken(cuentaGmailId);
      
      if (newToken) {
        return newToken;
      }
      
      // Si falla la renovación, intentar usar el token actual
      this.logger.warn(`⚠️ Renovación falló, usando token actual (puede estar expirado)`);
    }

    return account.access_token;
  }

  // ================================
  // 🔧 UTILIDADES
  // ================================

  /**
   * ⏰ Verificar si un token está expirado
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @returns true si el token está expirado
   */
  async isTokenExpired(cuentaGmailId: string): Promise<boolean> {
    const account = await this.getByGmailId(cuentaGmailId);
    
    if (!account?.token_expira_en) {
      return true; // Si no hay fecha de expiración, considerarlo expirado
    }

    const now = new Date();
    return account.token_expira_en < now;
  }

  /**
   * ⏱️ Obtener tiempo restante hasta expiración
   * 
   * @param cuentaGmailId - ID de la cuenta Gmail
   * @returns Minutos restantes o -1 si ya expiró
   */
  async getTimeToExpiration(cuentaGmailId: string): Promise<number> {
    const account = await this.getByGmailId(cuentaGmailId);
    
    if (!account?.token_expira_en) {
      return -1;
    }

    const now = new Date();
    const timeToExpireMs = account.token_expira_en.getTime() - now.getTime();
    const timeToExpireMinutes = Math.floor(timeToExpireMs / (60 * 1000));

    return timeToExpireMinutes;
  }
}