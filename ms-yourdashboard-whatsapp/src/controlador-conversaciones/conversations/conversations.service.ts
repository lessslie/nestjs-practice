import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { clasificarTiempo } from '../../utils/semaforo';

@Injectable()
export class ConversationsService {
  constructor(private prisma: PrismaService) { }

  async upsertConversation(
    phone: string,
    name: string | null,
    message: string,
    date: Date,
    whatsappAccountId: string,
  ): Promise<string> {
    const existing = await this.prisma.conversations.findFirst({
      where: { phone, whatsapp_account_id: whatsappAccountId },
    });

    if (existing) {
      await this.prisma.conversations.update({
        where: { id: existing.id },
        data: {
          last_message: message,
          last_message_date: date,
          name: name ?? existing.name,
        },
      });
      return existing.id;
    }

    const created = await this.prisma.conversations.create({
      data: {
        phone,
        name,
        last_message: message,
        last_message_date: date,
        whatsapp_account_id: whatsappAccountId,
      },
    });
    return created.id;
  }

  // 🔥 Insertar un mensaje recibido (por defecto respondido = false)
  async insertMessage(
    conversationId: string,
    from: string,
    message: string,
    date: Date,
    whatsappAccountId: string,
    canal: 'whatsapp',
  ) {
    if (from === 'empresa') {
      const pending = await this.prisma.messages.findFirst({
        where: {
          conversation_id: conversationId,
          respondido: false,
          canal,
        },
        orderBy: { timestamp: 'desc' },
      });

      if (pending && pending.timestamp) {
        const categoria = clasificarTiempo(canal, new Date(pending.timestamp), date);
        await this.prisma.messages.update({
          where: { id: pending.id },
          data: { respondido: true, categoria },
        });
      }
    }

    await this.prisma.messages.create({
      data: {
        conversation_id: conversationId,
        phone: from,
        message,
        timestamp: date,
        whatsapp_account_id: whatsappAccountId,
        canal,
        respondido: from === 'empresa',
        categoria: null,
      },
    });
  }


  // 🔥 Marcar un mensaje como respondido
  async markMessageAsResponded(messageId: string) {
    return this.prisma.messages.update({
      where: { id: messageId },
      data: { respondido: true },
    });
  }

  // ✅ Traer mensajes de una conversación y recalcular categoría en base a tiempo sin respuesta
  async getMessageByIdAndAccount(conversationId: string, whatsappAccountId?: string) {
    const messages = await this.prisma.messages.findMany({
      where: {
        conversation_id: conversationId,
        ...(whatsappAccountId ? { conversation: { whatsapp_account_id: whatsappAccountId } } : {}),
      },
      include: { conversations: true },
      orderBy: { timestamp: 'asc' },
    });

    const now = new Date();

    return messages.map((msg) => ({
      ...msg,
      categoria: msg.respondido
        ? 'verde'
        : msg.timestamp
          ? clasificarTiempo(msg.canal as 'whatsapp', new Date(msg.timestamp), now)
          : 'rojo',
    }));
  }

  // ✅ Conversaciones recientes
  async getRecentConversationsByAccount(whatsappAccountId: string) {
    return this.prisma.conversations.findMany({
      where: { whatsapp_account_id: whatsappAccountId },
      orderBy: { last_message_date: 'desc' },
      select: {
        id: true,
        name: true,
        phone: true,
        last_message: true,
        last_message_date: true,
        whatsapp_account_id: true,
      },
    });
  }

  async getRecentConversations() {
    return this.prisma.conversations.findMany({
      orderBy: [
        { whatsapp_account_id: 'asc' },
        { last_message_date: 'desc' },
      ],
      select: {
        id: true,
        name: true,
        phone: true,
        last_message: true,
        last_message_date: true,
        whatsapp_account_id: true,
      },
    });
  }

  // ✅ Búsqueda: incluye categoría recalculada
  async searchMessagesByAccount(queryText: string, whatsappAccountId?: string) {
    const messages = await this.prisma.messages.findMany({
      where: {
        message: { contains: queryText, mode: 'insensitive' },
        ...(whatsappAccountId ? { conversations: { whatsapp_account_id: whatsappAccountId } } : {}),
      },
      include: { conversations: true },
      orderBy: [
        { conversations: { whatsapp_account_id: 'asc' } },
        { timestamp: 'desc' },
      ],
    });

    const now = new Date();
    
    return messages.map((msg) => ({
      ...msg,
      conversation_id: msg.conversations.id,
      name: msg.conversations.name,
      phone: msg.conversations.phone,
      whatsapp_account_id: msg.conversations.whatsapp_account_id,
      categoria: msg.respondido
        ? 'verde'
        : msg.timestamp
          ? clasificarTiempo(msg.canal as 'whatsapp', new Date(msg.timestamp), now)
          : 'rojo',
    }));
  }
}

