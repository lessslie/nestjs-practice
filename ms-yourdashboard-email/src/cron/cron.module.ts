import { Module, forwardRef } from '@nestjs/common'; 
import { ScheduleModule } from '@nestjs/schedule';
import { SyncCronService } from './sync-cron.service';
import { EmailsModule } from '../emails/emails.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    forwardRef(() => EmailsModule), 
    DatabaseModule,
  ],
  providers: [SyncCronService],
  exports: [SyncCronService],
})
export class CronModule {}