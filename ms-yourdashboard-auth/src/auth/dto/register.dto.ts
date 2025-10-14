import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty, Matches } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'Email del usuario principal',
    example: 'alonso@example.com',
    format: 'email'
  })
  @IsEmail({}, { message: 'Debe ser un email válido' })
  @IsNotEmpty({ message: 'Email es requerido' })
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'Pass@123',
    minLength: 6,
    maxLength: 10
  })
  @IsString({ message: 'Password debe ser un string' })
  @IsNotEmpty({ message: 'Password es requerido' })
  @Matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:,.<>?]).{6,10}$/,
  {
    message: 'La contraseña debe tener entre 6 y 10 caracteres, incluir al menos: una minúscula, una mayúscula, un número y un carácter especial'
  }
)
  password: string;

  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Alonso González',
    minLength: 2,
    maxLength: 100
  })
  @IsString({ message: 'Nombre debe ser un string' })
  @MinLength(2, { message: 'Nombre debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'Nombre no puede tener más de 100 caracteres' })
  @IsNotEmpty({ message: 'Nombre es requerido' })
  nombre: string;
}
