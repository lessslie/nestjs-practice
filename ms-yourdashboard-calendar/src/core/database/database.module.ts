import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// 🧩 Importamos todos los repositorios creados
import { GmailAccountRepository } from './repositories/gmail-account.repository';
import { EventSyncRepository } from './repositories/event-sync.repository';
import { EventSearchRepository } from './repositories/event-search.repository';
import { EventStatsRepository } from './repositories/event-stats.repository';
import { UserGmailAccountsRepository } from './repositories/user-gmail-accounts.repository';
import { HealthRepository } from './repositories/health.repository';
import { TokenRepository } from './repositories/token.repository';

@Global()
@Module({
  providers: [
    PrismaService,

    // Repositorios principales
    GmailAccountRepository,
    EventSyncRepository,
    EventSearchRepository,
    EventStatsRepository,
    UserGmailAccountsRepository,
    HealthRepository,
    TokenRepository,
  ],
  exports: [
    PrismaService,

    // Exportamos los mismos repositorios para inyectarlos en otros módulos
    GmailAccountRepository,
    EventSyncRepository,
    EventSearchRepository,
    EventStatsRepository,
    UserGmailAccountsRepository,
    HealthRepository,
    TokenRepository,
  ],
})
export class DatabaseModule {}
