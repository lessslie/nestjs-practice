# ==========================================
# STAGE 1: Builder - Compilación
# ==========================================
FROM node:22-alpine AS builder

LABEL maintainer="YourDashboard Team"
LABEL description="MS-Auth - Microservicio de autenticación con JWT y OAuth"
LABEL version="2.0"

# Instalar dependencias de sistema necesarias para Prisma
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
COPY prisma ./prisma/

# Instalar todas las dependencias (incluyendo dev para build)
RUN npm ci

# Copiar código fuente
COPY . .

# Generar Prisma Client + Compilar TypeScript
RUN npx prisma generate && \
    npm run build

# ==========================================
# STAGE 2: Runner - Producción
# ==========================================
FROM node:22-alpine AS runner

LABEL maintainer="YourDashboard Team"
LABEL description="MS-Auth Runtime - Producción optimizada con Prisma"

# Instalar solo dependencias necesarias para runtime
RUN apk add --no-cache \
    openssl \
    libc6-compat \
    curl \
    tini

WORKDIR /app

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copiar package files
COPY package*.json ./

# Copiar prisma schema ANTES de npm ci
COPY --from=builder /app/prisma ./prisma

# Instalar dependencias sin ejecutar scripts (evita error de prisma generate)
RUN npm ci --only=production --ignore-scripts && \
    npm cache clean --force

# AHORA sí generar Prisma client
RUN npx prisma generate

# Copiar código compilado desde builder
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist

# Cambiar a usuario no-root
USER nestjs

EXPOSE 3001

# Health check mejorado
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:3001/health || exit 1

# Usar tini para mejor manejo de señales
ENTRYPOINT ["/sbin/tini", "--"]

# Comando de inicio
CMD ["node", "dist/main.js"]