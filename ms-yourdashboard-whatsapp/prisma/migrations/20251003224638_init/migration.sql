-- CreateTable
CREATE TABLE "audit_eliminaciones" (
    "tabla" VARCHAR(50),
    "registro_id" INTEGER,
    "datos_eliminados" JSONB,
    "usuario_bd" VARCHAR(50),
    "fecha_eliminacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "audit_eliminaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "phone" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100),
    "last_message" TEXT,
    "last_message_date" TIMESTAMP(6) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "whatsapp_account_id" UUID,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cuentas_gmail_asociadas" (
    "email_gmail" VARCHAR(255) NOT NULL,
    "nombre_cuenta" VARCHAR(255) NOT NULL,
    "google_id" VARCHAR(255) NOT NULL,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "token_expira_en" TIMESTAMP(6),
    "fecha_conexion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "ultima_sincronizacion" TIMESTAMP(6),
    "esta_activa" BOOLEAN DEFAULT true,
    "alias_personalizado" VARCHAR(100),
    "consecutive_zero_syncs" INTEGER DEFAULT 0,
    "backfill_checkpoint_date" DATE,
    "backfill_page_token" VARCHAR(255),
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_principal_id" UUID,

    CONSTRAINT "cuentas_gmail_asociadas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails_completos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cuerpo_texto" TEXT,
    "cuerpo_html" TEXT,
    "fecha_guardado" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "gmail_message_id" VARCHAR(255) NOT NULL,
    "headers_completos" JSONB,
    "adjuntos" JSONB,
    "thread_id" VARCHAR(255),
    "labels_completos" JSONB,
    "email_sincronizado_id" UUID,
    "cuenta_gmail_id" UUID,
    "usuario_principal_id" UUID,

    CONSTRAINT "emails_completos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails_sincronizados" (
    "gmail_message_id" VARCHAR(255) NOT NULL,
    "asunto" TEXT,
    "remitente_email" TEXT,
    "remitente_nombre" TEXT,
    "destinatario_email" TEXT,
    "fecha_recibido" TIMESTAMP(6),
    "esta_leido" BOOLEAN DEFAULT false,
    "tiene_adjuntos" BOOLEAN DEFAULT false,
    "etiquetas_gmail" TEXT[],
    "tamano_bytes" INTEGER,
    "fecha_sincronizado" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "replied_at" TIMESTAMP(6),
    "days_without_reply" INTEGER DEFAULT 0,
    "traffic_light_status" VARCHAR(10) DEFAULT 'green',
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cuenta_gmail_id" UUID,

    CONSTRAINT "emails_sincronizados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events_sincronizados" (
    "google_event_id" VARCHAR(255) NOT NULL,
    "summary" TEXT,
    "location" TEXT,
    "description" TEXT,
    "start_time" TIMESTAMPTZ(6),
    "end_time" TIMESTAMPTZ(6),
    "attendees" TEXT[],
    "fecha_sincronizado" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cuenta_gmail_id" UUID,

    CONSTRAINT "events_sincronizados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "conversation_id" UUID NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "message" TEXT NOT NULL,
    "timestamp" TIMESTAMP(6) NOT NULL,
    "canal" VARCHAR(20) NOT NULL,
    "respondido" BOOLEAN NOT NULL DEFAULT false,
    "categoria" VARCHAR(50),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "whatsapp_account_id" UUID,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sesiones_jwt" (
    "jwt_token" TEXT NOT NULL,
    "expira_en" TIMESTAMP(6) NOT NULL,
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "esta_activa" BOOLEAN DEFAULT true,
    "ip_origen" INET,
    "user_agent" TEXT,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuario_principal_id" UUID,

    CONSTRAINT "sesiones_jwt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_principales" (
    "email" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "ultima_actualizacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "estado" VARCHAR(20) DEFAULT 'activo',
    "email_verificado" BOOLEAN DEFAULT false,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "usuarios_principales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "whatsapp_accounts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "phone" VARCHAR(50) NOT NULL,
    "nombre_cuenta" VARCHAR(255) NOT NULL,
    "token" TEXT NOT NULL,
    "alias_personalizado" VARCHAR(255),
    "phone_number_id" VARCHAR(255) NOT NULL,
    "fecha_creado" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "estado" VARCHAR(20) DEFAULT 'activo',
    "usuario_principal_id" UUID,
    "token_expires_at" TIMESTAMP(6),

    CONSTRAINT "whatsapp_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "id" UUID NOT NULL,
    "usuario_principal_id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "expira_en" TIMESTAMP(6) NOT NULL,
    "fecha_creacion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_conversations_last_message_date" ON "conversations"("last_message_date" DESC);

-- CreateIndex
CREATE INDEX "idx_conversations_phone" ON "conversations"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "cuentas_gmail_asociadas_google_id_key" ON "cuentas_gmail_asociadas"("google_id");

-- CreateIndex
CREATE INDEX "idx_cuentas_gmail_activa" ON "cuentas_gmail_asociadas"("esta_activa");

-- CreateIndex
CREATE INDEX "idx_cuentas_gmail_email" ON "cuentas_gmail_asociadas"("email_gmail");

-- CreateIndex
CREATE INDEX "idx_cuentas_gmail_google_id" ON "cuentas_gmail_asociadas"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "cuentas_gmail_asociadas_usuario_email_unique" ON "cuentas_gmail_asociadas"("usuario_principal_id", "email_gmail");

-- CreateIndex
CREATE INDEX "idx_emails_completos_gmail_id" ON "emails_completos"("gmail_message_id");

-- CreateIndex
CREATE INDEX "idx_emails_esta_leido" ON "emails_sincronizados"("esta_leido");

-- CreateIndex
CREATE INDEX "idx_emails_fecha_recibido" ON "emails_sincronizados"("fecha_recibido" DESC);

-- CreateIndex
CREATE INDEX "idx_emails_gmail_message_id" ON "emails_sincronizados"("gmail_message_id");

-- CreateIndex
CREATE INDEX "idx_emails_remitente" ON "emails_sincronizados"("remitente_email");

-- CreateIndex
CREATE INDEX "idx_emails_traffic_light" ON "emails_sincronizados"("traffic_light_status", "days_without_reply");

-- CreateIndex
CREATE UNIQUE INDEX "emails_sincronizados_cuenta_gmail_message_unique" ON "emails_sincronizados"("cuenta_gmail_id", "gmail_message_id");

-- CreateIndex
CREATE INDEX "idx_events_google_id" ON "events_sincronizados"("google_event_id");

-- CreateIndex
CREATE INDEX "idx_events_start_time" ON "events_sincronizados"("start_time");

-- CreateIndex
CREATE INDEX "idx_events_sync_date" ON "events_sincronizados"("fecha_sincronizado");

-- CreateIndex
CREATE UNIQUE INDEX "events_sincronizados_cuenta_gmail_google_event_unique" ON "events_sincronizados"("cuenta_gmail_id", "google_event_id");

-- CreateIndex
CREATE INDEX "idx_messages_conversation" ON "messages"("conversation_id");

-- CreateIndex
CREATE INDEX "idx_messages_timestamp" ON "messages"("timestamp" DESC);

-- CreateIndex
CREATE INDEX "idx_sesiones_activa" ON "sesiones_jwt"("esta_activa");

-- CreateIndex
CREATE INDEX "idx_sesiones_expira_en" ON "sesiones_jwt"("expira_en");

-- CreateIndex
CREATE INDEX "idx_sesiones_jwt_token" ON "sesiones_jwt"("jwt_token");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_principales_email_key" ON "usuarios_principales"("email");

-- CreateIndex
CREATE INDEX "idx_usuarios_principales_email" ON "usuarios_principales"("email");

-- CreateIndex
CREATE INDEX "idx_usuarios_principales_estado" ON "usuarios_principales"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "whatsapp_accounts_phone_number_id_key" ON "whatsapp_accounts"("phone_number_id");

-- CreateIndex
CREATE UNIQUE INDEX "password_reset_tokens_token_key" ON "password_reset_tokens"("token");

-- CreateIndex
CREATE INDEX "password_reset_tokens_email_idx" ON "password_reset_tokens"("email");

-- CreateIndex
CREATE INDEX "password_reset_tokens_token_idx" ON "password_reset_tokens"("token");

-- CreateIndex
CREATE INDEX "password_reset_tokens_expira_en_idx" ON "password_reset_tokens"("expira_en");

-- AddForeignKey
ALTER TABLE "conversations" ADD CONSTRAINT "fk_conversations_whatsapp_account" FOREIGN KEY ("whatsapp_account_id") REFERENCES "whatsapp_accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cuentas_gmail_asociadas" ADD CONSTRAINT "fk_cuentas_gmail_usuario_principal" FOREIGN KEY ("usuario_principal_id") REFERENCES "usuarios_principales"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emails_completos" ADD CONSTRAINT "emails_completos_cuenta_gmail_id_fkey" FOREIGN KEY ("cuenta_gmail_id") REFERENCES "cuentas_gmail_asociadas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emails_completos" ADD CONSTRAINT "emails_completos_usuario_principal_id_fkey" FOREIGN KEY ("usuario_principal_id") REFERENCES "usuarios_principales"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emails_completos" ADD CONSTRAINT "fk_emails_completos_sincronizados" FOREIGN KEY ("email_sincronizado_id") REFERENCES "emails_sincronizados"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emails_sincronizados" ADD CONSTRAINT "fk_emails_cuenta_gmail" FOREIGN KEY ("cuenta_gmail_id") REFERENCES "cuentas_gmail_asociadas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "events_sincronizados" ADD CONSTRAINT "events_sincronizados_cuenta_gmail_id_fkey" FOREIGN KEY ("cuenta_gmail_id") REFERENCES "cuentas_gmail_asociadas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "fk_messages_conversation" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "fk_messages_whatsapp_account" FOREIGN KEY ("whatsapp_account_id") REFERENCES "whatsapp_accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sesiones_jwt" ADD CONSTRAINT "fk_sesiones_usuario_principal" FOREIGN KEY ("usuario_principal_id") REFERENCES "usuarios_principales"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "whatsapp_accounts" ADD CONSTRAINT "fk_whatsapp_usuario" FOREIGN KEY ("usuario_principal_id") REFERENCES "usuarios_principales"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "password_reset_tokens" ADD CONSTRAINT "password_reset_tokens_usuario_principal_id_fkey" FOREIGN KEY ("usuario_principal_id") REFERENCES "usuarios_principales"("id") ON DELETE CASCADE ON UPDATE CASCADE;
