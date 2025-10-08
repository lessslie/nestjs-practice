import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { resetPasswordTemplate } from './templates/reset-password.template';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // App Password, no la contraseña normal
      },
    });
  }

  async sendPasswordResetEmail(
    to: string,
    resetToken: string,
  ): Promise<boolean> {
    try {
      const resetUrl = `${process.env.FRONTEND_URL}/auth/reset-password?token=${resetToken}`;

      const mailOptions = {
        from: `"YourDashboard" <${process.env.GMAIL_USER}>`,
        to,
        subject: 'Reestablece tu contraseña - YourDashboard',
        html: resetPasswordTemplate(resetUrl),
      };

      const info = await this.transporter.sendMail(mailOptions);

      this.logger.log(`Email enviado exitosamente a ${to}. MessageId: ${info.messageId}`);
      return true;
    } catch (error) {
      this.logger.error(`Error al enviar email a ${to}:`, error.message);
      return false;
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      this.logger.log('✅ Conexión SMTP verificada correctamente');
      return true;
    } catch (error) {
      this.logger.error('❌ Error en conexión SMTP:', error.message);
      return false;
    }
  }
}