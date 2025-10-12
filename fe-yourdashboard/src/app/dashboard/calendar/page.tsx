"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { getMyProfile } from "@/services/auth/auth";
import { message, Spin } from "antd";
import {
  UserOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import GoogleConnectButton from "@/components/Calendar/GoogleConnectButton";
import EnhancedCalendarView from "@/components/Calendar/EnhancedCalendarView";
import AccountManager from "@/components/Calendar/ccountManager";
import { CalendarEvent } from "@/interfaces/interfacesCalendar";

function CalendarioPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    accessToken,
    userProfile,
    setUserProfile,
    clearAuth,
    hasGmailAccounts,
    getActiveGmailAccount,
  } = useAuthStore();

  const [isLoading, setIsLoading] = useState(true);
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");
  const [showUnified, setShowUnified] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (accessToken !== undefined) {
      setIsHydrated(true);
    }
  }, [accessToken]);

  useEffect(() => {
    if (!isHydrated) return;

    if (!accessToken) {
      router.push("/auth");
      return;
    }

    const loadProfile = async () => {
      if (!userProfile) {
        try {
          setIsLoading(true);
          const profileData = await getMyProfile();
          setUserProfile(profileData);
        } catch (error) {
          console.error("Error al cargar el perfil:", error);
          clearAuth();
          router.push("/auth");
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [isHydrated, accessToken, userProfile, setUserProfile, clearAuth, router]);

  useEffect(() => {
    const authStatus = searchParams.get("auth");
    const gmailConnected = searchParams.get("gmail");
    const successParam = searchParams.get("success");
    const refreshParam = searchParams.get("refresh");

    if (successParam === "true" && refreshParam === "profile") {
      console.log('🔄 Calendar OAuth exitoso, refrescando perfil...');
      
      message.success({
        content: "¡Google Calendar conectado exitosamente!",
        duration: 5,
      });

      const reloadProfile = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const updatedProfile = await getMyProfile();
          setUserProfile(updatedProfile);
        } catch (error) {
          console.error("Error recargando perfil:", error);
        }
      };

      reloadProfile();
      router.replace("/dashboard/calendar");
      return;
    }

    if (authStatus === "success" || gmailConnected) {
      message.success({
        content: `¡Cuenta ${
          gmailConnected || "de Google"
        } conectada exitosamente!`,
        duration: 5,
      });

      const reloadProfile = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const updatedProfile = await getMyProfile();
          setUserProfile(updatedProfile);
        } catch (error) {
          console.error("Error recargando perfil:", error);
        }
      };

      reloadProfile();
      router.replace("/dashboard/calendar");
    }

    if (authStatus === "error") {
      const authMessage = searchParams.get("message");
      const decodedMessage = decodeURIComponent(
        authMessage || "Error desconocido"
      );
      message.error(`Error de autenticación: ${decodedMessage}`);
      router.replace("/dashboard/calendar");
    }
  }, [searchParams, setUserProfile, router]);

  useEffect(() => {
    if (userProfile && hasGmailAccounts() && !selectedAccountId) {
      const activeAccount = getActiveGmailAccount();
      if (activeAccount) {
        setSelectedAccountId(activeAccount.id.toString());
      }
    }
  }, [userProfile, hasGmailAccounts, getActiveGmailAccount, selectedAccountId]);

  const handleAccountChange = (accountId: string) => {
    if (accountId === "unified") {
      setShowUnified(true);
      setSelectedAccountId("");
    } else {
      setShowUnified(false);
      setSelectedAccountId(accountId);
    }
  };

  const handleAccountDisconnect = (accountId: string) => {
    if (selectedAccountId === accountId) {
      const remainingAccounts =
        userProfile?.cuentas_gmail?.filter(
          (acc) => acc.id.toString() !== accountId
        ) || [];

      if (remainingAccounts.length > 0) {
        setSelectedAccountId(remainingAccounts[0].id.toString());
        setShowUnified(false);
      } else {
        setSelectedAccountId("");
        setShowUnified(false);
      }
    }
  };

  const handleEventClick = (event: CalendarEvent) => {
    console.log("📅 Evento seleccionado:", event);
  };

  const handleDateSelect = (date: Date) => {
    console.log("📅 Fecha seleccionada para crear evento:", date);
  };

  if (!isHydrated || isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <Spin size="large" />
          <h3>{!isHydrated ? "Inicializando..." : "Cargando calendario..."}</h3>
          <p>Por favor espera un momento</p>
        </div>

        <style jsx>{`
          .loading-screen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }

          .loading-content {
            text-align: center;
            background: white;
            padding: 48px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .loading-content h3 {
            margin: 24px 0 8px 0;
            color: #262626;
            font-weight: 600;
          }

          .loading-content p {
            margin: 0;
            color: #8c8c8c;
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="brand">
            <div className="brand-icon">📅</div>
            <div className="brand-info">
              <h1>Calendar Dashboard</h1>
              {userProfile && (
                <span className="welcome-text">
                  <UserOutlined /> {userProfile.usuario.nombre}
                </span>
              )}
            </div>
          </div>

          <AccountManager
            selectedAccountId={showUnified ? "unified" : selectedAccountId}
            onAccountChange={handleAccountChange}
            onAccountDisconnect={handleAccountDisconnect}
            showUnifiedOption={
              userProfile?.cuentas_gmail && userProfile.cuentas_gmail.length > 1
            }
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        {hasGmailAccounts() ? (
          <>
            {/* Calendario Mejorado */}
            <EnhancedCalendarView
              accountId={showUnified ? undefined : selectedAccountId}
              showUnified={showUnified}
              height={600}
              onEventClick={handleEventClick}
              onDateSelect={handleDateSelect}
            />

            {/* Stats Cards */}
            {userProfile && (
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <LinkOutlined />
                  </div>
                  <div className="stat-content">
                    <h3>{userProfile.estadisticas.total_cuentas_gmail}</h3>
                    <p>Cuentas Conectadas</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon active">
                    <CheckCircleOutlined />
                  </div>
                  <div className="stat-content">
                    <h3>{userProfile.estadisticas.cuentas_gmail_activas}</h3>
                    <p>Cuentas Activas</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon synced">
                    <UserOutlined />
                  </div>
                  <div className="stat-content">
                    <h3>
                      {userProfile.estadisticas.total_emails_sincronizados}
                    </h3>
                    <p>Eventos Sincronizados</p>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="connect-state">
            <div className="connect-content">
              <div className="connect-icon">🔗</div>
              <h2>Conecta tu cuenta de Google</h2>
              <p>
                Para comenzar a ver y gestionar tus eventos de calendario,
                conecta tu cuenta de Google.
              </p>
              <GoogleConnectButton size="large" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function CalendarioPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Cargando calendario...</div>}>
      <CalendarioPageContent />
    </Suspense>
  );
}