// src/orchestrator/auth/dto/password-reset.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches } from 'class-validator';

/**
 * 📧 DTO para solicitar recuperación de contraseña
 */
export class ForgotPasswordDto {
  @ApiProperty({
    description: 'Email del usuario para recuperación',
    example: 'usuario@gmail.com',
    format: 'email',
  })
  @IsEmail({}, { message: 'Debe ser un email válido' })
  email: string;
}

/**
 * 🔒 DTO para restablecer contraseña
 */
export class ResetPasswordDto {
  @ApiProperty({
    description: 'Token de recuperación recibido por email',
    example: '5ba1c602-1f07-4173-ae38-65ba1a65be87',
  })
  @IsString({ message: 'Token requerido' })
  token: string;

  @ApiProperty({
    description: 'Nueva contraseña (mínimo 6 caracteres)',
    example:  'NewPass@1',
    minLength: 6,
  })
  @IsString({ message: 'Nueva contraseña requerida' })
  @Matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:,.<>?]).{6,10}$/,
  {
    message: 'La contraseña debe tener entre 6 y 10 caracteres, incluir al menos: una minúscula, una mayúscula, un número y un carácter especial'
  }
)
  newPassword: string;

  @ApiProperty({
    description: 'Confirmación de la nueva contraseña',
    example: 'NewPass@1',
  })
  @IsString({ message: 'Confirmación de contraseña requerida' })

  confirmPassword: string;
}

/**
 * ✅ Response DTO para forgot-password
 */
export class ForgotPasswordResponseDto {
  @ApiProperty({
    description: 'Indica si la operación fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo',
    example: 'Email enviado correctamente',
  })
  message: string;

  @ApiProperty({
    description: 'Timestamp de la respuesta',
    example: '2024-01-15T10:30:00Z',
  })
  timestamp?: string;
}

/**
 * ✅ Response DTO para validar token
 */
export class ValidateTokenResponseDto {
  @ApiProperty({
    description: 'Indica si el token es válido',
    example: true,
  })
  valid: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo',
    example: 'Token válido',
  })
  message: string;

  @ApiProperty({
    description: 'Timestamp de la validación',
    example: '2024-01-15T10:30:00Z',
  })
  timestamp?: string;
}

/**
 * ✅ Response DTO para reset-password
 */
export class ResetPasswordResponseDto {
  @ApiProperty({
    description: 'Indica si la operación fue exitosa',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Mensaje descriptivo',
    example: 'Contraseña actualizada correctamente',
  })
  message: string;

  @ApiProperty({
    description: 'Timestamp de la respuesta',
    example: '2024-01-15T10:30:00Z',
  })
  timestamp?: string;
}