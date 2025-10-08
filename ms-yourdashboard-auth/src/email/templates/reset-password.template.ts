export const resetPasswordTemplate = (resetUrl: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reestablece tu contraseña</title>
    </head>
    <body style="
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #F8FAFC;
    ">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; padding: 40px 20px;">
        <tr>
          <td align="center">
            <!-- Container Principal -->
            <table width="600" cellpadding="0" cellspacing="0" style="
              background-color: #FFFFFF;
              border-radius: 12px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            ">
              <!-- Header con ilustración -->
              <tr>
                <td align="center" style="padding: 40px 40px 20px;">
                  <div style="
                    background: linear-gradient(135deg, #4361EE 0%, #38BDF8 100%);
                    width: 120px;
                    height: 120px;
                    border-radius: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                  ">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1C8.676 1 6 3.676 6 7V10H5C3.895 10 3 10.895 3 12V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V12C21 10.895 20.105 10 19 10H18V7C18 3.676 15.324 1 12 1ZM12 3C14.206 3 16 4.794 16 7V10H8V7C8 4.794 9.794 3 12 3ZM12 14C13.105 14 14 14.895 14 16C14 17.105 13.105 18 12 18C10.895 18 10 17.105 10 16C10 14.895 10.895 14 12 14Z" fill="white"/>
                    </svg>
                  </div>
                </td>
              </tr>

              <!-- Título -->
              <tr>
                <td align="center" style="padding: 0 40px 20px;">
                  <h1 style="
                    margin: 0;
                    font-size: 24px;
                    font-weight: 600;
                    color: #4361EE;
                  ">
                    Reestablece tu contraseña
                  </h1>
                </td>
              </tr>

              <!-- Mensaje -->
              <tr>
                <td style="padding: 0 40px 30px;">
                  <p style="
                    margin: 0 0 15px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #1E293B;
                    text-align: center;
                  ">
                    Has solicitado restablecer tu contraseña. No te preocupes, estamos aquí para ayudarte.
                  </p>
                  <p style="
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #64748B;
                    text-align: center;
                  ">
                    Haz clic en el botón para restablecer tu contraseña. <strong>Expira en 15 minutos.</strong>
                  </p>
                </td>
              </tr>

              <!-- Botón CTA -->
              <tr>
                <td align="center" style="padding: 0 40px 30px;">
                  <a href="${resetUrl}" style="
                    display: inline-block;
                    padding: 14px 40px;
                    background-color: #4361EE;
                    color: #FFFFFF;
                    text-decoration: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    transition: background-color 0.3s;
                  ">
                    Reestablecer contraseña
                  </a>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding: 0 40px;">
                  <div style="
                    height: 1px;
                    background-color: #E2E8F0;
                    margin: 20px 0;
                  "></div>
                </td>
              </tr>

              <!-- Texto alternativo -->
              <tr>
                <td style="padding: 20px 40px 30px;">
                  <p style="
                    margin: 0 0 10px;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #64748B;
                    text-align: center;
                  ">
                    Si no puedes hacer clic en el botón, copia y pega este enlace en tu navegador:
                  </p>
                  <p style="
                    margin: 0;
                    font-size: 12px;
                    line-height: 1.6;
                    color: #4361EE;
                    text-align: center;
                    word-break: break-all;
                  ">
                    ${resetUrl}
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="
                  padding: 30px 40px;
                  background-color: #F8FAFC;
                  text-align: center;
                ">
                  <p style="
                    margin: 0 0 10px;
                    font-size: 12px;
                    color: #64748B;
                  ">
                    Si no solicitaste el cambio, verifica tu cuenta o contacta con soporte.
                  </p>
                  <p style="
                    margin: 0;
                    font-size: 11px;
                    color: #94A3B8;
                  ">
                    <strong>Asistente</strong>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};


