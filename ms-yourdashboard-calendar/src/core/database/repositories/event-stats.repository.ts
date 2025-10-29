// ms-yourdashboard-calendar/src/database/repositories/event-stats.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EventStatsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getStats(cuentaGmailId: string) {
    const [total, upcoming, past, next] = await Promise.all([
      this.prisma.events_sincronizados.count({ where: { cuenta_gmail_id: cuentaGmailId } }),
      this.prisma.events_sincronizados.count({
        where: { cuenta_gmail_id: cuentaGmailId, start_time: { gte: new Date() } },
      }),
      this.prisma.events_sincronizados.count({
        where: { cuenta_gmail_id: cuentaGmailId, start_time: { lt: new Date() } },
      }),
      this.prisma.events_sincronizados.findFirst({
        where: { cuenta_gmail_id: cuentaGmailId, start_time: { gte: new Date() } },
        orderBy: { start_time: 'asc' },
        select: { start_time: true },
      }),
    ]);

    return {
      total_events: total,
      upcoming_events: upcoming,
      past_events: past,
      next_event_date: next?.start_time,
    };
  }
}
