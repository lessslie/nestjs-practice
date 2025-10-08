// import { Injectable, Logger } from '@nestjs/common';
// import { UserRepository } from './repositories/user.repository';
// import { SessionRepository } from './repositories/session.repository';
// import { GmailAccountRepository } from './repositories/gmail-account.repository';
// import { PasswordResetRepository } from './repositories/password-reset.repository';
// import type { usuarios_principales, sesiones_jwt, cuentas_gmail_asociadas } from '../../generated/prisma';

// /**
//  * ⚠️ SERVICIO TEMPORAL - EN PROCESO DE ELIMINACIÓN
//  * 
//  * Este servicio es un wrapper temporal mientras migramos
//  * todos los servicios para usar repositories directamente.
//  */
// @Injectable()
// export class DatabaseService {
//   private readonly logger = new Logger(DatabaseService.name);

//   constructor(
//     private readonly userRepository: UserRepository,
//     private readonly sessionRepository: SessionRepository,
//     private readonly gmailAccountRepository: GmailAccountRepository,
//     private readonly passwordResetRepository: PasswordResetRepository,
//   ) {
//     this.logger.warn('⚠️ DatabaseService es TEMPORAL - Migrar a repositories directamente');
//   }

//   // ================================
//   // 👤 USUARIOS
//   // ================================
  
//   async buscarUsuarioPorEmail(email: string): Promise<usuarios_principales | null> {
//     return this.userRepository.findByEmail(email);
//   }

//   async buscarUsuarioPorId(id: string): Promise<usuarios_principales | null> {
//     return this.userRepository.findById(id);
//   }

//   async obtenerUsuarioPorId(id: string): Promise<usuarios_principales | null> {
//     return this.userRepository.findById(id);
//   }

//   async crearUsuarioPrincipal(userData: {
//     email: string;
//     nombre: string;
//     password?: string; // Ignoramos este campo
//     password_hash: string;
//   }): Promise<usuarios_principales> {
//     const { password, ...dataToCreate } = userData;
//     console.log(password); // DEBUG TEMPORAL
//     console.log(dataToCreate);
//     return this.userRepository.create(dataToCreate);
//   }

//   async actualizarUltimaActividad(userId: string): Promise<void> {
//     await this.userRepository.updateLastActivity(userId);
//   }

//   async eliminarUsuarioPrincipal(userId: string): Promise<void> {
//     // Por ahora solo desactivamos
//     await this.userRepository.deactivate(userId);
//   }

//   // ================================
//   // 🔐 SESIONES
//   // ================================

//   async crearSesion(sessionData: {
//     usuario_principal_id: string;
//     jwt_token: string;
//     duracion_horas?: number;
//     ip_origen?: string;
//     user_agent?: string;
//   }): Promise<sesiones_jwt> {
//     const horasVida = sessionData.duracion_horas || 24;
//     const expiraEn = new Date(Date.now() + horasVida * 60 * 60 * 1000);
    
//     return this.sessionRepository.create({
//       usuario_principal_id: sessionData.usuario_principal_id,
//       jwt_token: sessionData.jwt_token,
//       expira_en: expiraEn,
//       ip_origen: sessionData.ip_origen,
//       user_agent: sessionData.user_agent
//     });
//   }

//   async buscarSesionPorToken(token: string): Promise<sesiones_jwt | null> {
//     return this.sessionRepository.findActiveByToken(token);
//   }

//   async validarSesion(token: string): Promise<sesiones_jwt | null> {
//     return this.sessionRepository.findActiveByToken(token);
//   }

//   async invalidarSesion(token: string): Promise<void> {
//     await this.sessionRepository.invalidate(token);
//   }

//   async buscarSesionesActivas(userId: string): Promise<sesiones_jwt[]> {
//     return this.sessionRepository.findActiveByUserId(userId);
//   }

//   // ================================
//   // 📧 GMAIL
//   // ================================

//   async buscarCuentasGmailPorUsuario(userId: string): Promise<cuentas_gmail_asociadas[]> {
//     return this.gmailAccountRepository.findByUserId(userId);
//   }

//   async obtenerCuentasGmailUsuario(userId: string): Promise<cuentas_gmail_asociadas[]> {
//     return this.gmailAccountRepository.findByUserId(userId);
//   }

//   async buscarCuentaGmailPorEmail(email: string): Promise<cuentas_gmail_asociadas | null> {
//     return this.gmailAccountRepository.findByEmail(email);
//   }

//   async obtenerCuentaGmailPorId(id: string, usuarioId?: string): Promise<cuentas_gmail_asociadas | null> {
//     const cuenta = await this.gmailAccountRepository.findById(id);
//     // Si se proporciona usuarioId, verificar que la cuenta pertenezca al usuario
//     if (cuenta && usuarioId && cuenta.usuario_principal_id !== usuarioId) {
//       return null;
//     }
//     return cuenta;
//   }

//   async crearCuentaGmail(data: {
//     usuario_principal_id: string;
//     email_gmail: string;
//     google_id: string;
//     nombre_cuenta: string;
//     access_token: string;
//     refresh_token: string;
//     token_expira_en: Date;
//     scopes: string[];
//   }): Promise<cuentas_gmail_asociadas> {
//     return this.gmailAccountRepository.create(data);
//   }

//   async conectarCuentaGmail(data: {
//     usuario_principal_id: string;
//     email_gmail: string;
//     google_id: string;
//     nombre_cuenta: string;
//     access_token: string;
//     refresh_token: string;
//     token_expira_en: Date;
//     scopes: string[];
//   }): Promise<cuentas_gmail_asociadas> {
//     return this.gmailAccountRepository.create(data);
//   }

//   async actualizarTokensGmail(
//     id: string,
//     tokens: {
//       access_token: string;
//       refresh_token?: string;
//       token_expira_en: Date;
//     }
//   ): Promise<cuentas_gmail_asociadas> {
//     return this.gmailAccountRepository.updateTokens(id, tokens);
//   }

//   async actualizarAliasCuentaGmail(
//     cuentaId: string,
//     usuarioId: string,
//     alias: string | null
//   ): Promise<cuentas_gmail_asociadas | null> {
//     // Verificar que la cuenta pertenezca al usuario
//     const cuenta = await this.obtenerCuentaGmailPorId(cuentaId, usuarioId);
//     if (!cuenta) return null;
    
//     return this.gmailAccountRepository.updateAlias(cuentaId, alias);
//   }

//   async desactivarCuentaGmail(id: string): Promise<cuentas_gmail_asociadas> {
//     return this.gmailAccountRepository.deactivate(id);
//   }

//   async desconectarCuentaGmail(cuentaId: string, usuarioId: string): Promise<void> {
//     // Verificar que la cuenta pertenezca al usuario
//     const cuenta = await this.obtenerCuentaGmailPorId(cuentaId, usuarioId);
//     if (cuenta) {
//       await this.gmailAccountRepository.deactivate(cuentaId);
//     }
//   }

//   // ================================
//   // 📊 ESTADÍSTICAS
//   // ================================

//   async obtenerEstadisticasUsuario(userId: string): Promise<any> {
//     const cuentasGmail = await this.gmailAccountRepository.countActiveAccounts(userId);
//     const sesionesActivas = await this.sessionRepository.countActiveSessions(userId);
    
//     return {
//       cuentas_gmail_conectadas: cuentasGmail,
//       sesiones_activas: sesionesActivas,
//       total_emails_sincronizados: 0, // TODO: Implementar cuando tengamos EmailRepository
//       ultimo_backup: null
//     };
//   }

//   async obtenerEstadisticasGenerales(): Promise<any> {
//     // TODO: Implementar estadísticas generales
//     return {
//       total_usuarios: 0,
//       usuarios_activos: 0,
//       cuentas_gmail_totales: 0,
//       sesiones_activas_totales: 0
//     };
//   }

//   // ================================
//   // 🔧 UTILS
//   // ================================

//   healthCheck(): Promise<{ status: string; timestamp: Date, connected: boolean }> {
//     return Promise.resolve({
//       status: 'ok',
//       timestamp: new Date(),
//       connected: true
//     });
//   }

//   // Método query para compatibilidad temporal
//   async query<T = any>(text: string, params?: any[]): Promise<{ rows: T[] }> {
//     this.logger.error('❌ query() llamado - MIGRAR A REPOSITORY');
//     return { rows: [] };
//   }
// }