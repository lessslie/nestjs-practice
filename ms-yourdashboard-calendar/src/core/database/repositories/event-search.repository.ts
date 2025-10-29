import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { Prisma } from '../../../../generated/prisma';
import type { EventSearchFilters, EventSearchResult } from '../../../modules/calendar/types/prisma-calendar.types';

@Injectable()
export class EventSearchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async search(
    cuentaGmailId: string,
    filters: EventSearchFilters,
    page = 1,
    limit = 10
  ): Promise<EventSearchResult> {
    const where: Prisma.events_sincronizadosWhereInput = {
      cuenta_gmail_id: cuentaGmailId,
    };

    if (filters.search_text) {
      where.OR = [
        { summary: { contains: filters.search_text, mode: 'insensitive' } },
        { location: { contains: filters.search_text, mode: 'insensitive' } },
        { description: { contains: filters.search_text, mode: 'insensitive' } },
      ];
    }

    if (filters.start_date) {
      where.start_time = { gte: filters.start_date };
    }

    if (filters.end_date) {
      where.end_time = { lte: filters.end_date };
    }

    const [events, total] = await Promise.all([
      this.prisma.events_sincronizados.findMany({
        where,
        orderBy: { start_time: 'asc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.events_sincronizados.count({ where }),
    ]);

    return { events, total };
  }
}
