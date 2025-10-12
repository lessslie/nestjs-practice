import { Injectable } from '@nestjs/common';
import { WhatsappAccountRepository } from '../../repositories/whatsapp-account.repository';
import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

interface CreateAccountDTO {
  usuario_principal_id: string;
  phone: string;
  nombre_cuenta: string;
  token: string;
  alias_personalizado?: string | null;
  phone_number_id: string;
}

@Injectable()
export class WhatsappAccountsService {
  constructor(private readonly repo: WhatsappAccountRepository) { }

  async findAll() {
    return this.repo.findAll();
  }

  async findByPhoneNumberId(phoneNumberId: string) {
    return this.repo.findByPhoneNumberId(phoneNumberId);
  }

  async findById(id: string) {
    return this.repo.findById(id);
  }

  async createAccount(data: CreateAccountDTO) {
    return this.repo.create(data);
  }


  async updateAccount(id: string, update: Partial<CreateAccountDTO>) {
    return this.repo.update(id, update);
  }

  async getPhoneNumberIdFromMeta(phone: string, token: string): Promise<string> {
    const url = `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_BUSINESS_ACCOUNT_ID}/phone_numbers`;
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Normalizamos el número ingresado
    const normalize = (num: string) => num.replace(/\D/g, ''); // deja solo dígitos

    const phoneNormalized = normalize(phone);
    console.log(data.data)
    const match = data.data.find(
      (num: any) => normalize(num.display_phone_number) === phoneNormalized,
    );

    if (!match) {
      console.error('Lista de números devueltos por Meta:', data.data);
      throw new Error(`No se encontró phone_number_id para el número ${phone}`);
    }

    return match.id; // este es el phone_number_id
  }

  async updateTokenAccount(id: string, newToken: string, expiresInSeconds?: number) {
    return this.repo.updateToken(id, newToken, expiresInSeconds);
  }

  private isDate(value: any): value is Date {
    return value instanceof Date && !isNaN(value.getTime());
  }

  /** Devuelve true si faltan <= daysThreshold días para expirar o ya expiró. */
  shouldRefresh(account: any, daysThreshold = 7): boolean {
    const expiresAtRaw = account.token_expires_at;
    if (!expiresAtRaw) {
      // Si no tenemos expiración guardada, conviene refrescar para obtenerla.
      return true;
    }
    const expiresAt =
      this.isDate(expiresAtRaw) ? expiresAtRaw : new Date(expiresAtRaw);
    const now = new Date();
    const msLeft = expiresAt.getTime() - now.getTime();
    const daysLeft = msLeft / (1000 * 60 * 60 * 24);
    return daysLeft <= daysThreshold;
  }

  // 🔹 Renueva un token (siempre que el token anterior aún sea válido o sea long-lived no vencido).
  async refreshToken(id: string) {
    const cuenta = await this.findById(id);
    if (!cuenta) throw new Error(`Cuenta con ID ${id} no encontrada`);

    const appId = process.env.META_APP_ID;
    const appSecret = process.env.META_APP_SECRET;
    if (!appId || !appSecret) throw new Error('META_APP_ID o META_APP_SECRET no definidos');

    const url = `https://graph.facebook.com/v19.0/oauth/access_token`;
    const params = {
      grant_type: 'fb_exchange_token',
      client_id: appId,
      client_secret: appSecret,
      fb_exchange_token: cuenta.token,
    };

    const { data } = await axios.get(url, { params });
    const newToken: string = data.access_token;
    const expiresIn: number | undefined = data.expires_in;

    if (!newToken) throw new Error('No se recibió un nuevo token de Meta');

    return this.updateTokenAccount(id, newToken, expiresIn);
  }

  async refreshAllDueTokens(daysThreshold = 7) {
    const accounts = await this.findAll();
    const refreshed: string[] = [];
    const skipped: string[] = [];
    const errors: Record<string, string> = {};

    for (const acc of accounts) {
      try {
        const expira = acc.token_expires_at
          ? new Date(acc.token_expires_at)
          : null;
        const now = new Date();
        const daysLeft = expira ? (expira.getTime() - now.getTime()) / (1000 * 60 * 60 * 24) : 0;

        if (!expira || daysLeft <= daysThreshold) {
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