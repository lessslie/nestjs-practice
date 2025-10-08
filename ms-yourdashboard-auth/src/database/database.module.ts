import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { SessionRepository } from './repositories/session.repository';
import { GmailAccountRepository } from './repositories/gmail-account.repository';
import { PasswordResetRepository } from './repositories/password-reset.repository';

@Module({
  providers: [
    PrismaService,
    UserRepository,
    SessionRepository,
    GmailAccountRepository,
    PasswordResetRepository,

  ],
  exports: [
    PrismaService,
    UserRepository,
    SessionRepository,
    GmailAccountRepository,
    PasswordResetRepository,
  ]
})
export class DatabaseModule {}