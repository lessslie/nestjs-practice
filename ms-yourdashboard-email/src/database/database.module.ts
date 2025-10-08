// ms-yourdashboard-email/src/database/database.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DatabaseService } from './database.service'; // ⚠️ Importar temporalmente
import { EmailMetadataRepository } from './repositories/email-metadata.repository';
import { EmailCompleteRepository } from './repositories/email-complete.repository';
import { GmailAccountRepository } from './repositories/gmail-account.repository';

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
    DatabaseService,  // ⚠️ Temporal - mantener durante migración
    EmailMetadataRepository,
    EmailCompleteRepository,
    GmailAccountRepository
  ],
  exports: [
    DatabaseService,  // ⚠️ Temporal - eliminar después de migración
    EmailMetadataRepository,
    EmailCompleteRepository,
    GmailAccountRepository
  ]
})
export class DatabaseModule {}