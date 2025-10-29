// ms-yourdashboard-calendar/src/core/database/repositories/gmail-account.repository.ts

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { cuentas_gmail_asociadas } from '../../../../generated/prisma';
import type { 
  ActiveGmailAccount,
  GmailTokenInfo 
} from '../types/event-database.types';

/**
 * 📧 GmailAccountRepository
 * 
 * Repositorio para gestión de cuentas Gmail asociadas.
 * Maneja operaciones relacionadas con autenticación OAuth,
 * tokens, y sincronización de cuentas.
 */
@Injectable()
export class GmailAccountRepository {
  private readonly logger = new Logger(GmailAccountRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  // ================================
  // 🔍 CONSULTAS BÁSICAS
  // ================================

  async findById(id: string): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findFirst({
      where: {
        email_gmail: email,
        esta_activa: true,
      },
    });
  }

  async findByUserId(userId: string): Promise<cuentas_gmail_asociadas[]> {
    return this.prisma.cuentas_gmail_asociadas.findMany({
      where: {
        usuario_principal_id: userId,
        esta_activa: true,
      },
      orderBy: { fecha_conexion: 'desc' },
    });
  }

  async findFirstActiveByUserId(
    userId: string
  ): Promise<cuentas_gmail_asociadas | null> {
    return this.prisma.cuentas_gmail_asociadas.findFirst({
      where: {
        usuario_principal_id: userId,
        esta_activa: true,
      },
      orderBy: { fecha_conexion: 'desc' },
    });
  }

  async findByUsuarioWithStats(usuarioId: string): Promise<
    Array<cuentas_gmail_asociadas & { events_count: number }>
  > {
    const cuentas = await this.prisma.cuentas_gmail_asociadas.findMany({
      where: { 
        usuario_principal_id: usuarioId, 
        esta_activa: true 
      },
      include: {
        events_sincronizados: {
          select: { id: true },
        },
      },
    });

    return cuentas.map((cuenta) => ({
      ...cuenta,
      events_count: cuenta.events_sincronizados.length,
    }));
  }

  // ================================
  // 🔄 CUENTAS ACTIVAS PARA SINCRONIZACIÓN
  // ================================

  async findActive(limit = 100): Promise<cuentas_gmail_asociadas[]> {
    return this.prisma.cuentas_gmail_asociadas.findMany({
      where: {
        esta_activa: true,
        access_token: { not: null },
      },
      orderBy: { ultima_sincronizacion: 'asc' },
      take: limit,
    });
  }

  /**
   * ✅ MÉTODO CORREGIDO - getActiveGmailAccounts
   */
  async getActiveGmailAccounts(
    activeDays = 7,
    limit = 100
  ): Promise<ActiveGmailAccount[]> {
    try {
      const cuentas = await this.prisma.cuentas_gmail_asociadas.findMany({
        where: {
          esta_activa: true,
          access_token: { not: null },
        },
        select: {
          id: true,
          email_gmail: true,
          access_token: true,
          usuario_principal_id: true,
        },
        orderBy: { ultima_sincronizacion: 'asc' },
        take: limit,
      });

      this.logger.log(`✅ Encontradas ${cuentas.length} cuentas Gmail activas`);

      // ✅ FIX FINAL: Filtrar nulls explícitamente y mapear
      const validCuentas: ActiveGmailAccount[] = cuentas
        .filter((c) => c.access_token !== null && c.usuario_principal_id !== null)
        .map((c) => ({
          id: c.id,
          email_gmail: c.email_gmail,
          access_token: c.access_token!,
          usuario_principal_id: c.usuario_principal_id!,
        }));

      return validCuentas;
    } catch (error) {
      this.logger.error('❌ Error obteniendo cuentas activas:', error);
      throw error;
    }
  }

  // ================================
  // 🔐 GESTIÓN DE TOKENS
  // ================================

  async updateTokens(
    id: string,
    accessToken: string,
    expiresAt: Date
  ): Promise<cuentas_gmail_asociadas> {
    return this.prisma.cuentas_gmail_asociadas.update({
      where: { id },
      data: {
        access_token: accessToken,
        token_expira_en: expiresAt,
        ultima_sincronizacion: new Date(),
      },
    });
  }

  /**
   * ✅ MÉTODO CORREGIDO - getTokenInfo
   */
  async getTokenInfo(id: string): Promise<GmailTokenInfo | null> {
    const cuenta = await this.prisma.cuentas_gmail_asociadas.findUnique({
      where: { id },
      select: {
        id: true,
        access_token: true,
        refresh_token: true,
        token_expira_en: true,
      },
    });

    if (!cuenta || !cuenta.access_token) return null;

    // ✅ FIX: Non-null assertion después de verificar
    return {
      id: cuenta.id,
      access_token: cuenta.access_token,
      refresh_token: cuenta.refresh_token || undefined,
      token_expiracion: cuenta.token_expira_en || undefined,
    };
  }

  async updateLastSync(id: string): Promise<void> {
    await this.prisma.cuentas_gmail_asociadas.update({
      where: { id },
      data: { ultima_sincronizacion: new Date() },
    });
  }

  // ================================
  // 🔢 CONTADORES Y ESTADÍSTICAS
  // ================================

  async countActiveByUserId(userId: string): Promise<number> {
    return this.prisma.cuentas_gmail_asociadas.count({
      where: {
        usuario_principal_id: userId,
        esta_activa: true,
      },
    });
  }

  async countAllActive(): Promise<number> {
    return this.prisma.cuentas_gmail_asociadas.count({
      where: { esta_activa: true },
    });
  }
}