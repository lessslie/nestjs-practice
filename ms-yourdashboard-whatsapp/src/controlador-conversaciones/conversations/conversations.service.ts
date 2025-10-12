import { Injectable } from '@nestjs/common';
import { ConversationRepository } from '../../../repositories/conversation.repository';
import { MessageRepository } from '../../../repositories/message.repository';
import { clasificarTiempo } from '../../utils/semaforo';

@Injectable()
export class ConversationsService {
  constructor(
    private readonly conversationRepo: ConversationRepository,
    private readonly messageRepo: MessageRepository,
  ) {}

  // 🔥 Crear o actualizar conversación (upsert)
  async upsertConversation(
    phone: string,
    name: string | null,
    message: string,
    date: Date,
    whatsappAccountId: string,
  ): Promise<string> {
    const existing = await this.conversationRepo.findByPhoneAndAccount(phone, whatsappAccountId);

    if (existing) {
      await this.conversationRepo.update(existing.id, {
        last_message: message,
        last_message_date: date,
        name: name ?? existing.name,
      });
      return existing.id;
    } else {
      const newConv = await this.conversationRepo.create({
        phone,
        name,
        last_message: message,
        last_message_date: date,
        whatsapp_account_id: whatsappAccountId,
      });
      return newConv.id;
    }
  }

  // 🔥 Insertar un mensaje recibido (cliente o empresa)
  async insertMessage(
    conversationId: string,
    from: string,
    message: string,
    date: Date | null,
    whatsappAccountId: string,
  ) {
    const canal = 'whatsapp' as const;

    if (from === 'empresa') {
      // Buscar último mensaje sin responder
      const pending = await this.messageRepo.getLastUnresponded(conversationId, canal);
      if (pending) {
        const categoria = clasificarTiempo(canal, pending.timestamp ?? new Date(), date ?? new Date());
        await this.messageRepo.markAsResponded(pending.id);
        pending.categoria = categoria; // opcional si querés usarlo
      }
    }

    return this.messageRepo.insert({
      conversation_id: conversationId,
      phone: from,
      message,
      timestamp: date ?? new Date(),
      whatsapp_account_id: whatsappAccountId,
      canal,
      respondido: from === 'empresa',
      categoria: null, // solo se fija en mensajes entrantes
    });
  }

  // 🔥 Marcar mensaje como respondido
  async markMessageAsResponded(messageId: string) {
    return this.messageRepo.markAsResponded(messageId);
  }

  // ✅ Traer mensajes de una conversación y recalcular categoría
  async getMessageByIdAndAccount(conversationId: string, whatsappAccountId?: string) {
    const messages = await this.messageRepo.getByConversation(conversationId, whatsappAccountId);
    const now = new Date();

    return messages.map((msg) => ({
      ...msg,
      categoria: !msg.respondido
        ? clasificarTiempo('whatsapp', msg.timestamp ?? new Date(), now)
        : 'verde',
    }));
  }

  // ✅ Conversaciones recientes de un account
  async getRecentConversationsByAccount(whatsappAccountId: string) {
    return this.conversationRepo.getRecentByAccount(whatsappAccountId);
  }

  // ✅ Todas las conversaciones recientes
  async getRecentConversations() {
    return this.conversationRepo.getAllRecent();
  }

  // ✅ Búsqueda de mensajes por account (con recalculo de categoría)
  async searchMessagesByAccount(queryText: string, whatsappAccountId?: string) {
    const messages = await this.messageRepo.searchMessagesByAccount(queryText, whatsappAccountId);
    const now = new Date();

    return messages.map((msg) => ({
      ...msg,
      categoria: !msg.respondido
        ? clasificarTiempo('whatsapp', msg.timestamp ?? new Date(), now)
        : 'verde',
    }));
  }
}

