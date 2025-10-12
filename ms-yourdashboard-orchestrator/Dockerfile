# ==========================================
# STAGE 1: Builder - Compilación
# ==========================================
FROM node:22-alpine AS builder

LABEL maintainer="YourDashboard Team"
LABEL description="MS-Orchestrator - BFF que coordina microservicios"
LABEL version="2.0"

RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Compilar TypeScript (SIN Prisma por ahora)
RUN npm run build

# ==========================================
# STAGE 2: Runner - Producción
# ==========================================
FROM node:22-alpine AS runner

LABEL maintainer="YourDashboard Team"
LABEL description="MS-Orchestrator Runtime - Coordina microservicios + Redis Cache"

# Instalar curl para health checks
RUN apk add --no-cache \
    libc6-compat \
    curl \
    tini

WORKDIR /app

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copiar package files
COPY package*.json ./

# Instalar solo producción (sin scripts porque no hay Prisma)
RUN npm ci --only=production --ignore-scripts && \
    npm cache clean --force

# Copiar código compilado
COPY --from=builder --chown=nestjs:nodejs /app/dist/ ./dist/

# Cambiar a usuario no-root
USER nestjs

EXPOSE 3003

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:3003/health || exit 1

# Usar tini
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "dist/main.js"]