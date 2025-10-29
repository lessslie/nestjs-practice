import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class HealthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async check() {
    const start = Date.now();
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { connected: true, query_time_ms: Date.now() - start };
    } catch {
      return { connected: false, query_time_ms: 0 };
    }
  }
}
