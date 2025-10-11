import { ApiProperty } from '@nestjs/swagger';

/**
 * 🔐 GoogleAuthResponseDto

 * - GET /auth/google/callback?state=login:anonymous
 * - GET /auth/google/callback?state=register:anonymous
 */
export class GoogleAuthResponseDto {
  @ApiProperty({
    description: 'Indica si la operación fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo del resultado',
    example: 'Login con Google exitoso',
  })
  message: string;

  @ApiProperty({
    description: 'JWT token para autenticación',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  token: string;

  @ApiProperty({
    description: 'Datos del usuario autenticado',
    example: {
      id: 'e5a3d40e-3700-4f7a-b962-e789ed794ce0',
      email: 'usuario@gmail.com',
      name: 'Usuario Ejemplo',
      isEmailVerified: true,
      createdAt: '2025-01-15T10:30:00Z',
      profilePicture: null,
      oauthProvider: 'google'
    },
  })
  user: {
    id: string;
    email: string;
    name: string;
    isEmailVerified: boolean;
    createdAt: string;
    profilePicture: string | null;
    oauthProvider: 'email' | 'google' | 'both';
  };

  @ApiProperty({
    description: 'Proveedor de autenticación utilizado',
    example: 'google',
  })
  provider: 'google';

  @ApiProperty({
    description: 'Indica si es la primera vez que el usuario inicia sesión',
    example: false,
  })
  isNewUser: boolean;
}