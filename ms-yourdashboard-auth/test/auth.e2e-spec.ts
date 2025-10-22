import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/database/prisma.service';

describe('Auth E2E Tests', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  // ================================
  // SETUP: Antes de TODOS los tests
  // ================================
  beforeAll(async () => {
    // 1️⃣ Crear la app NestJS completa
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    // 2️⃣ Configurar pipes (igual que en main.ts)
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();

    // 3️⃣ Obtener instancia de Prisma
    prisma = app.get<PrismaService>(PrismaService);

    // 4️⃣ Limpiar la BD antes de empezar
    await prisma.$executeRaw`TRUNCATE TABLE usuarios_principales CASCADE`;
    
    console.log('✅ Setup completado - BD limpia');
  });

  // ================================
  // CLEANUP: Después de TODOS los tests
  // ================================
  afterAll(async () => {
    try {
      // Limpiar BD
      await prisma.$executeRaw`TRUNCATE TABLE usuarios_principales CASCADE`;
      
      console.log('✅ Cleanup completado');
    } catch (error) {
      console.error('Error en cleanup:', error);
    } finally {
      // Cerrar conexiones en orden correcto
      await prisma.$disconnect();
      await app.close();
      
      // Dar tiempo para que cierren las conexiones
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  });

  // ================================
  // 🧪 TESTS DE REGISTRO
  // ================================
  describe('POST /auth/register', () => {
    
    it('debería registrar un nuevo usuario exitosamente', async () => {
      const nuevoUsuario = {
        email: 'test@example.com',
        password: 'Test123!',
        nombre: 'Usuario Test',
      };

      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send(nuevoUsuario)
        .expect(201);

      // ✅ Verificar estructura de respuesta
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('user');
      
      // ✅ Verificar datos del usuario
      expect(response.body.user).toMatchObject({
        email: nuevoUsuario.email,
        name: nuevoUsuario.nombre,
        isEmailVerified: false,
      });
      
      // ✅ Verificar que el usuario se insertó en BD
      const usuarioEnBD = await prisma.usuarios_principales.findUnique({
        where: { email: nuevoUsuario.email },
      });
      
      expect(usuarioEnBD).not.toBeNull();
      expect(usuarioEnBD?.email).toBe(nuevoUsuario.email);
      expect(usuarioEnBD?.nombre).toBe(nuevoUsuario.nombre);
      expect(usuarioEnBD?.estado).toBe('activo');
      
      console.log('✅ Test: Registro exitoso - PASÓ');
    });

    it('debería rechazar email duplicado (constraint UNIQUE de BD)', async () => {
      const usuario = {
        email: 'duplicado@example.com',
        password: 'Test123!',
        nombre: 'Usuario Duplicado',
      };

      // 1️⃣ Primer registro - DEBE FUNCIONAR
      const primeraRespuesta = await request(app.getHttpServer())
        .post('/auth/register')
        .send(usuario)
        .expect(201);

      expect(primeraRespuesta.body.success).toBe(true);
      expect(primeraRespuesta.body.token).toBeDefined();

      console.log('✅ Primer registro exitoso');

      // 2️⃣ Segundo registro con mismo email - DEBE FALLAR
      const segundaRespuesta = await request(app.getHttpServer())
        .post('/auth/register')
        .send(usuario)
        .expect(409); // Conflict

      // ✅ Verificar que retorna error apropiado
      expect(segundaRespuesta.body.codigo).toBe('EMAIL_YA_EXISTE');
      expect(segundaRespuesta.body.mensaje).toBeDefined();

      // Verificar que el mensaje menciona email
      const mensaje = segundaRespuesta.body.mensaje.toLowerCase();
      expect(mensaje.includes('email')).toBe(true);

      // ✅ Verificar que solo hay UN usuario en BD
      const usuariosEnBD = await prisma.usuarios_principales.findMany({
        where: { email: usuario.email },
      });

      expect(usuariosEnBD).toHaveLength(1);

      console.log('✅ Test: Email duplicado - PASÓ (constraint de BD funciona)');
    });

    it('debería rechazar email con formato inválido', async () => {
      const usuarioInvalido = {
        email: 'esto-no-es-un-email',
        password: 'Test123!',
        nombre: 'Usuario Test',
      };

      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send(usuarioInvalido)
        .expect(400); // Bad Request

      // ✅ Verificar mensaje de validación
      expect(response.body.message).toBeDefined();
      
      // Debe mencionar "email" en el error
      const mensajes = Array.isArray(response.body.message) 
        ? response.body.message.join(' ').toLowerCase()
        : response.body.message.toLowerCase();
      
      expect(mensajes.includes('email')).toBe(true);

      console.log('✅ Test: Email inválido - PASÓ (DTO validation funciona)');
    });

    it('debería rechazar password vacía o faltante', async () => {
      const usuarioSinPassword = {
        email: 'usuario@example.com',
        nombre: 'Usuario Test',
      };
    
      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send(usuarioSinPassword)
        .expect(400);
    
      expect(response.body.message).toBeDefined();
      
      const mensajes = Array.isArray(response.body.message) 
        ? response.body.message.join(' ').toLowerCase()
        : response.body.message.toLowerCase();
      
      expect(mensajes.includes('password')).toBe(true);
    
      console.log('✅ Test: Password vacía - PASÓ (DTO validation funciona)');
    });

  }); 

  // ================================
  // 🧪 TESTS DE LOGIN
  // ================================
  describe('POST /auth/login', () => {
    
    it('debería hacer login exitoso y retornar token + perfil', async () => {
      const usuarioRegistro = {
        email: 'login-exitoso-unique@example.com',
        password: 'Test1234!',
        nombre: 'Usuario Login Test',
      };

      await request(app.getHttpServer())
        .post('/auth/register')
        .send(usuarioRegistro)
        .expect(201);

      console.log('✅ Usuario creado para test de login');

      const credenciales = {
        email: 'login-exitoso-unique@example.com',
        password: 'Test1234!',
      };

      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send(credenciales)
        .expect(200);

      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('user');
      expect(response.body.user).toMatchObject({
        email: usuarioRegistro.email,
        name: usuarioRegistro.nombre,
      });
      expect(response.body.token).toBeTruthy();
      expect(response.body.token.length).toBeGreaterThan(20);

      console.log('✅ Test: Login exitoso - PASÓ');
    });

    it('debería rechazar login con password incorrecta', async () => {
      const usuarioRegistro = {
        email: 'login-password-error-unique@example.com',
        password: 'Test1234!',
        nombre: 'Usuario Test',
      };

      await request(app.getHttpServer())
        .post('/auth/register')
        .send(usuarioRegistro)
        .expect(201);

      const credencialesIncorrectas = {
        email: 'login-password-error-unique@example.com',
        password: 'Wrong9999!',
      };

      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send(credencialesIncorrectas)
        .expect(401);

      expect(response.body.codigo).toBe('CREDENCIALES_INVALIDAS');
      expect(response.body.mensaje).toBeDefined();

      console.log('✅ Test: Password incorrecta - PASÓ');
    });

    it('debería rechazar login con email que no existe', async () => {
      const credencialesInexistentes = {
        email: 'usuario-nunca-existio@example.com',
        password: 'Test1234!',
      };

      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send(credencialesInexistentes)
        .expect(401);

      expect(response.body.codigo).toBe('CREDENCIALES_INVALIDAS');
      expect(response.body.mensaje).toBeDefined();

      console.log('✅ Test: Email no existe - PASÓ');
    });
    it('debería rechazar login sin email o password', async () => {
      const credencialesSinEmail = {
        password: 'Test1234!',
      };
    
      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send(credencialesSinEmail)
        .expect(400);
    
      expect(response.body.message).toBeDefined();
      
      const mensajes = Array.isArray(response.body.message) 
        ? response.body.message.join(' ').toLowerCase()
        : response.body.message.toLowerCase();
      
      expect(mensajes.includes('email')).toBe(true);
    
      console.log('✅ Test: Login sin email - PASÓ (DTO validation funciona)');
    });

  });


  // ================================
// 🧪 TESTS DE PERFIL
// ================================
describe('GET /auth/me', () => {
  
  it('debería obtener perfil con token válido', async () => {
    // 1️⃣ Crear usuario y hacer login para obtener token
    const usuario = {
      email: 'perfil-test@example.com',
      password: 'Test1234!',
      nombre: 'Usuario Perfil Test',
    };

    await request(app.getHttpServer())
      .post('/auth/register')
      .send(usuario)
      .expect(201);

    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: usuario.email,
        password: usuario.password,
      })
      .expect(200);

    const token = loginResponse.body.token;

    // 2️⃣ Obtener perfil con el token
    const response = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    // ✅ Verificar estructura de respuesta
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('usuario');
    expect(response.body.usuario).toMatchObject({
      email: usuario.email,
      nombre: usuario.nombre,
      estado: 'activo',
      email_verificado: false,
    });

    console.log('✅ Test: Perfil con token válido - PASÓ');
  });

  it('debería rechazar acceso sin token', async () => {
    const response = await request(app.getHttpServer())
      .get('/auth/me')
      .expect(401);

    // ✅ Verificar mensaje de error
    expect(response.body.message).toBeDefined();

    console.log('✅ Test: Perfil sin token - PASÓ');
  });

  it('debería rechazar token inválido', async () => {
    const tokenInvalido = 'token.invalido.fake';

    const response = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${tokenInvalido}`)
      .expect(401);

    // ✅ Verificar mensaje de error
    expect(response.body.message).toBeDefined();

    console.log('✅ Test: Token inválido - PASÓ');
  });

}); 



// ================================
// 🧪 TESTS DE LOGOUT
// ================================
describe('POST /auth/logout', () => {
  
  it('debería hacer logout exitoso e invalidar sesión', async () => {
    // 1️⃣ Crear usuario y hacer login
    const usuario = {
      email: 'logout-test@example.com',
      password: 'Test1234!',
      nombre: 'Usuario Logout Test',
    };
  
    await request(app.getHttpServer())
      .post('/auth/register')
      .send(usuario)
      .expect(201);
  
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: usuario.email,
        password: usuario.password,
      })
      .expect(200);
  
    const token = loginResponse.body.token;
  
    // 2️⃣ Hacer logout
    const response = await request(app.getHttpServer())
      .post('/auth/logout')
      .set('Authorization', `Bearer ${token}`)
      .expect(200); // ← API retorna 201 (aunque debería ser 200)
  
    // ✅ Verificar respuesta de logout (solo verificar que tenga success)
    expect(response.body).toHaveProperty('success', true);
    
    // 3️⃣ Verificar que el token ya no funciona después del logout
    const perfilResponse = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${token}`)
      .expect(401);
  
    // El perfil debe rechazar el token invalidado
    expect(perfilResponse.body.message).toBeDefined();
  
    console.log('✅ Test: Logout exitoso - PASÓ (sesión invalidada)');
  });

  it('debería rechazar logout sin token', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/logout')
      .expect(401);

    // ✅ Verificar mensaje de error
    expect(response.body.message).toBeDefined();

    console.log('✅ Test: Logout sin token - PASÓ');
  });

}); 


  // ================================
  // 🧹 Limpiar después de cada test
  // ================================
  afterEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE usuarios_principales CASCADE`;
  });

}); 