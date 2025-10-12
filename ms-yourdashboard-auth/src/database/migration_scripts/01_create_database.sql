-- =====================================
-- VERIFICAR BASE DE DATOS
-- =====================================
-- Archivo: 01_create_database.sql
-- NOTA: Docker Compose ya creó la BD con POSTGRES_DB
--       Solo verificamos que estamos conectados correctamente

-- Verificar que estamos en la BD correcta
SELECT 
    current_database() as base_datos_actual,
    'Base de datos lista para inicialización' as estado,
    NOW() as timestamp;

-- Ya estamos conectados a ms_yourdashboard_auth gracias a Docker
-- No es necesario hacer \c ms_yourdashboard_auth