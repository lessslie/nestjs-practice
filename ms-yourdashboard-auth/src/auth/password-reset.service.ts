//ms-yourdashboard-auth/src/auth/password-reset.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UserRepository } from '../database/repositories/user.repository';
import { PasswordResetRepository } from '../database/repositories/password-reset.repository';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PasswordResetService {
  private readonly logger = new Logger(PasswordResetService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordResetRepository: PasswordResetRepository,
    private readonly emailService: EmailService,
  ) {}

  async requestPasswordReset(email: string): Promise<boolean> {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        this.logger.warn(`Intento de reset para email inexistente: ${email}`);
        return true;
      }

      await this.passwordResetRepository.invalidateUserTokens(user.id);

      const token = randomUUID();
      const expiraEn = new Date(Date.now() + 15 * 60 * 1000);

      // CONSOLE.LOG PARA VER TOKEN DE RESSER PARA TEST EMAILS FALSOS:
         console.log('🔑 TOKEN DE RESET GENERADO:', token);

      await this.passwordResetRepository.create({
        usuario_principal_id: user.id,
        email: user.email,
        token,
        expira_en: expiraEn,
      });

      const emailSent = await this.emailService.sendPasswordResetEmail(
        user.email,
        token,
      );

      if (!emailSent) {
        this.logger.error(`Error al enviar email a ${user.email}`);
      } else {
        this.logger.log(`Email de recuperación enviado a ${user.email}`);
      }

      return true;
    } catch (error: any) {
      this.logger.error('Error en requestPasswordReset:', error.message);
      return true;
    }
  }

  async validateResetToken(token: string): Promise<boolean> {
    try {
      const resetToken = await this.passwordResetRepository.findValidToken(token);
      return resetToken !== null;
    } catch (error: any) {
      this.logger.error('Error en validateResetToken:', error.message);
      return false;
    }
  }

  async resetPassword(
    token: string,
    newPassword: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const resetToken = await this.passwordResetRepository.findValidToken(token);

      if (!resetToken) {
        return {
          success: false,
          message: 'Token inválido o expirado',
        };
      }

      const passwordHash = await bcrypt.hash(newPassword, 10);

      await this.userRepository.updatePassword(
        resetToken.usuario_principal_id,
        passwordHash
      );

      await this.passwordResetRepository.markAsUsed(token);

      this.logger.log(`Contraseña reseteada para usuario ${resetToken.usuario_principal_id}`);

      return {
        success: true,
        message: 'Contraseña actualizada exitosamente',
      };

    } catch (error: any) {
      this.logger.error('Error reseteando contraseña:', error.message);
      return {
        success: false,
        message: 'Error al resetear la contraseña',
      };
    }
  }
}