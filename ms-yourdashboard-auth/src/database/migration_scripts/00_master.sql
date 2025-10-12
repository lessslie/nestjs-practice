-- =====================================
-- YOURDASHBOARD - SCRIPT MAESTRO DE MIGRACIÓN UUID
-- =====================================
-- Archivo: 00_master.sql
-- Descripción: Ejecuta todos los scripts de migración en el orden correcto
-- Basado en las tablas reales funcionando en producción

-- =====================================
-- INFORMACIÓN IMPORTANTE
-- =====================================
-- Este script crea una base de datos NUEVA con estructura UUID
-- Para migrar datos existentes, usar scripts de migración separados
-- 
-- ORDEN DE EJECUCIÓN:
-- 1. Base de datos
-- 2. Tablas sin dependencias (usuarios_principales, whatsapp_accounts)
-- 3. Tablas con 1 nivel de dependencia
-- 4. Tablas con múltiples dependencias
-- 5. Auditoría
-- 6. Funciones e índices

\echo '🎯 INICIANDO MIGRACIÓN YOURDASHBOARD UUID...'
\echo '📁 Ejecutando scripts en orden...'

-- =====================================
-- PASO 1: CREAR BASE DE DATOS
-- =====================================
\echo '📊 [1/13] Creando base de datos...'
\ir /migration_scripts/01_create_database.sql

-- =====================================
-- PASO 2: TABLAS RAÍZ (sin dependencias)
-- =====================================
\echo '👤 [2/13] Creando usuarios_principales...'
\ir /migration_scripts/02_usuarios_principales.sql

\echo '📱 [3/13] Creando whatsapp_accounts...'
\ir /migration_scripts/08_whatsapp_accounts.sql

-- =====================================
-- PASO 3: TABLAS NIVEL 1 (1 dependencia)
-- =====================================
\echo '📧 [4/13] Creando cuentas_gmail_asociadas...'
\ir /migration_scripts/03_cuentas_gmail_asociadas.sql

\echo '🔐 [5/13] Creando sesiones_jwt...'
\ir /migration_scripts/07_sesiones_jwt.sql

\echo '💬 [6/13] Creando conversations...'
\ir /migration_scripts/09_conversations.sql

-- =====================================
-- PASO 4: TABLAS NIVEL 2 (múltiples dependencias)
-- =====================================
\echo '📨 [7/13] Creando emails_sincronizados...'
\ir /migration_scripts/04_emails_sincronizados.sql

\echo '📅 [8/13] Creando events_sincronizados...'
\ir /migration_scripts/06_events_sincronizados.sql

\echo '💭 [9/13] Creando messages...'
\ir /migration_scripts/10_messages.sql

-- =====================================
-- PASO 5: TABLAS COMPLEJAS
-- =====================================
\echo '📄 [10/13] Creando emails_completos...'
\ir /migration_scripts/05_emails_completos.sql

-- =====================================
-- PASO 6: AUDITORÍA
-- =====================================
\echo '🔍 [11/13] Creando audit_eliminaciones...'
\ir /migration_scripts/11_audit_eliminaciones.sql

-- =====================================
-- PASO 7: FUNCIONES Y PROCEDIMIENTOS
-- =====================================
\echo '⚙️ [12/13] Creando funciones...'
\ir /migration_scripts/12_functions.sql

-- =====================================
-- PASO 8: ÍNDICES OPTIMIZADOS
-- =====================================
\echo '🚀 [13/13] Creando índices...'
\ir /migration_scripts/13_indexes.sql

-- =====================================
-- VERIFICACIÓN FINAL
-- =====================================
\echo '✅ MIGRACIÓN COMPLETADA!'
\echo '📊 Verificando estructura...'

-- Mostrar todas las tablas creadas
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables 
WHERE schemaname = 'public' 
ORDER BY tablename;

\echo '📈 Estadísticas del sistema:'
-- Mostrar estadísticas (si la función existe)
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.routines 
        WHERE routine_name = 'obtener_estadisticas_sistema'
    ) THEN
        PERFORM * FROM obtener_estadisticas_sistema();
        RAISE NOTICE 'Función de estadísticas disponible';
    END IF;
END $$;

\echo '🎉 ¡BASE DE DATOS YOURDASHBOARD UUID LISTA!'
\echo '📋 Próximos pasos:'
\echo '   1. Verificar que todas las tablas están creadas'
\echo '   2. Probar conexiones desde la aplicación'
\echo '   3. Migrar datos existentes si es necesario'
\echo ''
\echo '💡 Para ver todas las tablas:'
\echo '   \\dt'
\echo ''
\echo '💡 Para ver funciones disponibles:'
\echo '   \\df'