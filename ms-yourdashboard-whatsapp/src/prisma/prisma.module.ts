import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <- hace que esté disponible en toda la app sin importar imports
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
