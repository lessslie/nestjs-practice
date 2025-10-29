import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { cuentas_gmail_asociadas } from '../../../../generated/prisma';

@Injectable()
export class GmailAccountRepository {
  private readonly logger = new Logger(GmailAccountRepository.name);

  constructor(private readonly prisma: PrismaService) {}

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

  async findByUsuario(usuarioId: string) {
    return this.prisma.cuentas_gmail_asociadas.findMany({
      where: { usuario_principal_id: usuarioId, esta_activa: true },
      include: {
        events_sincronizados: {
          select: { id: true },
        },
      },
    });
  }

  async findById(id: string) {
    return this.prisma.cuentas_gmail_asociadas.findUnique({
      where: { id },
    });
  }

  async updateTokens(id: string, accessToken: string, expiresAt: Date) {
    return this.prisma.cuentas_gmail_asociadas.update({
      where: { id },
      data: {
        access_token: accessToken,
        token_expira_en: expiresAt,
        ultima_sincronizacion: new Date(),
      },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.cuentas_gmail_asociadas.findFirst({
      where: {
        usuario_principal_id: userId,
        esta_activa: true,
      },
      orderBy: { fecha_conexion: 'desc' },
    });
  }
}


