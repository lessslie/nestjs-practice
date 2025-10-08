import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { ConversationsModule } from './controlador-conversaciones/conversations/conversations.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TokenScheduler } from './scheduler/token-refresh.scheduler';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WhatsappModule, ConversationsModule, ScheduleModule.forRoot(), PrismaModule],
  controllers: [AppController],
  providers: [AppService, TokenScheduler],
})
export class AppModule {}
