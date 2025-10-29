import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { events_sincronizados } from '../../../../generated/prisma';
import type { SyncResult } from '../../../modules/calendar/types/prisma-calendar.types';

@Injectable()
export class EventSyncRepository {
  private readonly logger = new Logger(EventSyncRepository.name);

  constructor(private readonly prisma: PrismaService) { }

  // 💾 Upsert de múltiples eventos
  async upsertMany(events: events_sincronizados[]): Promise<SyncResult> {
    const start = Date.now();

    const operations = events.map(e =>
      this.prisma.events_sincronizados.upsert({
        where: {
          cuenta_gmail_id_google_event_id: {
            cuenta_gmail_id: e.cuenta_gmail_id,
            google_event_id: e.google_event_id,
          },
        },
        update: { ...e, fecha_sincronizado: new Date() },
        create: { ...e, fecha_sincronizado: new Date() },
      })
    );

    await this.prisma.$transaction(operations);

    const tiempo = Date.now() - start;

    return {
      events_nuevos: events.length, // Podés separar nuevos vs actualizados si querés
      events_actualizados: 0,
      total_procesados: events.length,
      tiempo_ms: tiempo,
    };
  }

  // 🔍 Paginación de eventos
  async findPaginated(cuentaGmailId: string, page = 1, limit = 10, futureOnly = false) {
    const where = {
      cuenta_gmail_id: cuentaGmailId,
      ...(futureOnly ? { start_time: { gte: new Date() } } : {}),
    };
    const [events, total] = await Promise.all([
      this.prisma.events_sincronizados.findMany({
        where,
        orderBy: { start_time: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.events_sincronizados.count({ where }),
    ]);
    return { events, total };
  }

  async getLastSynced(cuentaGmailId: string) {
    return this.prisma.events_sincronizados.findFirst({
      where: { cuenta_gmail_id: cuentaGmailId },
      orderBy: { fecha_sincronizado: 'desc' },
    });
  }
}

