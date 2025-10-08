// src/emails/interfaces/email.interfaces-send.ts

import { EmailPriority } from '../dto/send-email.dto';

// ================================
// 🎯 GMAIL API TYPES
// ================================

export interface GmailSendRequest {
  userId: string; // Siempre 'me' para Gmail API
  requestBody: {
    raw: string; // Email completo codificado en base64url
    threadId?: string; // Para mantener hilo de conversación
  };
}

export interface GmailSendResponse {
  id: string; // ID del mensaje enviado
  threadId: string; // ID del hilo de conversación
  labelIds?: string[]; // Labels aplicadas (ej: SENT, INBOX)
  snippet?: string; // Fragmento del contenido
  payload?: {
    mimeType: string;
    headers: GmailHeader[];
  };
  sizeEstimate?: number; // Tamaño aproximado en bytes
  historyId?: string; // Para sincronización incremental
  internalDate?: string; // Timestamp interno de Gmail
}

export interface GmailHeader {
  name: string; // Nombre del header (ej: 'To', 'Subject')
  value: string; // Valor del header
}

export interface GmailApiError {
  code?: number;
  message?: string;
  status?: string;
  details?: any[];
}

// ================================
// 🎯 INTERNAL EMAIL MESSAGE CONSTRUCTION
// ================================

export interface EmailMessage {
  headers: EmailHeaders | Record<string, string>; // Todos los headers del email
  body: string; // Cuerpo del mensaje (puede ser multipart)
  attachments?: EmailAttachment[];
  boundary?: string; // Para emails multipart
  messageId: string; // Generado internamente
}

export interface EmailAttachment {
  filename: string;
  content: string; // Base64
  mimeType: string;
  contentId?: string; // Para attachments inline como <img>
  size?: number; // Tamaño en bytes
  disposition?: 'attachment' | 'inline'; // Cómo mostrar el attachment
}

export interface EmailHeaders {
  To: string; // Destinatarios principales
  Cc?: string; // Copia
  Bcc?: string; // Copia oculta  
  Subject: string; // Asunto
  From: string; // Remitente
  'Message-ID': string; // ID único del mensaje
  Date: string; // Fecha de creación
  'Content-Type': string; // Tipo de contenido
  'MIME-Version': string; // Versión MIME (siempre 1.0)
  // Headers de prioridad
  'X-Priority'?: string; // 1=High, 3=Normal, 5=Low
  'X-MSMail-Priority'?: string; // High, Normal, Low  
  'Importance'?: string; // high, normal, low
  // Headers para mantener hilo
  'In-Reply-To'?: string; // ID del mensaje al que responde
  'References'?: string; // Cadena de IDs de mensajes previos
  // Header de confirmación de lectura
  'Disposition-Notification-To'?: string; // Email para confirmación
}

// ================================
// 🎯 SERVICE RESPONSE TYPES
// ================================

export interface SendEmailResponse {
  success: boolean;
  messageId: string; // ID retornado por Gmail API
  threadId: string; // ID del hilo de conversación
  sentAt: string; // Timestamp ISO cuando se envió
  fromEmail: string; // Email remitente confirmado
  toEmails: string[]; // Destinatarios principales
  ccEmails?: string[]; // Destinatarios en copia
  bccEmails?: string[]; // Destinatarios en copia oculta
  subject: string; // Asunto del email
  priority: EmailPriority; // Prioridad aplicada
  hasAttachments: boolean; // Si tiene archivos adjuntos
  attachmentCount?: number; // Número de archivos adjuntos
  sizeEstimate?: number; // Tamaño aproximado del email
}

export interface SendEmailRequest {
  // Datos del DTO transformados para el service
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  body: string;
  bodyHtml?: string;
  priority: EmailPriority;
  requestReadReceipt?: boolean;
  attachments?: EmailAttachment[];
  inReplyTo?: string;
  references?: string[];
  // Datos adicionales del contexto
  userId: string;
  accessToken: string;
  cuentaGmailId: string;
}

// ================================
// 🎯 ERROR HANDLING
// ================================

export interface SendEmailError {
  code: string; // Código interno del error
  message: string; // Mensaje descriptivo
  details?: any; // Detalles adicionales del error
  gmailApiError?: GmailApiError; // Error original de Gmail API
  timestamp: string; // Cuándo ocurrió el error
}

export interface SendEmailValidationError {
  field: string; // Campo que causó el error
  value: any; // Valor inválido
  reason: string; // Por qué es inválido
  code: 'INVALID_EMAIL' | 'TOO_MANY_RECIPIENTS' | 'INVALID_ACCOUNT' | 'QUOTA_EXCEEDED';
}

// ================================
// 🎯 LOGGING & DEBUGGING
// ================================

export interface SendEmailLog {
  requestId: string; // ID único para tracking
  userId: string;
  fromEmail: string;
  toCount: number;
  ccCount?: number;
  bccCount?: number;
  hasAttachments: boolean;
  priority: EmailPriority;
  startTime: number; // Timestamp de inicio
  endTime?: number; // Timestamp de fin
  duration?: number; // Duración en ms
  success: boolean;
  errorCode?: string;
  messageId?: string; // Si fue exitoso
  threadId?: string; // Si fue exitoso
}

// ================================
// 🎯 QUOTA & LIMITS
// ================================

export interface GmailQuotaInfo {
  dailyQuotaLimit: number; // Límite diario de envíos
  dailyQuotaUsed: number; // Envíos usados hoy
  rateLimitPerMinute: number; // Límite por minuto
  rateLimitUsed: number; // Usado en el último minuto
  canSendEmail: boolean; // Si puede enviar ahora
  nextAvailableSlot?: Date; // Cuándo puede enviar de nuevo
}

export interface SendEmailQuotaCheck {
  canSend: boolean;
  reason?: string; // Por qué no puede enviar
  retryAfter?: number; // Segundos hasta poder enviar
  quotaInfo: GmailQuotaInfo;
}