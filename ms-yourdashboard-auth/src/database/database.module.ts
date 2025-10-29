// ms-yourdashboard-auth/src/database/database.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { SessionRepository } from './repositories/session.repository';
import { GmailAccountRepository } from './repositories/gmail-account.repository';
import { EventStatsRepository } from './repositories/event-stats.repository';
import { EmailStatsRepository } from './repositories/email-stats.repository';
import { PasswordResetRepository } from './repositories/password-reset.repository';


@Module({
  providers: [
    PrismaService,
    UserRepository,
    SessionRepository,
    GmailAccountRepository,
    EventStatsRepository,
    EmailStatsRepository,
    PasswordResetRepository
  ],
  exports: [
    PrismaService,
    UserRepository,
    SessionRepository,
    GmailAccountRepository,
    EventStatsRepository,
    EmailStatsRepository,
    PasswordResetRepository
  ],
})
export class DatabaseModule {}