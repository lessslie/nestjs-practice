// ms-yourdashboard-auth/src/auth/auth.service.ts
import { Injectable, ConflictException, UnauthorizedException, NotFoundException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import {
  UsuarioPrincipal,
  RespuestaLogin,
  RespuestaRegistro,
  RespuestaPerfil,
  RespuestaConexionGmail,
  GoogleOAuthUser,
  JwtPayload,
  CodigosErrorAuth,
} from './interfaces/auth.interfaces';
import axios from 'axios';
import { UserRepository } from '../database/repositories/user.repository';
import { SessionRepository } from '../database/repositories/session.repository';
import { GmailAccountRepository } from '../database/repositories/gmail-account.repository';

/**
 * 🔐 AuthService
 * 
 * Servicio principal de autenticación y gestión de usuarios.
 * 
 * ✅ TOTALMENTE MIGRADO - Ya NO usa DatabaseService
 * Usa SOLO repositories directamente
 */
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly gmailAccountRepository: GmailAccountRepository,
    private readonly configService: ConfigService
  ) {}

  // ================================
  // 🔐 REGISTRO DE USUARIO PRINCIPAL
  // ================================

  async registrarUsuario(email: string, password: string, nombre: string): Promise<RespuestaRegistro> {
    try {
      this.logger.log(`🔵 Registrando usuario: ${email}`);

      // 1️⃣ Verificar si el email ya existe
      const usuarioExistente = await this.userRepository.findByEmail(email);
      if (usuarioExistente) {
        this.logger.warn(`🚫 Email ya registrado: ${email}`);
        throw new ConflictException({
          codigo: CodigosErrorAuth.EMAIL_YA_EXISTE,
          mensaje: 'El email ya está registrado'
        });
      }

      // 2️⃣ Hashear password
      const saltRounds = parseInt(this.configService.get<string>('BCRYPT_ROUNDS') || '10');
      const passwordHash = await bcrypt.hash(password, saltRounds);

      // 3️⃣ Crear usuario principal en BD
      const nuevoUsuario = await this.userRepository.create({
        email,
        nombre,
        password_hash: passwordHash
      });

      // 4️⃣ Generar JWT
      const token = this.generarJWT(nuevoUsuario as UsuarioPrincipal);

      // 5️⃣ Crear sesión JWT
      // ✅ FIX ERROR 1: Ya no se necesita calcular expira_en, el repository lo hace
      const sesion = await this.sessionRepository.create({
        usuario_principal_id: nuevoUsuario.id,
        jwt_token: token,
        duracion_horas: 24
      });

      this.logger.log(`✅ Usuario registrado exitosamente: ${nuevoUsuario.email}`);

      return {
        success: true,
        message: 'Usuario registrado exitosamente',
        usuario: {
          id: nuevoUsuario.id,
          email: nuevoUsuario.email,
          nombre: nuevoUsuario.nombre,
          fecha_registro: nuevoUsuario.fecha_registro ?? new Date(),
          estado: nuevoUsuario.estado ?? 'activo',
          email_verificado: nuevoUsuario.email_verificado ?? false
        },
        token,
        sesion_id: sesion.id
      };

    } catch (error) {
      this.logger.error(`❌ Error registrando usuario:`, error);
      
      if (error instanceof ConflictException) {
        throw error;
      }
      
      throw new ConflictException({
        codigo: CodigosErrorAuth.EMAIL_YA_EXISTE,
        mensaje: 'Error interno al registrar usuario'
      });
    }
  }

  // ================================
  // 🔑 LOGIN DE USUARIO PRINCIPAL
  // ================================

  async loginUsuario(email: string, password: string): Promise<RespuestaLogin> {
    try {
      this.logger.log(`🔵 Intento de login: ${email}`);

      // 1️⃣ Buscar usuario por email
      const usuario = await this.userRepository.findByEmail(email);
      if (!usuario) {
        this.logger.warn(`🚫 Usuario no encontrado: ${email}`);
        throw new UnauthorizedException({
          codigo: CodigosErrorAuth.CREDENCIALES_INVALIDAS,
          mensaje: 'Credenciales inválidas'
        });
      }

      // 2️⃣ Verificar estado del usuario
      if (usuario.estado !== 'activo') {
        this.logger.warn(`🚫 Usuario inactivo: ${email} - Estado: ${usuario.estado}`);
        throw new UnauthorizedException({
          codigo: CodigosErrorAuth.USUARIO_NO_ENCONTRADO,
          mensaje: 'Usuario inactivo'
        });
      }

      // 3️⃣ Verificar password
      if (!usuario.password_hash) {
        this.logger.warn(`🚫 Usuario sin password hash: ${email}`);
        throw new UnauthorizedException({
          codigo: CodigosErrorAuth.CREDENCIALES_INVALIDAS,
          mensaje: 'Credenciales inválidas'
        });
      }

      const passwordValido = await bcrypt.compare(password, usuario.password_hash);
      if (!passwordValido) {
        this.logger.warn(`🚫 Password inválido para: ${email}`);
        throw new UnauthorizedException({
          codigo: CodigosErrorAuth.CREDENCIALES_INVALIDAS,
          mensaje: 'Credenciales inválidas'
        });
      }

      // 4️⃣ Generar JWT
      const token = this.generarJWT(usuario as UsuarioPrincipal);

      // 5️⃣ Crear nueva sesión
      // ✅ FIX ERROR 2: Ya no se necesita calcular expira_en, el repository lo hace
      const sesion = await this.sessionRepository.create({
        usuario_principal_id: usuario.id,
        jwt_token: token,
        duracion_horas: 24
      });

      // 6️⃣ Actualizar última actividad
      await this.userRepository.updateLastActivity(usuario.id);

      this.logger.log(`✅ Login exitoso: ${usuario.email}`);

      // 7️⃣ OBTENER PERFIL COMPLETO PARA RETORNARLO
      this.logger.log(`🔵 Obteniendo perfil completo para usuario ${usuario.id}`);
      const perfilCompleto = await this.obtenerPerfil(usuario.id);
      this.logger.log(`✅ Perfil obtenido para usuario ${usuario.id}`);

      // 8️⃣ RETORNAR RESPUESTA DE LOGIN
      return {
        success: true,
        message: 'Login exitoso',
        usuario: {
          id: usuario.id,
          email: usuario.email,
          nombre: usuario.nombre,
          fecha_registro: usuario.fecha_registro ?? new Date(),
          estado: usuario.estado,
          email_verificado: usuario.email_verificado ?? false
        },
        token,
        sesion_id: sesion.id,
        // 🆕 DATOS COMPLETOS DEL PERFIL (igual que /auth/me)
        cuentas_gmail: perfilCompleto.cuentas_gmail.map(cuenta => ({
          ...cuenta,
          alias_personalizado: cuenta.alias_personalizado || null,
          ultima_sincronizacion: typeof cuenta.ultima_sincronizacion === 'undefined' ? null : cuenta.ultima_sincronizacion
        })),
        sesiones_activas: perfilCompleto.sesiones_activas.map(sesion => ({
          ...sesion,
          id: sesion.id,
          ip_origen: typeof sesion.ip_origen === 'undefined' ? null : sesion.ip_origen,
          user_agent: typeof sesion.user_agent === 'undefined' ? null : sesion.user_agent
        })),
        estadisticas: perfilCompleto.estadisticas
      };

    } catch (error) {
      this.logger.error(`❌ Error en login:`, error);
      
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      
      throw new UnauthorizedException({
        codigo: CodigosErrorAuth.CREDENCIALES_INVALIDAS,
        mensaje: 'Error interno en autenticación'
      });
    }
  }

  // ================================
  // 👤 OBTENER PERFIL COMPLETO
  // ================================

  async obtenerPerfil(usuarioId: string): Promise<RespuestaPerfil> {
    try {
      this.logger.log(`🔵 Obteniendo perfil para usuario ${usuarioId}`);

      // 1️⃣ Obtener datos del usuario principal
      const usuario = await this.userRepository.findById(usuarioId);
      if (!usuario) {
        throw new NotFoundException({
          codigo: CodigosErrorAuth.USUARIO_NO_ENCONTRADO,
          mensaje: 'Usuario no encontrado'
        });
      }

      // 2️⃣ Obtener cuentas Gmail asociadas
      const cuentasGmail = await this.gmailAccountRepository.findByUserId(usuarioId);

      // 3️⃣ Obtener estadísticas del usuario
      const cuentasGmailCount = await this.gmailAccountRepository.countActiveAccounts(usuarioId);
      const sesionesActivasCount = await this.sessionRepository.countActiveSessions(usuarioId);

      // 4️⃣ Obtener estadísticas de eventos (por ahora hardcoded)
      const eventStats = this.obtenerEstadisticasEventos(usuarioId);

      // 5️⃣ Obtener sesiones activas
      const sesionesActivas = await this.sessionRepository.findActiveByUserId(usuarioId);

      this.logger.log(`✅ Perfil obtenido para usuario ${usuarioId}`);

      return {
        success: true,
        usuario: {
          id: usuario.id,
          email: usuario.email,
          nombre: usuario.nombre,
          fecha_registro: usuario.fecha_registro ?? new Date(),
          estado: usuario.estado ?? 'activo',
          email_verificado: usuario.email_verificado ?? false
        },
        cuentas_gmail: cuentasGmail.map(cuenta => ({
          ...cuenta,
          alias_personalizado: cuenta.alias_personalizado || undefined,
          fecha_conexion: cuenta.fecha_conexion || new Date(),
          ultima_sincronizacion: cuenta.ultima_sincronizacion || undefined,
          esta_activa: cuenta.esta_activa ?? true,
          emails_count: 0,  // TODO: Implementar cuando tengamos EmailRepository
          events_count: 0   // TODO: Implementar cuando tengamos EventRepository
        })),
        sesiones_activas: sesionesActivas.map(sesion => ({
          id: sesion.id,
          fecha_creacion: sesion.fecha_creacion || new Date(),
          expira_en: sesion.expira_en,
          ip_origen: sesion.ip_origen || undefined,
          user_agent: sesion.user_agent || undefined,
          esta_activa: sesion.esta_activa ?? true
        })),
        estadisticas: {
        total_cuentas_gmail: cuentasGmailCount,      
  cuentas_gmail_activas: cuentasGmailCount,      
  sesiones_activas: sesionesActivasCount,
  total_emails_sincronizados: 0,
  emails_no_leidos: 0,                           
  total_eventos_sincronizados: eventStats.total_eventos_sincronizados,
  eventos_proximos: eventStats.eventos_proximos,
  eventos_pasados: eventStats.eventos_pasados,
  ultima_sincronizacion: null,
  cuenta_mas_activa: { email_gmail: '', emails_count: 0 }   
        }
      };

    } catch (error) {
      this.logger.error(`❌ Error obteniendo perfil:`, error);
      
      if (error instanceof NotFoundException) {
        throw error;
      }
      
      throw new NotFoundException({
        codigo: CodigosErrorAuth.USUARIO_NO_ENCONTRADO,
        mensaje: 'Error obteniendo perfil de usuario'
      });
    }
  }

  /**
   * 🔧 Obtener cuenta Gmail específica por ID
   */
  async obtenerCuentaGmailPorId(usuarioId: string, cuentaId: string) {
    const cuenta = await this.gmailAccountRepository.findById(cuentaId);
    
    // Verificar que la cuenta pertenezca al usuario
    if (!cuenta || cuenta.usuario_principal_id !== usuarioId) {
      throw new NotFoundException({
        codigo: CodigosErrorAuth.CUENTA_GMAIL_NO_ENCONTRADA,
        mensaje: 'Cuenta Gmail no encontrada'
      });
    }
    
    // Convertir Date → string para el DTO
    return {
      id: cuenta.id,
      email_gmail: cuenta.email_gmail,
      nombre_cuenta: cuenta.nombre_cuenta,
      alias_personalizado: cuenta.alias_personalizado || undefined,
      fecha_conexion: cuenta.fecha_conexion?.toISOString() || new Date().toISOString(),
      ultima_sincronizacion: cuenta.ultima_sincronizacion?.toISOString(),
      esta_activa: cuenta.esta_activa ?? true,
      emails_count: 0 // El orchestrator lo llenará con el count real
    };
  }

  /**
   * 🔧 ACTUALIZAR ALIAS DE CUENTA GMAIL
   */
  async actualizarAliasCuentaGmail(
    usuarioId: string,
    cuentaId: string,
    nuevoAlias: string
  ): Promise<{
    success: boolean;
    message: string;
    cuenta_actualizada: {
      id: string;
      email_gmail: string;
      nombre_cuenta: string;
      alias_personalizado: string;
    };
  }> {
    try {
      this.logger.log(`🔄 Actualizando alias cuenta ${cuentaId} para usuario ${usuarioId}`);

      // 1️⃣ Verificar que la cuenta existe y pertenece al usuario
      const cuentaExistente = await this.gmailAccountRepository.findById(cuentaId);
      if (!cuentaExistente || cuentaExistente.usuario_principal_id !== usuarioId) {
        throw new NotFoundException({
          codigo: CodigosErrorAuth.CUENTA_GMAIL_NO_ENCONTRADA,
          mensaje: 'Cuenta Gmail no encontrada'
        });
      }

      // 2️⃣ Actualizar el alias en la base de datos
      const cuentaActualizada = await this.gmailAccountRepository.updateAlias(
        cuentaId,
        nuevoAlias.trim()
      );

      this.logger.log(`✅ Alias actualizado exitosamente: ${cuentaId} -> "${nuevoAlias}"`);

      return {
        success: true,
        message: 'Alias actualizado exitosamente',
        cuenta_actualizada: {
          id: cuentaActualizada.id,
          email_gmail: cuentaActualizada.email_gmail,
          nombre_cuenta: cuentaActualizada.nombre_cuenta,
          alias_personalizado: cuentaActualizada.alias_personalizado || nuevoAlias
        }
      };

    } catch (error) {
      this.logger.error(`❌ Error actualizando alias cuenta Gmail:`, error);
      
      if (error instanceof NotFoundException) {
        throw error;
      }
      
      throw new NotFoundException({
        codigo: CodigosErrorAuth.CUENTA_GMAIL_NO_ENCONTRADA,
        mensaje: 'Error actualizando alias de cuenta Gmail'
      });
    }
  }

  /**
   * 🔧 GENERAR URL OAUTH CON STATE CODIFICADO (userId:service)
   */
  generarUrlOAuth(userId: string, service: 'gmail' | 'calendar' = 'gmail'): string {
    try {
      this.logger.log(`🔵 Generando URL OAuth para usuario ${userId}, servicio: ${service}`);
      
      const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
      const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
      const redirectUri = this.configService.get<string>('GOOGLE_REDIRECT_URI') || 'http://localhost:3001/auth/google/callback';
      
      // 🎯 SCOPES SEGÚN EL SERVICIO
      const scopes = this.getScopesForService(service);
      
      const params = new URLSearchParams({
        client_id: clientId || '',
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: scopes.join(' '),
        access_type: 'offline',
        prompt: 'consent',
        state: `${userId}:${service}` // 🎯 CODIFICAR USER ID + SERVICE
      });

      const authUrl = `${baseUrl}?${params.toString()}`;
      this.logger.log(`✅ URL OAuth generada para usuario ${userId}, servicio: ${service}`);
      
      return authUrl;
      
    } catch (error) {
      this.logger.error(`❌ Error generando URL OAuth:`, error);
      throw new Error('Error generando URL de autenticación Google');
    }
  }

  // ================================
  // 🔐 MANEJAR CALLBACK DE GOOGLE OAUTH
  // ================================

  async manejarCallbackGoogle(googleUser: GoogleOAuthUser, usuarioActualId: string): Promise<RespuestaConexionGmail> {
    try {
      this.logger.log(`🔵 Procesando callback Google para: ${googleUser.email}`);
      this.logger.log(`🎯 Usuario principal ID: ${usuarioActualId}`);

      // ✅ VERIFICAR QUE TENEMOS EL USER ID
      if (!usuarioActualId) {
        throw new UnauthorizedException({
          codigo: CodigosErrorAuth.PERMISOS_INSUFICIENTES,
          mensaje: 'Usuario debe estar autenticado para conectar cuenta Gmail'
        });
      }

      // Verificar que el usuario principal existe
      const usuarioPrincipal = await this.userRepository.findById(usuarioActualId);
      if (!usuarioPrincipal) {
        throw new NotFoundException({
          codigo: CodigosErrorAuth.USUARIO_NO_ENCONTRADO,
          mensaje: 'Usuario principal no encontrado'
        });
      }

      // ✅ CONECTAR CUENTA GMAIL AL USUARIO PRINCIPAL
      const cuentaGmail = await this.gmailAccountRepository.create({
        usuario_principal_id: usuarioActualId,
        google_id: googleUser.googleId,
        email_gmail: googleUser.email,
        nombre_cuenta: googleUser.name || googleUser.email,
        access_token: googleUser.accessToken,
        refresh_token: googleUser.refreshToken || '',
        token_expira_en: new Date(Date.now() + 3600 * 1000),
        scopes: []
      });

      // 🎯 SINCRONIZACIÓN INICIAL DE EMAILS
      let emailsSincronizados = 0;
      try {
        this.logger.log(`📄 Iniciando sincronización automática para cuenta ${cuentaGmail.id}`);
        
        const syncResponse = await axios.post(
          'http://localhost:3002/emails/sync',
          null,
          {
            params: {
              cuentaGmailId: cuentaGmail.id,
              maxEmails: 100
            },
            headers: {
              'Authorization': `Bearer ${googleUser.accessToken}`
            },
            timeout: 30000
          }
        );

        emailsSincronizados = syncResponse.data?.stats?.emails_nuevos || 0;
        this.logger.log(`✅ Sincronización inicial completada: ${emailsSincronizados} emails`);
        
      } catch (syncError: any) {
        this.logger.warn(`⚠️ Sync inicial falló (continuando sin sync): ${syncError.message}`);
        if (syncError.code === 'ECONNABORTED') {
          this.logger.warn('⏱️ Timeout en sincronización inicial - el usuario puede sincronizar manualmente');
        }
      }

      this.logger.log(`✅ Cuenta Gmail conectada: ${googleUser.email} para usuario ${usuarioActualId}`);

      return {
        success: true,
        message: 'Cuenta Gmail conectada exitosamente',
        cuenta_gmail: {
          id: cuentaGmail.id,
          email_gmail: cuentaGmail.email_gmail,
          nombre_cuenta: cuentaGmail.nombre_cuenta,
          alias_personalizado: cuentaGmail.alias_personalizado || undefined,
          fecha_conexion: cuentaGmail.fecha_conexion || new Date(),
          ultima_sincronizacion: cuentaGmail.ultima_sincronizacion || undefined,
          esta_activa: cuentaGmail.esta_activa ?? true,
          emails_count: emailsSincronizados
        },
        emails_sincronizados: emailsSincronizados
      };

    } catch (error) {
      this.logger.error(`❌ Error en callback Google:`, error);
      
      // 🎯 MANEJAR ERROR ESPECÍFICO DE GMAIL YA CONECTADA
      if (error instanceof Error && error.message.includes('GMAIL_YA_CONECTADA')) {
        const regex = /La cuenta (.+) ya está conectada/;
        const emailMatch = regex.exec(error.message);
        const email = emailMatch ? emailMatch[1] : 'de Gmail';
        
        throw new UnauthorizedException({
          codigo: CodigosErrorAuth.CUENTA_GMAIL_YA_CONECTADA,
          mensaje: `La cuenta ${email} ya está conectada a otro usuario. Cada cuenta de Gmail solo puede estar asociada a un usuario.`
        });
      }
      
      if (error instanceof UnauthorizedException || error instanceof NotFoundException) {
        throw error;
      }
      
      throw new UnauthorizedException({
        codigo: CodigosErrorAuth.GOOGLE_OAUTH_ERROR,
        mensaje: 'Error conectando cuenta de Google'
      });
    }
  }

  // ================================
  // 🚪 LOGOUT
  // ================================

  async logout(token: string) {
    await this.sessionRepository.invalidate(token);
    return {
      success: true,
      mensaje: 'Sesión cerrada exitosamente',
      sesion_cerrada_id: token
    };
  }

  // ================================
  // 🔧 DESCONECTAR CUENTA GMAIL
  // ================================

  async desconectarCuentaGmail(usuarioId: string, cuentaId: string) {
    // PRIMERO obtener datos de la cuenta
    const cuenta = await this.gmailAccountRepository.findById(cuentaId);

    // Verificar si la cuenta existe y pertenece al usuario
    if (!cuenta || cuenta.usuario_principal_id !== usuarioId) {
      throw new NotFoundException({
        codigo: CodigosErrorAuth.USUARIO_NO_ENCONTRADO,
        mensaje: 'Cuenta Gmail no encontrada'
      });
    }
    
    // DESPUÉS desconectarla
    await this.gmailAccountRepository.deactivate(cuentaId);
    
    return {
      success: true,
      cuenta_desconectada: {
        id: cuenta.id,
        email_gmail: cuenta.email_gmail
      }
    };
  }

  /**
   * 🗑️ ELIMINAR USUARIO PRINCIPAL COMPLETAMENTE
   */
  async deleteUser(userId: string) {
    try {
      this.logger.log(`🗑️ INICIANDO ELIMINACIÓN COMPLETA del usuario ${userId}`);
      
      // 1. Verificar que el usuario existe y obtener datos
      const userData = await this.userRepository.findById(userId);
      
      if (!userData) {
        throw new NotFoundException({
          codigo: CodigosErrorAuth.USUARIO_NO_ENCONTRADO,
          mensaje: 'Usuario no encontrado'
        });
      }

      this.logger.log(`👤 Usuario encontrado: ${userData.email} (${userData.nombre})`);

      // 2. Obtener las cuentas Gmail para logging y estadísticas
      const cuentasGmail = await this.gmailAccountRepository.findByUserId(userId);
      this.logger.log(`📧 Cuentas Gmail a eliminar: ${cuentasGmail.map(c => c.email_gmail).join(', ')}`);

      // 3. Estadísticas simplificadas para el response
      const statsAntes = {
        cuentas_gmail: cuentasGmail.length,
        emails_sincronizados: 0,  // TODO: Implementar cuando tengamos EmailRepository
        eventos_sincronizados: 0, // TODO: Implementar cuando tengamos EventRepository
        sesiones_activas: 0
      };

      this.logger.log(`📊 Data a eliminar: ${statsAntes.cuentas_gmail} cuentas Gmail`);

      // 4. ELIMINAR USUARIO PRINCIPAL (cascada automática gracias a ON DELETE CASCADE en PostgreSQL)
      await this.userRepository.deactivate(userId);
      
      this.logger.log(`✅ USUARIO ELIMINADO COMPLETAMENTE: ${userData.email}`);
      this.logger.log(`🧹 Eliminación en cascada exitosa para todas las tablas relacionadas`);

      return {
        success: true,
        message: 'Usuario principal eliminado completamente',
        usuario_eliminado: {
          id: userId,
          email: userData.email,
          nombre: userData.nombre,
          fecha_registro: userData.fecha_registro,
        },
        data_eliminada: {
          cuentas_gmail: statsAntes.cuentas_gmail,
          emails_sincronizados: statsAntes.emails_sincronizados,
          eventos_sincronizados: statsAntes.eventos_sincronizados,
          sesiones_activas: statsAntes.sesiones_activas,
          cuentas_gmail_eliminadas: cuentasGmail.map(c => ({
            id: c.id,
            email_gmail: c.email_gmail
          }))
        },
        eliminado_en: new Date().toISOString()
      };

    } catch (error) {
      this.logger.error('❌ Error eliminando usuario:', error);
      throw error;
    }
  }

  // ================================
  // 🔧 LISTAR CUENTAS GMAIL DE USUARIO
  // ================================

  async listarCuentasGmailUsuario(usuarioId: string): Promise<Array<{
    id: string;
    email_gmail: string;
    nombre_cuenta: string;
    alias_personalizado?: string;
    fecha_conexion: string;
    esta_activa: boolean;
    emails_count: number;
  }>> {
    const cuentas = await this.gmailAccountRepository.findByUserId(usuarioId);
    
    // 🔧 CONVERTIR Date → string y manejar nulls
    return cuentas.map(cuenta => ({
      ...cuenta,
      alias_personalizado: cuenta.alias_personalizado || undefined,
      fecha_conexion: cuenta.fecha_conexion?.toISOString() || new Date().toISOString(),
      ultima_sincronizacion: cuenta.ultima_sincronizacion?.toISOString(),
      esta_activa: cuenta.esta_activa ?? true,
      emails_count: 0  // TODO: Implementar cuando tengamos EmailRepository
    }));
  }

  // ================================
  // 🔧 MÉTODOS AUXILIARES PRIVADOS
  // ================================

  private generarJWT(usuario: UsuarioPrincipal): string {
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_EXPIRATION') || '24h';

    if (!secret) {
      this.logger.error('❌ JWT_SECRET no configurado');
      throw new Error('JWT_SECRET no está configurado en las variables de entorno');
    }

    const payload: JwtPayload = {
      sub: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
    } as JwtPayload;

    return sign(payload, secret, { expiresIn });
  }

  private getScopesForService(service: 'gmail' | 'calendar'): string[] {
    this.logger.log(`🔍 Obteniendo scopes para servicio: ${service}`);
    
    // ✅ TODOS LOS SERVICIOS = TODOS LOS SCOPES
    const allScopes = [
      'email',
      'profile',
      'https://www.googleapis.com/auth/gmail.readonly',
      'https://www.googleapis.com/auth/gmail.modify',
      'https://www.googleapis.com/auth/gmail.send',
      'https://mail.google.com/',
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
      'https://www.googleapis.com/auth/calendar.events.readonly',
      'https://www.googleapis.com/auth/calendar.acls'
    ];

    return allScopes;
  }

  private obtenerEstadisticasEventos(usuarioId: string): {
    total_eventos_sincronizados: number;
    eventos_proximos: number;
    eventos_pasados: number;
  } {
    try {
      this.logger.log(`📊 Obteniendo estadísticas de eventos para usuario ${usuarioId}`);

      // Por ahora retornamos valores por defecto
      // TODO: Implementar cuando tengamos EventRepository
      return {
        total_eventos_sincronizados: 0,
        eventos_proximos: 0,
        eventos_pasados: 0
      };

    } catch (error) {
      this.logger.error(`❌ Error obteniendo estadísticas de eventos:`, error);
      return {
        total_eventos_sincronizados: 0,
        eventos_proximos: 0,
        eventos_pasados: 0
      };
    }
  }

  // ================================
  // 🔧 HEALTH CHECK
  // ================================

  async healthCheck() {
    try {
      // Verificar que podemos conectarnos a los repositories
      const usuariosCount = 0; // TODO: Implementar count en UserRepository
      const cuentasGmailCount = 0; // TODO: Implementar en GmailAccountRepository

      return {
        service: 'ms-yourdashboard-auth',
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: {
          connected: true,
          status: 'ok',
          timestamp: new Date(),
          query_time_ms: 0
        },
        estadisticas: {
          usuarios_activos: usuariosCount,
          cuentas_gmail_conectadas: cuentasGmailCount,
          sesiones_activas: 0
        }
      };

    } catch (error) {
      this.logger.error('❌ Error en health check:', error);
      return {
        service: 'ms-yourdashboard-auth',
        status: 'ERROR',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: { connected: false, query_time_ms: 0 },
        estadisticas: {
          usuarios_activos: 0,
          cuentas_gmail_conectadas: 0,
          sesiones_activas: 0
        }
      };
    }
  }

  async obtenerEstadisticasServicio(): Promise<any> {
    // TODO: Implementar estadísticas usando repositories
    return {
      total_usuarios: 0,
      usuarios_activos: 0,
      cuentas_gmail_totales: 0,
      sesiones_activas_totales: 0
    };
  }

  /**
   * 🔍 BUSCAR USUARIO POR ID
   */
  async buscarUsuarioPorId(usuarioId: string): Promise<UsuarioPrincipal | null> {
    try {
      this.logger.log(`🔍 Buscando usuario por ID: ${usuarioId}`);

      const usuario = await this.userRepository.findById(usuarioId);
      
      if (usuario) {
        this.logger.log(`✅ Usuario encontrado: ${usuario.email}`);
      } else {
        this.logger.warn(`⚠️ Usuario no encontrado: ${usuarioId}`);
      }

      return usuario as UsuarioPrincipal;

    } catch (error) {
      this.logger.error(`❌ Error buscando usuario por ID ${usuarioId}:`, error);
      return null;
    }
  }
}