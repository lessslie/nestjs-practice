import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import type { usuarios_principales } from '../../../generated/prisma';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  

  async findByEmail(email: string): Promise<usuarios_principales | null> {
    return this.prisma.usuarios_principales.findFirst({
      where: { 
        email,
        estado: 'activo'
      }
    });
  }

  async findById(id: string): Promise<usuarios_principales | null> {
    return this.prisma.usuarios_principales.findUnique({
      where: { id }
    });
  }

  async create(userData: {
    email: string;
    password_hash: string;
    nombre: string;
  }): Promise<usuarios_principales> {
      // 🔍 DEBUG TEMPORAL
  console.log('🔵 UserRepository recibió:', userData);
  console.log('🔵 Claves del objeto:', Object.keys(userData));
  
    return this.prisma.usuarios_principales.create({
      data: {
        ...userData,
        email_verificado: false
      }
    });
  }

async updateLastActivity(id: string): Promise<void> {
  await this.prisma.usuarios_principales.update({
    where: { id },
    data: {
      ultima_actualizacion: new Date()
    }
  });
}
async updatePassword(id: string, passwordHash: string): Promise<usuarios_principales> {
  return this.prisma.usuarios_principales.update({
    where: { id },
    data: {
      password_hash: passwordHash,
      ultima_actualizacion: new Date()
    }
  });
}
async deactivate(id: string): Promise<usuarios_principales> {
  return this.prisma.usuarios_principales.update({
    where: { id },
    data: {
      estado: 'inactivo',
      ultima_actualizacion: new Date()
    }
  });
}
// ================================
// 🆕 MÉTODOS PARA GOOGLE OAUTH
// ================================

/**
 * 🔍 Buscar usuario por Google ID
 * 
 * ¿POR QUÉ? Para el login con Google - buscar si ya existe un usuario con ese google_id
 */
async findByGoogleId(googleId: string): Promise<usuarios_principales | null> {
  return this.prisma.usuarios_principales.findFirst({
    where: { 
      google_id: googleId,
      estado: 'activo'
    }
  });
}

/**
 * ➕ Crear usuario nuevo con Google OAuth
 * 
 * ¿POR QUÉ? Para el register con Google - crear usuario SIN password
 * ¿CÓMO? 
 * - password_hash = NULL (no tiene contraseña)
 * - oauth_provider = 'google'
 * - email_verificado = TRUE (Google ya lo verificó)
 */
async createWithGoogle(userData: {
  email: string;
  nombre: string;
  google_id: string;
}): Promise<usuarios_principales> {
  console.log('🔵 UserRepository - Creando usuario con Google:', userData.email);
  
  return this.prisma.usuarios_principales.create({
    data: {
      email: userData.email,
      nombre: userData.nombre,
      google_id: userData.google_id,
      oauth_provider: 'google',
      password_hash: null, // ← Usuario de Google no tiene password
      email_verificado: true, // ← Google ya verificó el email
      estado: 'activo'
    }
  });
}

/**
 * 🔗 Vincular Google ID a usuario existente
 * 
 * ¿POR QUÉ? Para el caso donde:
 * - Usuario se registró con email/password (juan@gmail.com)
 * - Después intenta "Continuar con Google" con el mismo email
 * - Auto-vinculamos su cuenta para que pueda entrar con ambos métodos
 * 
 * ¿CÓMO? Agregamos el google_id al usuario existente
 */
async addGoogleId(userId: string, googleId: string): Promise<usuarios_principales> {
  console.log(`🔗 UserRepository - Vinculando Google ID a usuario ${userId}`);
  
  return this.prisma.usuarios_principales.update({
    where: { id: userId },
    data: {
      google_id: googleId,
      ultima_actualizacion: new Date()
    }
  });
}

/**
 * 🔄 Actualizar oauth_provider
 * 
 * ¿POR QUÉ? Para cambiar de 'email' a 'both' cuando vinculamos Google
 * 
 * Casos:
 * - 'email' → 'both' (usuario tradicional ahora también tiene Google)
 * - 'google' → 'both' (usuario Google ahora también tiene password)
 */
async updateOAuthProvider(
  userId: string, 
  provider: 'email' | 'google' | 'both'
): Promise<usuarios_principales> {
  console.log(`🔄 UserRepository - Actualizando oauth_provider a '${provider}' para usuario ${userId}`);
  
  return this.prisma.usuarios_principales.update({
    where: { id: userId },
    data: {
      oauth_provider: provider,
      ultima_actualizacion: new Date()
    }
  });
}
/**
 * ✉️ Marcar email como verificado
 * 
 * ¿CUÁNDO SE USA? 
 * - Cuando vinculamos Google (Google ya verificó el email)
 * - Cuando el usuario completa verificación por email
 */
async markEmailAsVerified(userId: string): Promise<usuarios_principales> {
  console.log(`✉️ UserRepository - Marcando email como verificado para usuario ${userId}`);
  
  return this.prisma.usuarios_principales.update({
    where: { id: userId },
    data: {
      email_verificado: true,
      ultima_actualizacion: new Date()
    }
  });
}
}