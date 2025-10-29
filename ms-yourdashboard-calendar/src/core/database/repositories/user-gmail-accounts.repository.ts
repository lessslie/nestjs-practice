import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserGmailAccountsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUser(usuarioId: string) {
    const cuentas = await this.prisma.cuentas_gmail_asociadas.findMany({
      where: { usuario_principal_id: usuarioId, esta_activa: true },
      orderBy: { fecha_conexion: 'desc' },
      include: {
        _count: {
          select: { events_sincronizados: true },
        },
      },
    });

    return cuentas.map(c => ({
      ...c,
      events_count: c._count.events_sincronizados,
    }));
  }
}
