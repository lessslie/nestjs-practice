import { IsNotEmpty, IsString, Matches} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @ApiProperty({
    description: 'Token de recuperación recibido por email',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString({ message: 'El token debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El token es obligatorio' })
  token: string;

  @ApiProperty({
    description: 'Nueva contraseña del usuario',
    example: 'NewPass@1',
    minLength: 6,
  })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La nueva contraseña es obligatoria' })
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
  @IsString({ message: 'La confirmación debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La confirmación de contraseña es obligatoria' })
  confirmPassword: string;
}