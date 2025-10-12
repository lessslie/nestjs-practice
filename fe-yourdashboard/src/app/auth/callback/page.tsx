"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { getMyProfile } from "@/services/auth/auth";
import { Spin, message, Alert } from "antd";

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { accessToken, setUserProfile } = useAuthStore();

  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState("Iniciando...");

  const addDebugInfo = (info: string) => {
    console.log(`🐛 DEBUG: ${info}`);
    setDebugInfo((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${info}`,
    ]);
  };

  useEffect(() => {
    const handleCallback = async () => {
      try {
        addDebugInfo("=== INICIO DEL CALLBACK ===");

        addDebugInfo(`Token existe: ${!!accessToken}`);
        if (!accessToken) {
          addDebugInfo("❌ No hay token de acceso - redirigiendo a login");
          router.push("/auth");
          return;
        }

        const authStatus = searchParams.get("auth");
        const authMessage = searchParams.get("message");
        const gmailConnected = searchParams.get("gmail");

        addDebugInfo(
          `Parámetros URL: auth=${authStatus}, message=${authMessage}, gmail=${gmailConnected}`
        );

        if (authStatus === "error") {
          const decodedMessage = decodeURIComponent(
            authMessage || "Error desconocido"
          );
          addDebugInfo(`❌ Error en OAuth: ${decodedMessage}`);
          message.error(`Error de autenticación: ${decodedMessage}`);

          setTimeout(() => {
            router.push("/dashboard/calendar");
          }, 2000);
          return;
        }

        if (authStatus === "success" || gmailConnected) {
          addDebugInfo("✅ OAuth exitoso - iniciando proceso de actualización");
          setCurrentStep("Procesando conexión exitosa...");

          message.loading({
            content: "Conectando cuenta de Google...",
            key: "oauth-success",
          });

          addDebugInfo(
            "⏳ Esperando 2 segundos para que el backend procese..."
          );
          setCurrentStep("Esperando procesamiento del backend...");
          await new Promise((resolve) => setTimeout(resolve, 2000));

          addDebugInfo("🔄 Intentando recargar el perfil...");
          setCurrentStep("Recargando perfil del usuario...");

          try {
            const updatedProfile = await getMyProfile();
            addDebugInfo(
              `✅ Perfil recargado exitosamente. Cuentas Gmail: ${updatedProfile?.cuentas_gmail?.length || 0}`
            );

            setUserProfile(updatedProfile);
            setCurrentStep("¡Perfil actualizado!");

            message.destroy("oauth-success");
            message.success({
              content: "¡Cuenta de Google conectada exitosamente!",
              key: "oauth-final",
              duration: 3,
            });

            addDebugInfo("🎉 Proceso completado - redirigiendo al dashboard");
            setTimeout(() => {
              router.push("/dashboard/calendar");
            }, 1500);
          } catch (profileError) {
            console.error("Error recargando perfil:", profileError);
            addDebugInfo(`❌ Error al recargar perfil: ${profileError}`);

            message.destroy("oauth-success");
            message.warning({
              content:
                "Cuenta conectada pero hubo un problema al actualizar el perfil. Recarga la página.",
              duration: 5,
            });

            setTimeout(() => {
              router.push("/dashboard/calendar");
            }, 3000);
          }
        } else {
          addDebugInfo("❓ Estado de autenticación desconocido");
          setCurrentStep("Redirigiendo al dashboard...");
          setTimeout(() => {
            router.push("/dashboard/calendar");
          }, 1500);
        }
      } catch (error) {
        console.error("Error en callback:", error);
        addDebugInfo(`❌ Error general: ${error}`);
        setCurrentStep("Error procesando callback");

        message.error("Error procesando la autenticación");
        setTimeout(() => {
          router.push("/dashboard/calendar");
        }, 2000);
      }
    };

    handleCallback();
  }, [accessToken, searchParams, router, setUserProfile]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Spin size="large" />
        <h2 style={{ marginTop: "20px", textAlign: "center" }}>
          {currentStep}
        </h2>

        {debugInfo.length > 0 && (
          <Alert
            message="Debug Info"
            description={
              <div style={{ maxHeight: "200px", overflow: "auto" }}>
                {debugInfo.map((info, idx) => (
                  <div key={idx} style={{ fontSize: "12px", margin: "4px 0" }}>
                    {info}
                  </div>
                ))}
              </div>
            }
            type="info"
            style={{ marginTop: "20px" }}
          />
        )}
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>}>
      <AuthCallbackContent />
    </Suspense>
  );
}