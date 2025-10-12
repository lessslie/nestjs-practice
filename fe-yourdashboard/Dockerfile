# ==========================================
# STAGE 1: Dependencies
# ==========================================
FROM node:22-alpine AS deps

LABEL maintainer="YourDashboard Team"
LABEL description="Frontend Next.js - YourDashboard"
LABEL version="2.0"

RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# ==========================================
# STAGE 2: Builder - Compilación de Next.js
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar dependencias desde deps
COPY --from=deps /app/node_modules/ ./node_modules/

# Copiar código fuente
COPY . .

# Variables de entorno para build (pueden ser sobrescritas)
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build de Next.js con standalone output
RUN npm run build

# ==========================================
# STAGE 3: Runner - Producción
# ==========================================
FROM node:22-alpine AS runner

LABEL maintainer="YourDashboard Team"
LABEL description="Frontend Next.js Runtime - Standalone optimizado"

# Instalar dependencias mínimas
RUN apk add --no-cache \
    curl \
    tini \
    libc6-compat

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copiar archivos públicos y standalone build
COPY --from=builder /app/public/ ./public/
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/ ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static/ ./.next/static/

# Cambiar a usuario no-root
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:3000/api/health || curl -f http://localhost:3000 || exit 1

# Usar tini
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "server.js"]