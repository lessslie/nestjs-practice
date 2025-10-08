// ms-yourdashboard-email/src/database/database.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EmailMetadataRepository } from './repositories/email-metadata.repository';
import { EmailCompleteRepository } from './repositories/email-complete.repository';
import { GmailAccountRepository } from './repositories/gmail-account.repository';
import { EmailSyncRepository } from './repositories/email-sync.repository';

/**
 * 🗂️ DatabaseModule
 * 
 * Módulo central que exporta:
 * - Repositories (nuevos - usando Prisma)
 * - DatabaseService (temporal - eliminar después de migración)
 */
@Global()
@Module({
  providers: [
    PrismaService,
    EmailMetadataRepository,
    EmailCompleteRepository,
    GmailAccountRepository,
    EmailSyncRepository
  ],
  exports: [
    EmailMetadataRepository,
    EmailCompleteRepository,
    GmailAccountRepository,
    EmailSyncRepository,
    PrismaService
  ]
})
export class DatabaseModule {}