# ==========================================
# MS-YOURDASHBOARD-ORCHESTRATOR - DOCKERFILE
# Multi-stage: Development & Production
# ==========================================

# ==========================================
# STAGE 1: DEVELOPMENT
# Hot-reload con NestJS
# ==========================================
FROM node:22-alpine AS development

LABEL maintainer="YourDashboard Team"
LABEL description="MS-Orchestrator Development - Hot reload sin Prisma"
LABEL version="2.0"

# Instalar dependencias de sistema
RUN apk add --no-cache \
    libc6-compat \
    curl

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias (dev + prod)
RUN npm ci

# Copiar el código fuente
COPY . .

# Exponer puerto
EXPOSE 3003

# Health check para desarrollo
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:3003/health || exit 1

# Comando de desarrollo con hot-reload
CMD ["npm", "run", "start:dev"]


# ==========================================
# STAGE 2: PRODUCTION
# Imagen optimizada para deploy
# ==========================================
FROM node:22-alpine AS production

LABEL maintainer="YourDashboard Team"
LABEL description="MS-Orchestrator Production - BFF optimizado"
LABEL version="2.0"

# Instalar dependencias de runtime
RUN apk add --no-cache \
    libc6-compat \
    curl \
    tini

WORKDIR /app

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copiar package files
COPY package*.json ./

# Instalar TODAS las dependencias primero (para compilar)
RUN npm ci

# Copiar código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# Limpiar e instalar SOLO dependencias de producción
RUN npm ci --only=production --ignore-scripts && \
    npm cache clean --force

# Cambiar ownership al usuario no-root
RUN chown -R nestjs:nodejs /app

# Cambiar a usuario no-root
USER nestjs

# Exponer puerto
EXPOSE 3003

# Health check mejorado
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:3003/health || exit 1

# Usar tini para mejor manejo de señales
ENTRYPOINT ["/sbin/tini", "--"]

# Comando de producción
CMD ["node", "dist/main.js"]