// src/auth/guards/jwt-auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';
import { JwtPayload, UsuarioAutenticado } from '../interfaces/auth.interfaces';
import { SessionRepository } from '../../database/repositories/session.repository';
import { UserRepository } from '../../database/repositories/user.repository';

/**
 * 🔐 JwtAuthGuard
 * 
 * Guard para validar JWT tokens y autenticación de usuarios.
 * 
 * ✅ MIGRADO - Ahora usa SessionRepository y UserRepository
 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly sessionRepository: SessionRepository,
    private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      
      // 1️⃣ EXTRAER TOKEN DEL HEADER
      const authHeader = request.headers.authorization;
      if (!authHeader || typeof authHeader !== 'string') {
        this.logger.warn('🚫 No authorization header found or invalid type');
        throw new UnauthorizedException('Token de autorización requerido');
      }

      const token: string = authHeader.replace('Bearer ', '');
      if (!token || token === authHeader) {
        this.logger.warn('🚫 Invalid token format - Bearer prefix missing');
        throw new UnauthorizedException('Formato de token inválido');
      }

      // 2️⃣ VERIFICAR JWT SIGNATURE
      const jwtSecret = this.configService.get<string>('JWT_SECRET');
      if (!jwtSecret) {
        this.logger.error('❌ JWT_SECRET not configured');
        throw new UnauthorizedException('Configuración de autenticación inválida');
      }

      let decoded: JwtPayload;
      try {
        const verifyResult = verify(token, jwtSecret);
        
        // Verificar que el resultado sea un objeto, no string
        if (typeof verifyResult === 'string') {
          this.logger.warn('🚫 JWT returned string instead of object');
          throw new UnauthorizedException('Token JWT inválido');
        }
        
        // Validar que tenga las propiedades requeridas de nuestro custom payload
        if (!verifyResult.sub || typeof verifyResult.sub !== 'string') {
          this.logger.warn('🚫 JWT missing valid sub property');
          throw new UnauthorizedException('Token JWT inválido - sub requerido');
        }
        
        // Verificar propiedades custom
        const customData = verifyResult as unknown as Record<string, unknown>;
        if (!customData.email || !customData.nombre) {
          this.logger.warn('🚫 JWT missing required custom properties');
          throw new UnauthorizedException('Token JWT inválido - datos incompletos');
        }
        
        // Construir nuestro JwtPayload tipado
        decoded = {
          sub: verifyResult.sub,
          email: customData.email as string,
          nombre: customData.nombre as string,
          iat: verifyResult.iat,
          exp: verifyResult.exp
        } as JwtPayload;
      } catch {
        this.logger.warn('🚫 Invalid JWT signature');
        throw new UnauthorizedException('Token JWT inválido');
      }

      // 3️⃣ VERIFICAR QUE LA SESIÓN ESTÉ ACTIVA EN BD
      // ✅ MIGRADO: Usar SessionRepository en vez de DatabaseService
      const sesion = await this.sessionRepository.findActiveByToken(token);
      if (!sesion || !sesion.esta_activa) {
        this.logger.warn(`🚫 Session not found or expired for user ${decoded.sub}`);
        throw new UnauthorizedException('Sesión inválida o expirada');
      }

      // Verificar que la sesión no esté expirada
      if (sesion.expira_en && new Date() > sesion.expira_en) {
        this.logger.warn(`🚫 Session expired for user ${decoded.sub}`);
        throw new UnauthorizedException('Sesión expirada');
      }

      // 4️⃣ VERIFICAR QUE EL USUARIO PRINCIPAL EXISTA Y ESTÉ ACTIVO
      // ✅ MIGRADO: Usar UserRepository en vez de DatabaseService
      const usuario = await this.userRepository.findById(decoded.sub);
      if (!usuario) {
        this.logger.warn(`🚫 User not found: ${decoded.sub}`);
        throw new UnauthorizedException('Usuario no encontrado');
      }

      if (usuario.estado !== 'activo') {
        this.logger.warn(`🚫 User not active: ${decoded.sub} - Status: ${usuario.estado}`);
        throw new UnauthorizedException('Usuario inactivo');
      }

      // 5️⃣ ACTUALIZAR ÚLTIMA ACTIVIDAD DEL USUARIO
      // ✅ MIGRADO: Usar UserRepository en vez de DatabaseService
      await this.userRepository.updateLastActivity(usuario.id);

      // 6️⃣ POBLAR req.user PARA USE EN ENDPOINTS
      const usuarioAutenticado: UsuarioAutenticado = {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        sesion_id: sesion.id
      };

      request.user = usuarioAutenticado;

      this.logger.debug(`✅ JWT Auth successful for user: ${usuario.email}`);
      return true;

    } catch (error) {
      // Si es una excepción conocida, re-lanzarla
      if (error instanceof UnauthorizedException) {
        throw error;
      }

      // Para errores inesperados
      this.logger.error('❌ Unexpected error in JWT auth:', error);
      throw new UnauthorizedException('Error interno de autenticación');
    }
  }
}