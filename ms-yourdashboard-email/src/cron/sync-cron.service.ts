// ms-yourdashboard-email/src/cron/sync-cron.service.ts
import { forwardRef, Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { GmailAccountRepository } from '../database/repositories/gmail-account.repository';
import { SyncService } from '../emails/sync.service';


@Injectable()
export class SyncCronService implements OnModuleInit {
  private readonly logger = new Logger(SyncCronService.name);
  private readonly isEnabled: boolean;
  private readonly maxEmailsPerAccount: number;
  private readonly maxAccountsPerRun: number;
  private readonly activeDays: number;

  onModuleInit() {
    this.logger.log('🚀 CRON Service inicializado!');
    this.logger.log(`📅 CRON está ${this.isEnabled ? 'ACTIVADO' : 'DESACTIVADO'}`);
    if (this.isEnabled) {
      this.logger.log('⏰ Sync programado: CADA 15 MINUTOS( trae los emails nuevos de cuentas activas)');
    }
  }

 constructor(
    private readonly configService: ConfigService,
    private readonly gmailAccountRepository: GmailAccountRepository,
    @Inject(forwardRef(() => SyncService))
    private readonly syncService: SyncService,
  ) {
    console.log('🚨 CRON SERVICE CONSTRUCTOR LLAMADO! 🚨');
    // Cargar configuración
    this.isEnabled = this.configService.get('SYNC_CRON_ENABLED') === 'true';
    this.maxEmailsPerAccount = parseInt(this.configService.get('SYNC_MAX_EMAILS_PER_ACCOUNT') || '500');
    this.maxAccountsPerRun = parseInt(this.configService.get('SYNC_MAX_ACCOUNTS_PER_RUN') || '2000');
    this.activeDays = parseInt(this.configService.get('SYNC_ACTIVE_ACCOUNTS_DAYS') || '7');

    if (this.isEnabled) {
      this.logger.log('✅ CRON Sync automático ACTIVADO');
      this.logger.log(`📧 Máximo ${this.maxEmailsPerAccount} emails por cuenta`);
      this.logger.log(`👥 Máximo ${this.maxAccountsPerRun} cuentas por ejecución`);
    } else {
      this.logger.warn('❌ CRON Sync automático DESACTIVADO');
    }
  }

  // CRON para sincronización automática de emails nuevos
 // DÍAS DE SEMANA (Lunes a Viernes)
@Cron('*/15 * * * 1-5')  // Por defecto cada 15 min en weekdays
async syncWeekdays() {
  if (!this.isEnabled) {
    return;
  }
  
  const now = new Date();
  const dayOfWeek = now.getDay();
  
  // Solo ejecutar en días de semana (1-5)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    this.logger.log('🔄 [CRON WEEKDAY] Iniciando sync automático(solo trae emails nuevos)');
    await this.performSync('weekday');
  }
}

//  FINES DE SEMANA (Sábado y Domingo)
@Cron('0 */4 * * 0,6')  // Por defecto cada 4 horas en weekends
async syncWeekends() {
  if (!this.isEnabled) {
    return;
  }
  
  const now = new Date();
  const dayOfWeek = now.getDay();
  
  // Solo ejecutar en fines de semana (0=domingo, 6=sábado)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    this.logger.log('🔄 [CRON WEEKEND] Iniciando sync automático');
    await this.performSync('weekend');
  }
}
   //***************
  // CRON para backfill de emails históricos("viejos")
  //********************************* */

// @Cron('*/2 * * * *')  // Cada 2 minuto (ajustar según necesites)
// async backfillHistoricalEmails() {
//   if (!this.isEnabled) return;

//   this.logger.log('📚 [CRON BACKFILL] Iniciando carga de emails históricos');
//   const startTime = Date.now();

//   try {
//     // Obtener una cuenta con backfill pendiente
//     const accounts = await this.databaseService.query(`
//       SELECT 
//         cga.id,
//         cga.email_gmail,
//         cga.access_token,
//         cga.consecutive_zero_syncs,
//         cga.backfill_page_token
//       FROM cuentas_gmail_asociadas cga
//       WHERE cga.esta_activa = true
//         AND cga.consecutive_zero_syncs < 2
//       ORDER BY cga.ultima_sincronizacion ASC NULLS FIRST
//       LIMIT 1
//     `);

//     if (accounts.rows.length === 0) {
//       this.logger.log('✅ No hay cuentas pendientes de backfill');
//       return;
//     }

//     const account = accounts.rows[0];
//     this.logger.log(`🔄 Backfill para ${account.email_gmail}`);
    
//     // Mostrar si tiene page token (continuación) o es inicio
//     if (account.backfill_page_token) {
//       this.logger.log(`📄 Continuando desde página anterior (token: ${account.backfill_page_token.substring(0, 20)}...)`);
//     } else {
//       this.logger.log(`🆕 Iniciando backfill desde el principio`);
//     }

//     // Configurar opciones de sync con pageToken si existe
//     const syncOptions = {
//       maxEmails: 500,  // Traer 500 por vez
//       pageToken: account.backfill_page_token || undefined,  // Token de paginación si existe
//       fullSync: true  // Indicar que es sync completo, no incremental
//     };

//     // Intentar sync con reintentos por token expirado
//     let attempts = 0;
//     let syncResult;

//     while (attempts < 2) {
//       try {
//         syncResult = await this.syncService.syncEmailsFromGmail(
//           account.access_token,
//           account.id,
//           syncOptions
//         );
//         break;
//       } catch (syncError: any) {
//         const is401Error = syncError?.status === 401 || syncError?.message?.includes('401');
//         if (is401Error && attempts === 0) {
//           this.logger.warn(`🔑 Token expirado para ${account.email_gmail}, renovando...`);
//           const newToken = await this.databaseService.refreshGoogleToken(account.id);
//           account.access_token = newToken;
//           this.logger.log(`✅ Token renovado`);
//           attempts++;
//           continue;
//         } else {
//           throw syncError;
//         }
//       }
//     }

//     // Procesar resultado
//     const emailsNuevos = syncResult?.emails_nuevos || 0;
//     const emailsProcesados = syncResult?.emails_procesados || 0;
//     const nextPageToken = syncResult?.nextPageToken || null;

//     // Log del progreso
//     this.logger.log(`📊 Procesados: ${emailsProcesados} emails (${emailsNuevos} nuevos)`);

//     if (emailsProcesados === 0) {
//       // No procesó emails - incrementar contador
//       const newCount = (account.consecutive_zero_syncs || 0) + 1;
      
//       await this.databaseService.query(`
//         UPDATE cuentas_gmail_asociadas 
//         SET consecutive_zero_syncs = $1,
//             backfill_page_token = NULL
//         WHERE id = $2
//       `, [newCount, account.id]);
      
//       this.logger.warn(`⚠️ ${account.email_gmail}: 0 emails procesados (intento ${newCount}/2)`);
      
//       if (newCount >= 2) {
//         this.logger.log(`🎉 ${account.email_gmail}: Backfill COMPLETADO - Total en BD: esperar próximo log...`);
        
//         // Obtener total de emails para el log final
//         const totalResult = await this.databaseService.query(`
//           SELECT COUNT(*) as total 
//           FROM emails_sincronizados 
//           WHERE cuenta_gmail_id = $1
//         `, [account.id]);
        
//         this.logger.log(`📧 Total emails sincronizados: ${totalResult.rows[0].total}`);
//       }
      
//     } else {
//       // Procesó emails - guardar page token y resetear contador
//       await this.databaseService.query(`
//         UPDATE cuentas_gmail_asociadas 
//         SET consecutive_zero_syncs = 0,
//             backfill_page_token = $1,
//             ultima_sincronizacion = NOW()
//         WHERE id = $2
//       `, [nextPageToken, account.id]);

//       // Log con información útil
//       if (nextPageToken) {
//         this.logger.log(`✅ ${account.email_gmail}: ${emailsNuevos} nuevos, ${emailsProcesados} procesados. Continuará en próximo ciclo...`);
//       } else {
//         this.logger.log(`🎉 ${account.email_gmail}: Llegamos al final! ${emailsNuevos} nuevos, ${emailsProcesados} procesados`);
        
//         // Si no hay nextPageToken, marcar como completado
//         await this.databaseService.query(`
//           UPDATE cuentas_gmail_asociadas 
//           SET consecutive_zero_syncs = 2,
//               backfill_page_token = NULL
//           WHERE id = $1
//         `, [account.id]);
//       }
//     }

//     await this.sleep(5000); // Pausa de 5 segundos entre cuentas

//     const duration = Date.now() - startTime;
//     this.logger.log(`📚 [CRON BACKFILL] Finalizado en ${(duration / 1000).toFixed(2)} segundos`);

//   } catch (error: any) {
//     this.logger.error(`💥 Error en backfill: ${error.message}`);
    
//     // Si hay error de rate limit, esperar más
//     if (error.message?.includes('rate limit') || error.message?.includes('quota')) {
//       this.logger.warn('⏳ Rate limit detectado, esperando 30 segundos...');
//       await this.sleep(30000);
//     }
//   }
// }



  private async performSync(triggerType: 'weekday' | 'weekend' | 'test') {
    const startTime = Date.now();
    const results = {
      totalAccounts: 0,
      successfulSyncs: 0,
      failedSyncs: 0,
      totalEmailsSynced: 0,
      errors: [] as string[],
    };

    try {
      // 1. Obtener cuentas Gmail activas
     const activeAccounts = await this.gmailAccountRepository.findActiveAccounts(
        this.maxAccountsPerRun
      );

      results.totalAccounts = activeAccounts.length;
      this.logger.log(`📊 Encontradas ${activeAccounts.length} cuentas activas para sincronizar`);

      if (activeAccounts.length === 0) {
        this.logger.log('📭 No hay cuentas activas para sincronizar');
        return;
      }

      // 2. Sincronizar cada cuenta
      for (const account of activeAccounts) {
        try {
          this.logger.debug(`🔄 Sincronizando cuenta: ${account.email_gmail}`);
          
          let attempts = 0;
          let syncResult;
          
          while (attempts < 2) {
            try {
              syncResult = await this.syncService.syncIncrementalEmails(
                account.access_token,
                account.id,
                this.maxEmailsPerAccount
              );
              break; // Si funciona, salir del loop
              
            } catch (syncError: any) {
              // Debug: ver qué estructura tiene el error
            //   this.logger.debug('🔍 DEBUG - Error structure:', {
            //     status: syncError.status,
            //     code: syncError.code,
            //     response_status: syncError.response?.status,
            //     response_data_code: syncError.response?.data?.error?.code,
            //     message: syncError.message?.substring(0, 50) + '...'
            //   });
              
              // Detectar error 401 de varias formas posibles
              const is401Error = 
                syncError.status === 401 || 
                syncError.code === 401 || 
                syncError.response?.status === 401 ||
                syncError.response?.data?.error?.code === 401 ||
                (syncError.message && syncError.message.includes('401'));
                
              if (is401Error && attempts === 0) {
                this.logger.warn(`🔑 Token expirado para ${account.email_gmail}, renovando...`);
                
                try {
                  // Renovar token
                  // const newToken = await this.databaseService.refreshGoogleToken(account.id);
                  // account.access_token = newToken; // Actualizar para el próximo intento
                  // this.logger.log(`✅ Token renovado exitosamente para ${account.email_gmail}`);
                  // attempts++;
                  // continue; // Reintentar con el nuevo token
                  
                } catch (refreshError: any) {
                  this.logger.error(`❌ No se pudo renovar token para ${account.email_gmail}: ${refreshError.message}`);
                  throw refreshError;
                }
              } else {
                // No es error 401 o ya es el segundo intento
                throw syncError;
              }
            }
          }

          // Si llegamos acá, el sync fue exitoso
          if (syncResult) {
            results.successfulSyncs++;
            results.totalEmailsSynced += syncResult.emails_nuevos || 0;

             // esta linea actualiza la hora de última sincronización
  await this.gmailAccountRepository.updateLastSyncDate(account.id);
            
            this.logger.debug(
              `✅ Cuenta ${account.email_gmail}: ${syncResult.emails_nuevos || 0} emails nuevos`
            );
          }

          // Pequeña pausa entre cuentas para no saturar
          await this.sleep(500);

        } catch (error: any) {
          results.failedSyncs++;
          const errorMsg = `❌ Error sincronizando ${account.email_gmail}: ${error.message}`;
          this.logger.error(errorMsg);
          results.errors.push(errorMsg);
        }
      }

      // 3. Log final con resumen
      const duration = Date.now() - startTime;
      this.logger.log('='.repeat(50));
      this.logger.log(`📊 RESUMEN SYNC (${triggerType.toUpperCase()})`);
      this.logger.log(`⏱️  Duración: ${(duration / 1000).toFixed(2)} segundos`);
      this.logger.log(`👥 Cuentas procesadas: ${results.successfulSyncs}/${results.totalAccounts}`);
      this.logger.log(`📧 Total emails nuevos: ${results.totalEmailsSynced}`);
      if (results.failedSyncs > 0) {
        this.logger.warn(`⚠️  Cuentas con error: ${results.failedSyncs}`);
        results.errors.forEach(err => this.logger.warn(`   ${err}`));
      }
      this.logger.log('='.repeat(50));

    } catch (error: any) {
      this.logger.error(`💥 Error crítico en CRON sync: ${error.message}`, error.stack);
    }
  }

  /**
   * Método público para testing manual
   */
  async testSync(): Promise<any> {
    this.logger.log('🧪 Ejecutando sync manual de prueba...');
    await this.performSync('test');
    return {
      message: 'Sync manual ejecutado',
      timestamp: new Date().toISOString()
    };
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}