// ms-yourdashboard-auth/src/tokens/tokens.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';
import { 
  TokenStats, 
  UsersListResponse, 
  ValidTokenResponse 
} from '../auth/interfaces/auth.interfaces';
import { GmailAccountRepository } from '../database/repositories/gmail-account.repository';

/**
 * 🔑 TokensService
 * 
 * Servicio para gestión de tokens OAuth de Google.
 * 
 * ✅ TOTALMENTE MIGRADO - Ya no usa DatabaseService.query()
 * ✅ Usa solo GmailAccountRepository
 */
@Injectable()
export class TokensService {
  constructor(
    private readonly configService: ConfigService,
    private readonly gmailAccountRepository: GmailAccountRepository
  ) {}

  // ================================
  // 🔑 OBTENER TOKENS
  // ================================

  /**
   * 🔑 Obtener access token válido de un usuario PRINCIPAL
   * LEGACY: Busca en la primera cuenta Gmail activa del usuario principal
   * 
   * ✅ MIGRADO: Usa gmailAccountRepository.findFirstActiveByUserId()
   */
  async getValidToken(userId: string): Promise<ValidTokenResponse> {
    try {
      console.log(`🔵 MS-AUTH - Solicitando token para usuario PRINCIPAL: ${userId}`);

      // Validar que userId sea un UUID válido
      if (!userId || userId.trim() === '') {
        throw new NotFoundException(`ID de usuario inválido: ${userId}`);
      }

      // 🎯 BUSCAR PRIMERA CUENTA GMAIL ACTIVA DEL USUARIO PRINCIPAL
      const cuenta = await this.gmailAccountRepository.findFirstActiveByUserId(userId);
      
      if (!cuenta) {
        throw new NotFoundException(`Usuario ${userId} no tiene cuentas Gmail conectadas`);
      }

      // Validar campos requeridos
      if (!cuenta.access_token) {
        throw new NotFoundException(`No hay access token para usuario ${userId}`);
      }

      // Verificar si el token expiró
      if (cuenta.token_expira_en && new Date() >= new Date(cuenta.token_expira_en)) {
        console.log(`🔄 MS-AUTH - Token expirado para ${cuenta.email_gmail}, renovando...`);
        
        if (!cuenta.refresh_token) {
          throw new NotFoundException(`Token expirado y no hay refresh_token para usuario ${userId}`);
        }

        // Renovar token
        const newAccessToken = await this.refreshAccessToken(
          cuenta.email_gmail, 
          cuenta.refresh_token
        );
        
        return {
          success: true,
          accessToken: newAccessToken,
          user: { 
            id: userId, 
            email: cuenta.email_gmail, 
            name: cuenta.nombre_cuenta,
            cuentaGmailId: cuenta.id
          },
          renewed: true
        };
      }

      console.log(`✅ MS-AUTH - Token válido para ${cuenta.email_gmail} (usuario ${userId}, cuenta Gmail ${cuenta.id})`);
      
      return {
        success: true,
        accessToken: cuenta.access_token,
        user: { 
          id: userId, 
          email: cuenta.email_gmail, 
          name: cuenta.nombre_cuenta,
          cuentaGmailId: cuenta.id
        },
        renewed: false
      };

    } catch (error) {
      console.error(`❌ MS-AUTH - Error obteniendo token para usuario ${userId}:`, error);
      throw error;
    }
  }

  /**
   * 🔑 🎯 NUEVO: Obtener access token por CUENTA GMAIL específica
   * RECOMENDADO: Usa este método en vez de getValidToken()
   * 
   * ✅ MIGRADO: Usa gmailAccountRepository.findByIdWithUser()
   */
  async getValidTokenByGmailAccount(cuentaGmailId: string): Promise<ValidTokenResponse> {
    try {
      console.log(`🔵 MS-AUTH - Solicitando token para cuenta Gmail: ${cuentaGmailId}`);

      // Validar ID
      if (!cuentaGmailId || cuentaGmailId.trim() === '') {
        throw new NotFoundException(`ID de cuenta Gmail inválido: ${cuentaGmailId}`);
      }

      // 🎯 BUSCAR CUENTA GMAIL CON DATOS DEL USUARIO
      const cuenta = await this.gmailAccountRepository.findByIdWithUser(cuentaGmailId);
      
      if (!cuenta) {
        throw new NotFoundException(`Cuenta Gmail ${cuentaGmailId} no encontrada o inactiva`);
      }

      // Validar campos requeridos
      if (!cuenta.access_token) {
        throw new NotFoundException(`No hay access token para cuenta Gmail ${cuentaGmailId}`);
      }

      if (!cuenta.usuario_principal_id) {
        throw new NotFoundException(`Cuenta Gmail ${cuentaGmailId} no tiene usuario principal asociado`);
      }

      // Verificar si el token expiró
      if (cuenta.token_expira_en && new Date() >= new Date(cuenta.token_expira_en)) {
        console.log(`🔄 MS-AUTH - Token expirado para cuenta Gmail ${cuenta.email_gmail}, renovando...`);
        
        if (!cuenta.refresh_token) {
          throw new NotFoundException(`Token expirado y no hay refresh_token para cuenta Gmail ${cuentaGmailId}`);
        }

        const newAccessToken = await this.refreshAccessToken(
          cuenta.email_gmail, 
          cuenta.refresh_token
        );
        
        return {
          success: true,
          accessToken: newAccessToken,
          user: { 
            id: cuenta.usuario_principal_id,
            email: cuenta.email_gmail, 
            name: cuenta.nombre_cuenta,
            cuentaGmailId: cuenta.id
          },
          renewed: true
        };
      }

      console.log(`✅ MS-AUTH - Token válido para cuenta Gmail ${cuenta.email_gmail} (ID: ${cuenta.id})`);
      
      return {
        success: true,
        accessToken: cuenta.access_token,
        user: { 
          id: cuenta.usuario_principal_id,
          email: cuenta.email_gmail,
          name: cuenta.nombre_cuenta,
          cuentaGmailId: cuenta.id
        },
        renewed: false
      };

    } catch (error) {
      console.error(`❌ MS-AUTH - Error obteniendo token para cuenta Gmail ${cuentaGmailId}:`, error);
      throw error;
    }
  }

  // ================================
  // 🔄 RENOVACIÓN DE TOKENS
  // ================================

  /**
   * 🔄 Renovar access token usando refresh token
   * 
   * ✅ MIGRADO: Usa gmailAccountRepository.updateAccessToken()
   */
  private async refreshAccessToken(
    emailGmail: string, 
    refreshToken: string
  ): Promise<string> {
    try {
      // 1. Configurar OAuth2 Client
      const oauth2Client = new google.auth.OAuth2(
        this.configService.get<string>('GOOGLE_CLIENT_ID'),
        this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
        this.configService.get<string>('GOOGLE_REDIRECT_URI')
      );

      oauth2Client.setCredentials({
        refresh_token: refreshToken
      });

      // 2. Obtener nuevo access token de Google
      const { credentials } = await oauth2Client.refreshAccessToken();
      
      if (!credentials.access_token) {
        throw new Error('No se pudo obtener el nuevo access token');
      }

      // 3. Calcular fecha de expiración
      const expiresAt = credentials.expiry_date 
        ? new Date(credentials.expiry_date) 
        : new Date(Date.now() + 3600000); // 1 hora por defecto

      // 4. 🎯 ACTUALIZAR EN BASE DE DATOS (usando repository)
      await this.gmailAccountRepository.updateAccessToken(
        emailGmail,
        credentials.access_token,
        credentials.refresh_token || refreshToken,
        expiresAt
      );
      
      console.log(`✅ MS-AUTH - Token renovado para ${emailGmail}`);
      
      return credentials.access_token;

    } catch (error) {
      console.error(`❌ MS-AUTH - Error renovando token para ${emailGmail}:`, error);
      throw new Error('Error al renovar access token');
    }
  }

  // ================================
  // 📊 ESTADÍSTICAS
  // ================================

  /**
   * 📊 Obtener estadísticas de tokens
   * 
   * ✅ MIGRADO: Usa gmailAccountRepository.getTokenStats()
   */
  async getTokensStats(): Promise<TokenStats> {
    try {
      const stats = await this.gmailAccountRepository.getTokenStats();
      
      console.log(`📊 Estadísticas de tokens:`, {
        totalUsers: stats.totalUsers,
        validTokens: stats.validTokens,
        expiredTokens: stats.expiredTokens
      });

      return stats;
    } catch (error) {
      console.error('❌ Error obteniendo estadísticas de tokens:', error);
      throw error;
    }
  }

  /**
   * 👥 Listar usuarios con tokens
   * 
   * ✅ MIGRADO: Usa gmailAccountRepository.getUsersWithTokenStatus()
   */
  async getUsersList(): Promise<UsersListResponse> {
    try {
      const users = await this.gmailAccountRepository.getUsersWithTokenStatus();
      
      console.log(`👥 Lista de usuarios obtenida: ${users.length} usuarios`);

      return {
        users,
        total: users.length
      };
    } catch (error) {
      console.error('❌ Error obteniendo lista de usuarios:', error);
      throw error;
    }
  }
}