import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  UseGuards,
  Req,
  Res,
  Body,
  Param,
  Query,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import {
  RegisterDto,
  LoginDto,
  AuthResponseDto,
  ProfileResponseDto,
  ErrorResponseDto,
  HealthResponseDto,
  ValidateTokenResponseDto,
  ResetPasswordDto,

} from './dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { PasswordResetService } from './password-reset.service';
import {
  ReqCallbackGoogle,
  UsuarioAutenticado,
  JwtPayload,
  GoogleOAuthUser,
  CodigosErrorAuth,
} from './interfaces/auth.interfaces';
import axios from 'axios';
import { Logger } from '@nestjs/common';


@ApiTags('Authentication')
@Controller('auth')

export class AuthController {
  
  private readonly orchestratorUrl: string;
  private readonly logger = new Logger(AuthController.name);

  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly passwordResetService: PasswordResetService,
  ) {
    this.orchestratorUrl = this.configService.get<string>('ORCHESTRATOR_URL') || 'http://localhost:3003';
  }


  @Get('health')
health() {
  return { status: 'ok', timestamp: new Date().toISOString() };
}
  // ================================
  // ENDPOINTS TRADICIONALES
  // ================================

  @Post('register')
  @ApiOperation({
    summary: 'Registrar nuevo usuario',
    description:
      'Crear una nueva cuenta con email y contraseña. Retorna JWT token para autenticación inmediata.',
  })
  @ApiBody({
    type: RegisterDto,
    description: 'Datos del nuevo usuario',
  })
  @ApiCreatedResponse({
    description: 'Usuario registrado exitosamente',
    type: AuthResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos',
    type: ErrorResponseDto,
  })
  @ApiConflictResponse({
    description: 'Email ya registrado',
    type: ErrorResponseDto,
  })
  async register(@Body() registerData: RegisterDto): Promise<AuthResponseDto> {
    const result = await this.authService.registrarUsuario(
      registerData.email,
      registerData.password,
      registerData.nombre,
    );

    return {
      success: result.success,
      message: result.message,
      user: {
        id: result.usuario.id,
        email: result.usuario.email,
        name: result.usuario.nombre,
        isEmailVerified: result.usuario.email_verificado,
        createdAt: result.usuario.fecha_registro.toISOString(),
        profilePicture: null,
      },
      token: result.token,
    };
  }

@Post('login')
@ApiOperation({
  summary: 'Iniciar sesión',
  description: 'Autenticarse con email y contraseña. Ahora retorna JWT token + perfil completo del usuario.',
})
@ApiBody({
  type: LoginDto,
  description: 'Credenciales de acceso',
})
@ApiOkResponse({
  description: 'Login exitoso con perfil completo - incluye token JWT, datos básicos del usuario, cuentas Gmail asociadas y estadísticas',
  type: AuthResponseDto,
})
@ApiBadRequestResponse({
  description: 'Credenciales faltantes',
  type: ErrorResponseDto,
})
@ApiUnauthorizedResponse({
  description: 'Credenciales incorretas',
  type: ErrorResponseDto,
})
async login(@Body() loginData: LoginDto): Promise<any> {
  const result = await this.authService.loginUsuario(
    loginData.email,
    loginData.password,
  );

  // Mapear la respuesta manteniendo estructura actual + nuevos campos
  return {
    success: result.success,
    message: result.message,
    // ESTRUCTURA ACTUAL (para compatibilidad)
    user: {
      id: result.usuario.id,
      email: result.usuario.email,
      name: result.usuario.nombre,
      isEmailVerified: result.usuario.email_verificado,
      createdAt: result.usuario.fecha_registro.toISOString(),
      profilePicture: null,
    },
    token: result.token,
    
    // 🆕 NUEVOS CAMPOS DEL PERFIL (igual que /auth/me)
    usuario: {
      id: result.usuario.id,
      email: result.usuario.email,
      nombre: result.usuario.nombre,
      fecha_registro: result.usuario.fecha_registro.toISOString(),
      estado: result.usuario.estado,
      email_verificado: result.usuario.email_verificado,
    },
    cuentas_gmail: result.cuentas_gmail?.map((cuenta) => ({
      id: cuenta.id,
      email_gmail: cuenta.email_gmail,
      nombre_cuenta: cuenta.nombre_cuenta,
      alias_personalizado: cuenta.alias_personalizado,
      fecha_conexion: cuenta.fecha_conexion.toISOString(),
      ultima_sincronizacion: cuenta.ultima_sincronizacion?.toISOString(),
      esta_activa: cuenta.esta_activa,
      emails_count: cuenta.emails_count,
      events_count: cuenta.events_count,
    })) || [],
    sesiones_activas: result.sesiones_activas?.map((sesion) => ({
      id: sesion.id, // ✅ CORREGIDO: Ya es string, no convertir
      fecha_creacion: sesion.fecha_creacion.toISOString(),
      expira_en: sesion.expira_en.toISOString(),
      ip_origen: sesion.ip_origen,
      user_agent: sesion.user_agent,
      esta_activa: sesion.esta_activa,
    })) || [],
    estadisticas: result.estadisticas ? {
      total_cuentas_gmail: result.estadisticas.total_cuentas_gmail,
      cuentas_gmail_activas: result.estadisticas.cuentas_gmail_activas,
      total_emails_sincronizados: result.estadisticas.total_emails_sincronizados,
      emails_no_leidos: result.estadisticas.emails_no_leidos,
      total_eventos_sincronizados: result.estadisticas.total_eventos_sincronizados,
      eventos_proximos: result.estadisticas.eventos_proximos,
      eventos_pasados: result.estadisticas.eventos_pasados,
      ultima_sincronizacion: result.estadisticas.ultima_sincronizacion?.toISOString(),
      cuenta_mas_activa: result.estadisticas.cuenta_mas_activa,
    } : {
      total_cuentas_gmail: 0,
      cuentas_gmail_activas: 0,
      total_emails_sincronizados: 0,
      emails_no_leidos: 0,
      total_eventos_sincronizados: 0,
      eventos_proximos: 0,
      eventos_pasados: 0,
      ultima_sincronizacion: new Date().toISOString(),
      cuenta_mas_activa: null,
    },
  };
}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Obtener perfil del usuario',
    description:
      'Obtiene la información del usuario autenticado con sus cuentas Gmail conectadas.',
  })
  @ApiOkResponse({
    description: 'Perfil obtenido exitosamente',
    type: ProfileResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Token faltante o inválido',
    type: ErrorResponseDto,
  })
  async getProfile(
    @Req() request: { user: UsuarioAutenticado },
  ): Promise<ProfileResponseDto> {
    try {
      const usuario = request.user;

      const profileData = await this.authService.obtenerPerfil(usuario.id);

      if (!profileData.success) {
        throw new UnauthorizedException('Error obteniendo perfil');
      }

      return {
        success: true,
        usuario: {
          id: profileData.usuario.id,
          email: profileData.usuario.email,
          nombre: profileData.usuario.nombre,
          fecha_registro: profileData.usuario.fecha_registro.toISOString(),
          estado: profileData.usuario.estado,
          email_verificado: profileData.usuario.email_verificado,
        },
        cuentas_gmail: profileData.cuentas_gmail.map((cuenta) => ({
          id: cuenta.id,
          email_gmail: cuenta.email_gmail,
          nombre_cuenta: cuenta.nombre_cuenta,
          alias_personalizado: cuenta.alias_personalizado,
          fecha_conexion: cuenta.fecha_conexion?.toISOString(),
          ultima_sincronizacion: cuenta.ultima_sincronizacion?.toISOString(),
          esta_activa: cuenta.esta_activa,
          emails_count: cuenta.emails_count,
          events_count: cuenta.events_count,
        })),
        sesiones_activas: profileData.sesiones_activas.map((sesion) => ({
          id: sesion.id,
          fecha_creacion: sesion.fecha_creacion.toISOString(),
          expira_en: sesion.expira_en.toISOString(),
          ip_origen: sesion.ip_origen,
          user_agent: sesion.user_agent,
          esta_activa: sesion.esta_activa,
        })),
       estadisticas: {
  total_cuentas_gmail: profileData.estadisticas.total_cuentas_gmail,
  cuentas_gmail_activas: profileData.estadisticas.cuentas_gmail_activas,
  total_emails_sincronizados: profileData.estadisticas.total_emails_sincronizados,
  emails_no_leidos: profileData.estadisticas.emails_no_leidos,
  // 🆕 NUEVOS CAMPOS DE EVENTOS
  total_eventos_sincronizados: profileData.estadisticas.total_eventos_sincronizados,
  eventos_proximos: profileData.estadisticas.eventos_proximos,
  eventos_pasados: profileData.estadisticas.eventos_pasados,
  // CAMPOS ORIGINALES
  ultima_sincronizacion: profileData.estadisticas.ultima_sincronizacion?.toISOString() || null,
  cuenta_mas_activa: profileData.estadisticas.cuenta_mas_activa,
},
      };
    } catch (error) {
      console.error('Error obteniendo perfil:', error);

      if (error instanceof UnauthorizedException) {
        throw error;
      }

      throw new UnauthorizedException('Error obteniendo perfil de usuario');
    }
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Cerrar sesión',
    description: 'Invalida el JWT token actual.',
  })
  @ApiOkResponse({
    description: 'Sesión cerrada exitosamente',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        message: { type: 'string', example: 'Sesión cerrada exitosamente' },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Token faltante o inválido',
    type: ErrorResponseDto,
  })
  async logout(
    @Req()
    request: {
      user: UsuarioAutenticado;
      headers: { authorization?: string };
    },
  ) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token de autorización requerido');
    }

    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException('Token JWT inválido');
    }

    return this.authService.logout(token);
  }



  /**
   * Solicitar recuperación de contraseña
   * Siempre retorna éxito por seguridad (no revela si email existe)
   */
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Solicitar recuperación de contraseña',
    description: 'Genera un token de recuperación y envía email al usuario. Siempre retorna éxito por seguridad.'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Email enviado correctamente (si el email existe)',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Si el email existe, recibirás instrucciones para restablecer tu contraseña' },
        success: { type: 'boolean', example: true }
      }
    }
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Email inválido o faltante' 
  })
 async forgotPassword(@Body() dto: ForgotPasswordDto) {
  await this.passwordResetService.requestPasswordReset(dto.email);
  
  return {
    message: 'Si el email existe, recibirás instrucciones para recuperar tu contraseña',
    success: true,
  };
}

  /**
   * Validar token de recuperación de contraseña
   * Verifica si el token existe, no está usado y no expiró
   */
  @Get('validate-reset-token/:token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Validar token de recuperación',
    description: 'Verifica si un token de recuperación de contraseña es válido (existe, no usado, no expirado)'
  })
  @ApiParam({
    name: 'token',
    description: 'Token UUID de recuperación',
    example: '550e8400-e29b-41d4-a716-446655440000'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Resultado de la validación del token',
    type: ValidateTokenResponseDto,
    schema: {
      type: 'object',
      properties: {
        valid: { type: 'boolean', example: true },
        message: { type: 'string', example: 'Token válido' }
      }
    }
  })
  async validateResetToken(@Param('token') token: string) {
  const isValid = await this.passwordResetService.validateResetToken(token);
  
  return {
    valid: isValid,
    message: isValid ? 'Token válido' : 'Token inválido o expirado',
  };
}

/**
 * Restablecer contraseña usando token de recuperación
 * Actualiza la contraseña y marca el token como usado
 */
@Post('reset-password')
@HttpCode(HttpStatus.OK)
@ApiOperation({ 
  summary: 'Restablecer contraseña',
  description: 'Cambia la contraseña del usuario usando un token válido de recuperación'
})
@ApiResponse({ 
  status: 200, 
  description: 'Contraseña actualizada correctamente',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'Contraseña actualizada correctamente' },
      success: { type: 'boolean', example: true }
    }
  }
})
@ApiResponse({ 
  status: 400, 
  description: 'Token inválido, expirado o contraseñas no coinciden' 
})
async resetPassword(@Body() dto: ResetPasswordDto) {
  // Validar que las contraseñas coincidan
  if (dto.newPassword !== dto.confirmPassword) {
    throw new BadRequestException('Las contraseñas no coinciden');
  }

  const result = await this.passwordResetService.resetPassword(
    dto.token,
    dto.newPassword,
  );
  
  if (!result.success) {
    throw new BadRequestException(result.message);
  }
  
  return {
    message: result.message,
    success: true,
  };
}
  // ================================
  // 🎯 OAUTH GOOGLE
  // ================================

 @Get('google')
  @ApiOperation({
    summary: 'Iniciar OAuth con Google',
    description: 'Inicia proceso OAuth. Acepta JWT token y service parameter.',
  })
  @ApiQuery({
    name: 'token',
    description: 'JWT token como query parameter',
    required: false,
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  @ApiQuery({
    name: 'service',
    description: 'Servicio de destino: gmail o calendar',
    required: false,
    example: 'gmail',
    enum: ['gmail', 'calendar']
  })
  @ApiResponse({
    status: 302,
    description: 'Redirección a Google OAuth con estado del usuario',
  })
  @ApiUnauthorizedResponse({
    description: 'JWT token requerido (header o query)',
    type: ErrorResponseDto,
  })
  async googleAuth(
  @Req() req: Request,
  @Res() res: Response,
  @Query('token') tokenQuery?: string,
  @Query('service') service?: string
): Promise<void> {
  try {
    console.log('🔵 OAuth Google iniciado');
    
    // 🎯 LOG TEMPORAL PARA DEBUG:
    console.log('🔍 QUERY PARAMS RECIBIDOS:', req.query);
    console.log('🔍 SERVICE PARAMETER:', service);
    console.log('🔍 SERVICE TYPE:', typeof service);
    
    console.log('🎯 Servicio solicitado:', service || 'gmail (default)');

    // 1️⃣ EXTRAER Y VALIDAR TOKEN
    const token = this.extractTokenFromRequest(req, tokenQuery);

    // 2️⃣ VALIDAR JWT Y OBTENER DATOS DEL USUARIO
    const userPayload = await this.validateJwtAndGetUser(token);

    // 3️⃣ VALIDAR SERVICE PARAMETER
    const targetService = this.validateService(service);

    // 4️⃣ GENERAR Y REDIRIGIR A URL OAUTH CON SERVICE
    this.redirectToGoogleOAuth(res, userPayload.sub, targetService);

  } catch (error) {
    console.error('❌ Error en OAuth Google:', error);
    this.handleOAuthError(res, error);
  }
}

/**
 * 🆕 GET /auth/google/register

 */
@Get('google/register')
@ApiOperation({
  summary: 'Registrarse con Google',
  description: 'Inicia el flujo OAuth de Google para crear una nueva cuenta. No requiere token JWT.',
})
@ApiResponse({
  status: 302,
  description: 'Redirección a Google OAuth',
})
googleRegister(@Res() res: Response): void {
  try {
    this.logger.log('🔵 Iniciando registro con Google OAuth');

    // 1️⃣ GENERAR URL DE GOOGLE OAUTH
    const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    const redirectUri = this.configService.get<string>('GOOGLE_REDIRECT_URI') || 
                        'http://localhost:3001/auth/google/callback';
    
    // 2️⃣ SCOPES PARA AUTENTICACIÓN (no Gmail API)
    const scopes = this.getScopesForAuth();
    
    // 3️⃣ CONSTRUIR PARÁMETROS
    const params = new URLSearchParams({
      client_id: clientId || '',
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: scopes.join(' '),
      access_type: 'offline',
      prompt: 'consent',
      state: 'register:anonymous' // 🎯 IDENTIFICADOR DE REGISTRO
    });

    const authUrl = `${baseUrl}?${params.toString()}`;
    this.logger.log(`🔗 Redirigiendo a Google para registro: ${authUrl}`);
    
    // 4️⃣ REDIRIGIR A GOOGLE
    res.redirect(authUrl);

  } catch (error) {
    this.logger.error('❌ Error en registro con Google:', error);
    this.handleOAuthError(res, error);
  }
}

/**
 * 🆕 GET /auth/google/login
 * 
 * ¿DIFERENCIA CON REGISTER?
 * - state="login:anonymous" (en lugar de "register:anonymous")
 * - El callback busca usuario existente en lugar de crearlo
 * - Si no existe → Error "Debes registrarte primero"
 */
@Get('google/login')
@ApiOperation({
  summary: 'Iniciar sesión con Google',
  description: 'Inicia el flujo OAuth de Google para usuarios existentes. No requiere token JWT.',
})
@ApiResponse({
  status: 302,
  description: 'Redirección a Google OAuth',
})
googleLogin(@Res() res: Response): void {
  try {
    this.logger.log('🔵 Iniciando login con Google OAuth');

    // 1️⃣ GENERAR URL DE GOOGLE OAUTH
    const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    const redirectUri = this.configService.get<string>('GOOGLE_REDIRECT_URI') || 
                        'http://localhost:3001/auth/google/callback';
    
    // 2️⃣ SCOPES PARA AUTENTICACIÓN (no Gmail API)
    const scopes = this.getScopesForAuth();
    
    // 3️⃣ CONSTRUIR PARÁMETROS
    const params = new URLSearchParams({
      client_id: clientId || '',
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: scopes.join(' '),
      access_type: 'offline',
      prompt: 'consent',
      state: 'login:anonymous' // 🎯 IDENTIFICADOR DE LOGIN
    });

    const authUrl = `${baseUrl}?${params.toString()}`;
    this.logger.log(`🔗 Redirigiendo a Google para login: ${authUrl}`);
    
    // 4️⃣ REDIRIGIR A GOOGLE
    res.redirect(authUrl);

  } catch (error) {
    this.logger.error('❌ Error en login con Google:', error);
    this.handleOAuthError(res, error);
  }
}

  /**
   * 🔧 Extraer token de request (header o query)
   */
  private extractTokenFromRequest(req: Request, tokenQuery?: string): string {
    // Intentar desde Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && typeof authHeader === 'string') {
      const headerToken = authHeader.replace('Bearer ', '');
      if (headerToken !== authHeader) {
        return headerToken;
      }
    }

    // Si no hay header válido, usar query parameter
    if (tokenQuery) {
      return tokenQuery;
    }

    console.log('❌ No JWT token provided');
    throw new UnauthorizedException(
      'JWT token requerido en Authorization header o query parameter token',
    );
  }

  /**
   * 🔧 Validar JWT y obtener datos del usuario
   */
  private async validateJwtAndGetUser(token: string): Promise<JwtPayload> {
    // Validar JWT
    const decoded = this.validateJwtToken(token);

    // Verificar que el usuario existe y está activo
    const usuario = await this.authService.buscarUsuarioPorId(decoded.sub);
    if (!usuario) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (usuario.estado !== 'activo') {
      throw new UnauthorizedException('Usuario inactivo');
    }

    console.log(`🔵 Usuario ${decoded.sub} validado para OAuth`);
    return decoded;
  }

  /**
   * 🔧 Validar token JWT y extraer payload
   */
  private validateJwtToken(token: string): JwtPayload {
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new UnauthorizedException('JWT_SECRET no configurado');
    }

    try {
      const verifyResult = verify(token, jwtSecret);

      if (typeof verifyResult === 'string') {
        throw new UnauthorizedException('Token JWT inválido');
      }

      if (!verifyResult.sub || typeof verifyResult.sub !== 'string') { // ✅ CORREGIDO: number → string
        throw new UnauthorizedException('Token JWT inválido - sub requerido');
      }

      const customData = verifyResult as unknown as Record<string, unknown>;
      if (!customData.email || !customData.nombre) {
        throw new UnauthorizedException(
          'Token JWT inválido - datos incompletos',
        );
      }

      return {
        sub: verifyResult.sub,
        email: customData.email as string,
        nombre: customData.nombre as string,
        iat: verifyResult.iat,
        exp: verifyResult.exp,
      } as JwtPayload;
    } catch (jwtError) {
      console.log('❌ JWT validation failed:', jwtError);
      throw new UnauthorizedException('Token JWT inválido o expirado');
    }
  }

/**
 * 🔧 Redirigir a Google OAuth CON SERVICE
 */
private redirectToGoogleOAuth(res: Response, userId: string, service: 'gmail' | 'calendar'): void {
  const authUrl = this.authService.generarUrlOAuth(userId, service);
  
  console.log(`🔗 Redirigiendo a: ${authUrl}`);
  console.log(`🎯 Usuario: ${userId}, Service: ${service}`);
  
  res.redirect(authUrl);
}

  /**
   * 🔧 Manejar errores de OAuth
   */
  private handleOAuthError(res: Response, error: unknown): void {
    const frontendUrl =
      this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
    const errorUrl = new URL(frontendUrl);
    errorUrl.pathname = '/auth/callback';
    errorUrl.searchParams.set('auth', 'error');

    if (error instanceof UnauthorizedException) {
      errorUrl.searchParams.set('message', encodeURIComponent(error.message));
    } else {
      errorUrl.searchParams.set(
        'message',
        encodeURIComponent('Error interno de autenticación'),
      );
    }

    res.redirect(errorUrl.toString());
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({
    summary: 'Callback de Google OAuth',
    description: 'Maneja registro, login, Gmail y Calendar.',
  })
  async googleAuthRedirect(
    @Req() req: ReqCallbackGoogle & { query: { state?: string } },
    @Res() res: Response,
  ): Promise<void> {
    try {
      const parsed = this.parseState(req.query.state);
      
      if (parsed.action === 'register') {
        await this.handleRegisterCallback(req.user, res);
        return;
      }
      
      if (parsed.action === 'login') {
        await this.handleLoginCallback(req.user, res);
        return;
      }
      
      if (parsed.service === 'gmail') {
        await this.handleGmailCallback(req.user, parsed.action, res);
        return;
      }
      
      if (parsed.service === 'calendar') {
        await this.handleCalendarCallback(req.user, parsed.action, res);
        return;
      }
      
      throw new Error(`Estado no soportado: ${parsed.action}`);
    } catch (error) {
      this.handleCallbackError(res, error);
    }
  }

  // ================================
  // GESTIÓN DE CUENTAS GMAIL
  // ================================

  @Get('cuentas-gmail')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Listar cuentas Gmail del usuario',
    description:
      'Obtiene todas las cuentas Gmail conectadas del usuario autenticado.',
  })
  @ApiOkResponse({
    description: 'Lista de cuentas Gmail obtenida exitosamente',
  })
  @ApiUnauthorizedResponse({
    description: 'Token faltante o inválido',
    type: ErrorResponseDto,
  })
  async listarCuentasGmail(@Req() request: { user: UsuarioAutenticado }) {
    try {
      const cuentas = await this.authService.listarCuentasGmailUsuario(
        request.user.id,
      );

      return {
        success: true,
        cuentas: cuentas,
        total: cuentas.length,
      };
    } catch (error) {
      console.error('Error listando cuentas Gmail:', error);
      throw new UnauthorizedException('Error obteniendo cuentas Gmail');
    }
  }

  @Get('cuentas-gmail/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Obtener cuenta Gmail específica',
    description:
      'Obtiene los detalles de una cuenta Gmail específica del usuario.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la cuenta Gmail',
    example: '1',
  })
  @ApiOkResponse({
    description: 'Cuenta Gmail obtenida exitosamente',
  })
  @ApiNotFoundResponse({
    description: 'Cuenta Gmail no encontrada',
    type: ErrorResponseDto,
  })
  async obtenerCuentaGmail(
    @Req() request: { user: UsuarioAutenticado },
    @Param('id') cuentaId: string,
  ): Promise<{ success: boolean; cuenta: any }> {
    try {
      const cuenta = await this.authService.obtenerCuentaGmailPorId(
        request.user.id,
        cuentaId,
      );

      return {
        success: true,
        cuenta: cuenta,
      };
    } catch (error) {
      console.error('Error obteniendo cuenta Gmail:', error);

      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new NotFoundException('Cuenta Gmail no encontrada');
    }
  }
  @Delete('cuentas-gmail/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Desconectar cuenta Gmail de usuario principal',
    description:
      'Desconecta y elimina una cuenta Gmail específica del usuario.',
  })
  @ApiParam({
    name: 'id',
    description: 'ID de la cuenta Gmail a desconectar',
    example: 'c7c1c4b7-04a1-4350-9c39-c1d165de88c8',
  })
  @ApiOkResponse({
    description: 'Cuenta Gmail desconectada exitosamente',
  })
  @ApiNotFoundResponse({
    description: 'Cuenta Gmail no encontrada',
    type: ErrorResponseDto,
  })
  async desconectarCuentaGmail(
    @Req() request: { user: UsuarioAutenticado },
    @Param('id') cuentaId: string,
  ) {
    try {
      const resultado = await this.authService.desconectarCuentaGmail(
        request.user.id,
        cuentaId,
      );

      return {
        success: true,
        message: 'Cuenta Gmail desconectada exitosamente',
        cuenta_eliminada: resultado.cuenta_desconectada,
      };
    } catch (error) {
      console.error('Error desconectando cuenta Gmail:', error);
      throw new NotFoundException('Cuenta Gmail no encontrada');
    }
  }

  /**
   * 🗑️ DELETE /auth/users/:id - Eliminar usuario principal completamente
   */
  @Delete('users/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Eliminar usuario principal completamente',
    description: `
      **⚠️ OPERACIÓN DESTRUCTIVA ⚠️**
      Elimina completamente al usuario principal y TODA su data asociada:
      - ✅ Usuario principal
      - ✅ Todas las cuentas Gmail asociadas
      - ✅ Todos los emails sincronizados
      - ✅ Todos los eventos sincronizados
      - ✅ Todas las sesiones JWT activas
      
      **Esta operación NO se puede deshacer.**
      
      **Seguridad:** Solo el propio usuario puede eliminar su cuenta.
    `
  })
  @ApiParam({
    name: 'id',
    description: 'ID del usuario principal a eliminar',
    example: 'e5a3d40e-3700-4f7a-b962-e789ed794ce0'
  })
  @ApiOkResponse({
    description: 'Usuario eliminado completamente',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        message: { type: 'string', example: 'Usuario principal eliminado completamente' },
        usuario_eliminado: {
          type: 'object',
          properties: {
            id: { type: 'string', example: 'e5a3d40e-3700-4f7a-b962-e789ed794ce0' },
            email: { type: 'string', example: 'usuario@email.com' },
            nombre: { type: 'string', example: 'Usuario Ejemplo' },
            fecha_registro: { type: 'string', example: '2025-01-15T10:30:00Z' }
          }
        },
        data_eliminada: {
          type: 'object',
          properties: {
            cuentas_gmail: { type: 'number', example: 2 },
            emails_sincronizados: { type: 'number', example: 1547 },
            eventos_sincronizados: { type: 'number', example: 89 },
            sesiones_activas: { type: 'number', example: 3 },
            cuentas_gmail_eliminadas: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  email_gmail: { type: 'string' }
                }
              },
              example: [
                { id: 'cuenta-uuid-1', email_gmail: 'personal@gmail.com' },
                { id: 'cuenta-uuid-2', email_gmail: 'trabajo@gmail.com' }
              ]
            }
          }
        },
        eliminado_en: { type: 'string', example: '2025-09-21T22:45:00Z' }
      }
    }
  })
  @ApiUnauthorizedResponse({
    description: 'Token faltante, inválido o usuario no autorizado',
    type: ErrorResponseDto
  })
  @ApiNotFoundResponse({
    description: 'Usuario no encontrado',
    type: ErrorResponseDto
  })
  @ApiBadRequestResponse({
    description: 'ID de usuario inválido',
    type: ErrorResponseDto
  })
  async deleteUser(
    @Req() request: { user: UsuarioAutenticado },
    @Param('id') userId: string
  ) {
    try {
      // 🔒 VALIDACIÓN DE SEGURIDAD: Solo el propio usuario puede eliminar su cuenta
      if (request.user.id !== userId) {
        throw new UnauthorizedException({
          codigo: CodigosErrorAuth.PERMISOS_INSUFICIENTES,
          mensaje: 'Solo puedes eliminar tu propia cuenta'
        });
      }

      // 🗑️ PROCEDER CON LA ELIMINACIÓN
      this.logger.log(`🗑️ Solicitud de eliminación de usuario ${userId} por el usuario autenticado ${request.user.id}`);
      
      const result = await this.authService.deleteUser(userId);
      
      this.logger.log(`✅ Usuario ${userId} eliminado exitosamente`);
      
      return result;
      
    } catch (error) {
      this.logger.error('❌ Error eliminando usuario:', error);
      
      if (error instanceof UnauthorizedException || error instanceof NotFoundException) {
        throw error;
      }
      
      throw new BadRequestException({
        codigo: CodigosErrorAuth.GOOGLE_OAUTH_ERROR,
        mensaje: 'Error interno eliminando usuario'
      });
    }
  }

 @Put('cuentas-gmail/:id/alias')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
@ApiOperation({
  summary: 'Actualizar alias de cuenta Gmail',
  description: 'Actualiza el alias personalizado de una cuenta Gmail.',
})
@ApiParam({
  name: 'id',
  description: 'ID de la cuenta Gmail',
  example: '6627433a-870c-49eb-8645-9c9569de825d',
})
@ApiBody({
  schema: {
    type: 'object',
    properties: {
      alias_personalizado: {
        type: 'string',
        example: 'Gmail Trabajo',
        description: 'Nuevo alias para la cuenta Gmail',
      },
    },
    required: ['alias_personalizado'],
  },
})
@ApiOkResponse({
  description: 'Alias actualizado exitosamente',
})
@ApiBadRequestResponse({
  description: 'Alias inválido o faltante',
  type: ErrorResponseDto,
})
async actualizarAliasCuenta(
  @Req() request: { user: UsuarioAutenticado },
  @Param('id') cuentaId: string,
  @Body() body: { alias_personalizado: string },
) {
  try {
    // 1️⃣ Validar datos de entrada
    if (!body.alias_personalizado || body.alias_personalizado.trim() === '') {
      throw new BadRequestException('alias_personalizado es requerido');
    }

    const aliasLimpio = body.alias_personalizado.trim();
    
    // 2️⃣ Validar longitud del alias
    if (aliasLimpio.length > 100) {
      throw new BadRequestException('El alias no puede exceder 100 caracteres');
    }

    console.log(`🔄 Actualizando alias de cuenta ${cuentaId} a: "${aliasLimpio}"`);

    // 3️⃣ ✅ LLAMAR AL SERVICE REAL (en lugar de retornar datos fake)
    const resultado = await this.authService.actualizarAliasCuentaGmail(
      request.user.id,
      cuentaId,
      aliasLimpio
    );

    return resultado;

  } catch (error) {
    console.error('❌ Error actualizando alias:', error);

    if (
      error instanceof BadRequestException ||
      error instanceof NotFoundException ||
      error instanceof UnauthorizedException
    ) {
      throw error;
    }

    throw new NotFoundException('Cuenta Gmail no encontrada');
  }
}
  // ================================
  // ENDPOINTS DE INFORMACIÓN
  // ================================

  @Get('health')
  @ApiTags('Health')
  @ApiOperation({
    summary: 'Estado del servicio',
    description:
      'Verifica que el microservicio de autenticación esté funcionando correctamente.',
  })
  @ApiOkResponse({
    description: 'Servicio funcionando correctamente',
    type: HealthResponseDto,
  })
  getHealth(): HealthResponseDto {
    return {
      service: 'ms-yourdashboard-auth',
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: {
        connected: true,
        query_time_ms: 15,
      },
      estadisticas: {
        usuarios_activos: 0,
        cuentas_gmail_conectadas: 0,
        sesiones_activas: 0,
      },
    };
  }

  @Get('info')
  @ApiTags('Health')
  @ApiOperation({
    summary: 'Información del servicio',
    description:
      'Obtiene información detallada sobre los endpoints disponibles.',
  })
  @ApiOkResponse({
    description: 'Información del servicio',
  })
  getInfo() {
    return {
      service: 'ms-yourdashboard-auth',
      description:
        'Microservicio de autenticación completo con gestión de múltiples cuentas Gmail',
      endpoints: {
        traditional: {
          register: 'POST /auth/register',
          login: 'POST /auth/login',
          profile: 'GET /auth/me',
          logout: 'POST /auth/logout',
        },
        oauth: {
          google: 'GET /auth/google (Requiere JWT en header o query)',
          callback: 'GET /auth/google/callback',
        },
        gmail_accounts: {
          list: 'GET /auth/cuentas-gmail',
          get: 'GET /auth/cuentas-gmail/:id',
          disconnect: 'DELETE /auth/cuentas-gmail/:id',
          update_alias: 'PUT /auth/cuentas-gmail/:id/alias',
        },
      },
      supported_providers: ['email', 'google'],
      upcoming_providers: ['whatsapp', 'calendar'],
    };
  }


  
  // ================================
  // 🔧 MÉTODOS PRIVADOS
  // ================================

  /**
   * 🔧 Validar service parameter
   */
  private validateService(service?: string): 'gmail' | 'calendar' {
    if (!service) {
      console.log('🎯 Service no especificado, usando gmail por defecto');
      return 'gmail';
    }

    const validServices = ['gmail', 'calendar'];
    if (!validServices.includes(service)) {
      console.warn(`⚠️ Service inválido "${service}", usando gmail por defecto`);
      return 'gmail';
    }

    console.log(`✅ Service validado: ${service}`);
    return service as 'gmail' | 'calendar';
  }

  /**
 * 🔧 Obtener scopes para autenticación (login/register)
 
 * - Para login/register solo necesitamos identificar al usuario
 * - Para conectar Gmail necesitamos permisos de Gmail API
 * 
 */
private getScopesForAuth(): string[] {
  return [
    'openid',   // ← Identificador único de Google
    'email',    // ← Email del usuario
    'profile'   // ← Nombre y foto de perfil
  ];
}

/**
 * 🔧 Parsear state
 * 
 * FORMATOS SOPORTADOS:
 * - "register:anonymous" → Registro con Google (nuevo)
 * - "login:anonymous" → Login con Google (nuevo)
 * - "userId:gmail" → Conectar Gmail (existente)
 * - "userId:calendar" → Conectar Calendar (existente)
 */
private parseState(state?: string): { 
  action: string; 
  identifier: string;
  service?: 'gmail' | 'calendar';
} {
  if (!state) {
    throw new Error('Estado inválido - no se proporcionó state parameter');
  }

  const parts = state.split(':');
  
  if (parts.length !== 2) {
    throw new Error('Estado inválido - formato incorrecto');
  }

  const [action, identifier] = parts;

  // Detectar login/register
  if (action === 'register' || action === 'login') {
    this.logger.log(` Detectado ${action} con Google`);
    return { action, identifier };
  }

  //  Conectar Gmail/Calendar (userId:service)
  const userId = action;
  const service = identifier as 'gmail' | 'calendar';
  
  if (!userId || userId.trim() === '') {
    throw new Error('Estado inválido - userId vacío');
  }
  
  this.logger.log(`🎯 Detectado vincular ${service} para usuario ${userId}`);
  return { action: userId, identifier, service };
}
 

private async handleGmailCallback(
  googleUser: GoogleOAuthUser,
  userId: string,
  res: Response
): Promise<void> {
  console.log(`🔧 Procesando conexión Gmail para usuario ${userId}`);
  
  // Usar el método existente
  await this.authService.manejarCallbackGoogle(googleUser, userId);

  //Invalidar cache del Orchestrator
  await this.invalidateOrchestratorCache(userId);

  const redirectUrl = new URL(
    this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000',
  );
  redirectUrl.pathname = '/dashboard';
  redirectUrl.searchParams.set('success', 'true');
  redirectUrl.searchParams.set('refresh', 'profile');
  redirectUrl.searchParams.set('message', `Gmail ${googleUser.email} conectado exitosamente`);

  console.log(`✅ Gmail conectado, redirigiendo: ${redirectUrl.toString()}`);
  res.redirect(redirectUrl.toString());
}

/**
 * 🆕 Manejar callback de REGISTER con Google
 * 
 * ¿CUÁNDO SE EJECUTA?
 * - Usuario hace clic en "Registrarse con Google"
 * - Google redirige a /auth/google/callback?state=register:anonymous
 * 
 * ¿QUÉ HACE?
 * 1. Extrae datos del usuario de Google (email, nombre, google_id)
 * 2. Llama al service para crear/vincular usuario
 * 3. Redirige al frontend con el token JWT
 */
private async handleRegisterCallback(
  googleUser: GoogleOAuthUser,
  res: Response
): Promise<void> {
  try {
    this.logger.log(`🆕 Procesando registro con Google: ${googleUser.email}`);

    // 1️⃣ REGISTRAR USUARIO CON GOOGLE (o vincular si ya existe)
    const resultado = await this.authService.registrarUsuarioConGoogle(
      googleUser.googleId,
      googleUser.email,
      googleUser.name
    );

    // 2️⃣ CONSTRUIR URL DE REDIRECCIÓN AL FRONTEND
    const frontendUrl = this.configService.get<string>('FRONTEND_URL') || 
                        'http://localhost:3000';
    const redirectUrl = new URL(frontendUrl);
    
    // 3️⃣ RUTA DE DESTINO EN FRONTEND
    redirectUrl.pathname = '/auth/callback';
    
    // 4️⃣ PARÁMETROS EN LA URL
    redirectUrl.searchParams.set('token', resultado.token); // ← JWT token
    redirectUrl.searchParams.set('auth', 'success');
    redirectUrl.searchParams.set('provider', 'google');
    redirectUrl.searchParams.set('action', 'register');
    
    // 5️⃣ MENSAJE DESCRIPTIVO
    if (resultado.isNewUser) {
      redirectUrl.searchParams.set('message', 
        encodeURIComponent('¡Bienvenido! Cuenta creada con Google exitosamente')
      );
    } else {
      redirectUrl.searchParams.set('message', 
        encodeURIComponent('Cuenta vinculada. Ahora puedes usar Google o email/password para entrar')
      );
    }

    this.logger.log(`✅ Registro exitoso, redirigiendo a: ${redirectUrl.toString()}`);
    
    // 6️⃣ REDIRIGIR AL FRONTEND
    res.redirect(redirectUrl.toString());

  } catch (error) {
    this.logger.error(`❌ Error en registro con Google:`, error);
    this.handleCallbackError(res, error);
  }
}

/**
 * 🆕 Manejar callback de LOGIN con Google
 * 
 * ¿CUÁNDO SE EJECUTA?
 * - Usuario hace clic en "Iniciar sesión con Google"
 * - Google redirige a /auth/google/callback?state=login:anonymous
 * 
 * ¿QUÉ HACE?
 * 1. Extrae datos del usuario de Google
 * 2. Busca usuario existente (por google_id o email)
 * 3. Si no existe → Error
 * 4. Si existe → Redirige al frontend con el token JWT
 */
private async handleLoginCallback(
  googleUser: GoogleOAuthUser,
  res: Response
): Promise<void> {
  try {
    this.logger.log(`🔑 Procesando login con Google: ${googleUser.email}`);

    // 1️⃣ LOGIN CON GOOGLE (busca usuario existente)
    const resultado = await this.authService.loginUsuarioConGoogle(
      googleUser.googleId,
      googleUser.email,
      // googleUser.name
    );

    // 2️⃣ CONSTRUIR URL DE REDIRECCIÓN AL FRONTEND
    const frontendUrl = this.configService.get<string>('FRONTEND_URL') || 
                        'http://localhost:3000';
    const redirectUrl = new URL(frontendUrl);
    
    // 3️⃣ RUTA DE DESTINO EN FRONTEND
    redirectUrl.pathname = '/auth/callback';
    
    // 4️⃣ PARÁMETROS EN LA URL
    redirectUrl.searchParams.set('token', resultado.token); // ← JWT token
    redirectUrl.searchParams.set('auth', 'success');
    redirectUrl.searchParams.set('provider', 'google');
    redirectUrl.searchParams.set('action', 'login');
    redirectUrl.searchParams.set('message', 
      encodeURIComponent('¡Bienvenido de vuelta! Login con Google exitoso')
    );

    this.logger.log(`✅ Login exitoso, redirigiendo a: ${redirectUrl.toString()}`);
    
    // 5️⃣ REDIRIGIR AL FRONTEND
    res.redirect(redirectUrl.toString());

  } catch (error) {
    this.logger.error(`❌ Error en login con Google:`, error);
    
    // Si el error es "Usuario no encontrado", personalizar mensaje
    if (error instanceof UnauthorizedException) {
      const errorData = error.getResponse();
      if (typeof errorData === 'object' && 'mensaje' in errorData) {
        const mensaje = (errorData as any).mensaje;
        if (mensaje.includes('no registrado')) {
          // Usuario intentó login pero no está registrado
          const frontendUrl = this.configService.get<string>('FRONTEND_URL') || 
                              'http://localhost:3000';
          const redirectUrl = new URL(frontendUrl);
          redirectUrl.pathname = '/auth/callback';
          redirectUrl.searchParams.set('auth', 'error');
          redirectUrl.searchParams.set('message', 
            encodeURIComponent('No tienes cuenta. Por favor regístrate primero.')
          );
          redirectUrl.searchParams.set('action', 'register-required');
          
          this.logger.log(`🔴 Usuario no registrado, redirigiendo a: ${redirectUrl.toString()}`);
          res.redirect(redirectUrl.toString());
          return;
        }
      }
    }
    
    // Otros errores
    this.handleCallbackError(res, error);
  }
}

private async invalidateOrchestratorCache(userId: string): Promise<void> {
  try {
    // Invalidar cache de perfil en el Orchestrator
    await axios.post(`${this.orchestratorUrl}/cache/invalidate`, {
      keys: [
        `gmail_count:*`,  // Todos los counts de Gmail
        `profile:${userId}`, // Perfil del usuario
      ]
    });
    console.log(`🗑️ Cache invalidado para usuario ${userId}`);
  } catch (error) {
    console.warn(`⚠️ No se pudo invalidar cache:`, error);
    // No lanzar error - es nice to have
  }
}
  /**
   * 📅 Manejar callback de CALENDAR
   */
private async handleCalendarCallback(
  googleUser: GoogleOAuthUser,
  userId: string,
  res: Response
): Promise<void> {
  console.log(`📅 Procesando conexión Calendar para usuario ${userId}`);
  
  try {
    // ✅ GUARDAR LA CUENTA IGUAL QUE GMAIL
    await this.authService.manejarCallbackGoogle(googleUser, userId);
    
    // ✅ INVALIDAR CACHE DEL ORCHESTRATOR
    await this.invalidateOrchestratorCache(userId);
    
    // ✅ OPCIONAL: Sincronizar eventos iniciales
    // (como Gmail sincroniza emails)
    
    const redirectUrl = new URL(
      this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000',
    );
    redirectUrl.pathname = '/dashboard/calendar';
    redirectUrl.searchParams.set('success', 'true');
    redirectUrl.searchParams.set('refresh', 'profile'); // ← Forzar refresh
    redirectUrl.searchParams.set('message', `Google Calendar ${googleUser.email} conectado exitosamente`);

    console.log(`✅ Calendar conectado, redirigiendo: ${redirectUrl.toString()}`);
    res.redirect(redirectUrl.toString());

  } catch (error) {
    console.error(`❌ Error conectando Calendar:`, error);
    throw error;
  }
}

  /**
   * 🔧 Manejar errores de callback
   */
private handleCallbackError(res: Response, error: unknown): void {
    console.log('🔴 Redirigiendo a error de autenticación');

    const errorUrl = new URL(
      this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000',
    );
    errorUrl.pathname = '/auth/callback';
    errorUrl.searchParams.set('auth', 'error');

    let errorMessage = 'Error desconocido';

    if (error instanceof UnauthorizedException) {
      const errorData = error.getResponse();
      if (typeof errorData === 'object' && 'mensaje' in errorData) {
        errorMessage = (errorData as any).mensaje;
      } else {
        errorMessage = error.message;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    errorUrl.searchParams.set('message', encodeURIComponent(errorMessage));
    console.log('🔴 Redirigiendo a:', errorUrl.toString());

    res.redirect(errorUrl.toString());
  }
}