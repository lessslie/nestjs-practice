import { forwardRef, Module } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import { ConfigModule } from '@nestjs/config';
import { SyncService } from './sync.service';
import { CronModule } from 'src/cron/cron.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [ConfigModule,DatabaseModule,
    forwardRef(() => CronModule)
  ],
  controllers: [EmailsController],
  providers: [EmailsService,SyncService],
  exports: [EmailsService, SyncService],
})
export class EmailsModule {}

