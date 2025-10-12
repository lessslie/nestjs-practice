import { Module } from '@nestjs/common';
import { WebhookController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';
import { ConversationsModule } from 'src/controlador-conversaciones/conversations/conversations.module';
import { MessagesGateway } from 'src/messages/messages.gateway';
import { WhatsappAccountsService } from './whatsapp-accounts.service';
import { RepositoriesModule } from '../../repositories/repositories.module';

@Module({
  imports: [ConversationsModule, RepositoriesModule],
  controllers: [WebhookController],
  providers: [WhatsappService, MessagesGateway, WhatsappAccountsService],
  exports: [WhatsappAccountsService],
})
export class WhatsappModule {}
