// ms-yourdashboard-email/src/database/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma';

/**
 * 🎯 PrismaService
 * 
 * Servicio base que extiende PrismaClient y maneja el ciclo de vida
 * de la conexión a la base de datos.
 * 
 * ✅ Cumple especificación del jefe:
 * - Prisma como query client tipado (NO como ORM)
 * - Conexión única por microservicio
 * - Manejo automático de conexión/desconexión
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['error', 'warn'], // Solo errores y warnings en prod
    });
  }

  /**
   * Conectar a la base de datos cuando el módulo se inicializa
   */
  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Prisma conectado a la base de datos');
    } catch (error) {
      this.logger.error('❌ Error conectando Prisma:', error);
      throw error;
    }
  }

  /**
   * Desconectar cuando el módulo se destruye (shutdown graceful)
   */
  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('🔌 Prisma desconectado');
  }
}