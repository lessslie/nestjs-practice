import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { google } from 'googleapis';

@Injectable()
export class TokenRepository {
  private readonly logger = new Logger(TokenRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async getByGmailId(cuentaGmailId: string) {
    return this.prisma.cuentas_gmail_asociadas.findUnique({
      where: { id: cuentaGmailId },
    });
  }

  async refreshToken(cuentaGmailId: string) {
    const account = await this.getByGmailId(cuentaGmailId);
    if (!account?.refresh_token) return null;

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
    );
    oauth2Client.setCredentials({ refresh_token: account.refresh_token });

    const { credentials } = await oauth2Client.refreshAccessToken();
    const newAccessToken = credentials.access_token;
    const expiresAt = new Date(Date.now() + 3600_000);

    await this.prisma.cuentas_gmail_asociadas.update({
      where: { id: cuentaGmailId },
      data: {
        access_token: newAccessToken,
        token_expira_en: expiresAt,
        ultima_sincronizacion: new Date(),
      },
    });

    this.logger.log(`✅ Token renovado para ${cuentaGmailId}`);
    return newAccessToken;
  }

  async getValidToken(cuentaGmailId: string): Promise<string> {
    const account = await this.getByGmailId(cuentaGmailId);
    if (!account?.access_token) throw new Error('Access token ausente');

    const now = new Date();
    const expiresAt = account.token_expira_en ?? now;
    const timeToExpire = expiresAt.getTime() - now.getTime();

    if (timeToExpire < 5 * 60 * 1000) {
      return (await this.refreshToken(cuentaGmailId)) ?? account.access_token;
    }

    return account.access_token;
  }
}
