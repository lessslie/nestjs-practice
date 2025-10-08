import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

interface CreateAccountDTO {
  usuario_principal_id: number;
  phone: string;
  nombre_cuenta: string;
  token: string;
  alias_personalizado?: string | null;
  phone_number_id: string;
}

@Injectable()
export class WhatsappAccountsService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.whatsapp_accounts.findMany();
  }

  async findByPhoneNumberId(phoneNumberId: string) {
    return this.prisma.whatsapp_accounts.findUnique({
      where: { phone_number_id: phoneNumberId },
    });
  }

 async findById(id: string) {
    return this.prisma.whatsapp_accounts.findUnique({
      where: { id },
    });
  }

  async createAccount(data: CreateAccountDTO) {
    return this.prisma.whatsapp_accounts.create({
      data,
    });
  }

  async updateAccount(id: string, update: Partial<CreateAccountDTO>) {
    return this.prisma.whatsapp_accounts.update({
      where: { id },
      data: update,
    });
  }

  async getPhoneNumberIdFromMeta(phone: string, token: string): Promise<string> {
    const url = `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_BUSINESS_ACCOUNT_ID}/phone_numbers`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const normalize = (num: string) => num.replace(/\D/g, '');
    const phoneNormalized = normalize(phone);

    const match = data.data.find(
      (num: any) => normalize(num.display_phone_number) === phoneNormalized,
    );

    if (!match) {
      console.error('Lista de números devueltos por Meta:', data.data);
      throw new Error(`No se encontró phone_number_id para el número ${phone}`);
    }

    return match.id;
  }

  async updateTokenAccount(
    id: string,
    newToken: string,
    expiresInSeconds?: number,
  ) {
    return this.prisma.whatsapp_accounts.update({
      where: { id },
      data: {
        token: newToken,
        token_updated_at: new Date(),
        token_expires_at: expiresInSeconds
          ? new Date(Date.now() + expiresInSeconds * 1000)
          : undefined,
      },
    });
  }

  private isDate(value: any): value is Date {
    return value instanceof Date && !isNaN(value.getTime());
  }

  shouldRefresh(account: any, daysThreshold = 7): boolean {
    const expiresAtRaw = account.token_expires_at;
    if (!expiresAtRaw) return true;

    const expiresAt =
      this.isDate(expiresAtRaw) ? expiresAtRaw : new Date(expiresAtRaw);
    const now = new Date();
    const msLeft = expiresAt.getTime() - now.getTime();
    const daysLeft = msLeft / (1000 * 60 * 60 * 24);
    return daysLeft <= daysThreshold;
  }

  async refreshToken(id: string) {
    const cuenta = await this.findById(id);
    if (!cuenta) throw new Error(`Cuenta con ID ${id} no encontrada`);

    const appId = process.env.META_APP_ID;
    const appSecret = process.env.META_APP_SECRET;
    if (!appId || !appSecret) {
      throw new Error('META_APP_ID o META_APP_SECRET no definidos en .env');
    }

    const url = `https://graph.facebook.com/v19.0/oauth/access_token`;
    const params = {
      grant_type: 'fb_exchange_token',
      client_id: appId,
      client_secret: appSecret,
      fb_exchange_token: cuenta.token,
    };

    try {
      const { data } = await axios.get(url, { params });
      const newToken = data.access_token;
      const expiresIn = data.expires_in;

      if (!newToken) throw new Error('No se recibió un nuevo token de Meta');

      return await this.updateTokenAccount(id, newToken, expiresIn);
    } catch (error: any) {
      throw new Error(
        `Error refrescando token de cuenta ${id}: ${
          error.response?.data?.error?.message || error.message
        }`,
      );
    }
  }

  async refreshAllDueTokens(daysThreshold = 7) {
    const refreshed: string[] = [];
    const skipped: string[] = [];
    const errors: Record<string, string> = {};

    const accounts = await this.findAll();
    for (const acc of accounts) {
      try {
        if (this.shouldRefresh(acc, daysThreshold)) {
          await this.refreshToken(acc.id);
          refreshed.push(acc.id);
        } else {
          skipped.push(acc.id);
        }
      } catch (err: any) {
        errors[acc.id] = err.message || String(err);
      }
    }

    return { refreshed, skipped, errors };
  }
}