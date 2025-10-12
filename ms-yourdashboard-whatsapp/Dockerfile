# ==========================================
# STAGE 1: Builder - Compilación
# ==========================================
FROM node:22-alpine AS builder

LABEL maintainer="YourDashboard Team"
LABEL description="MS-WhatsApp - Integración con WhatsApp Business API"
LABEL version="2.0"

# Instalar dependencias de sistema necesarias para Prisma
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependencias
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
LABEL description="MS-WhatsApp Runtime - Producción optimizada con Prisma"

# Instalar dependencias de sistema
RUN apk add --no-cache \
    openssl \
    libc6-compat \
    curl \
    tini

WORKDIR /app

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copiar package files
COPY package*.json ./

# Copiar prisma schema ANTES de npm ci
COPY --from=builder /app/prisma ./prisma

# Instalar dependencias sin ejecutar scripts
RUN npm ci --only=production --ignore-scripts && \
    npm cache clean --force

# Generar Prisma client
RUN npx prisma generate

# Copiar código compilado
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist

# Cambiar a usuario no-root
USER nestjs

EXPOSE 3004

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:3004/health || exit 1

# Usar tini
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "dist/main.js"]