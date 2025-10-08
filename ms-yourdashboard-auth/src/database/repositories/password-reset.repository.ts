//ms-yourdashboard-auth/src/database/repositories/password-reset.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { password_reset_token } from '../../../generated/prisma';

@Injectable()
export class PasswordResetRepository {
  constructor(private readonly prisma: PrismaService) {}
  
  async findValidToken(token: string): Promise<password_reset_token | null> {
    return this.prisma.password_reset_token.findFirst({
      where: {
        token,
        usado: false,
        expira_en: {
          gt: new Date()
        }
      }
    });
  }

  async findByEmail(email: string): Promise<password_reset_token[]> {
    return this.prisma.password_reset_token.findMany({
      where: { email }
    });
  }

  async create(data: {
    usuario_principal_id: string;
    email: string;
    token: string;
    expira_en: Date;
  }): Promise<password_reset_token> {
    return this.prisma.password_reset_token.create({
      data: {
        ...data,
        usado: false
      }
    });
  }

  async invalidateUserTokens(usuarioId: string): Promise<void> {
    await this.prisma.password_reset_token.updateMany({
      where: {
        usuario_principal_id: usuarioId,
        usado: false
      },
      data: {
        usado: true
      }
    });
  }

  async markAsUsed(token: string): Promise<password_reset_token | null> {
    try {
      return await this.prisma.password_reset_token.update({
        where: { token },
        data: { usado: true }
      });
    } catch {
      return null;
    }
  }

  async cleanExpiredTokens(): Promise<number> {
    const result = await this.prisma.password_reset_token.deleteMany({
      where: {
        expira_en: {
          lt: new Date()
        }
      }
    });
    return result.count;
  }
}