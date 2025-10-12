"use client";

import { Suspense } from "react";
import OlvidasteContraseña from "@/components/Auth/OlvidasteContraseña";

function ForgotPasswordContent() {
  return <OlvidasteContraseña />;
}

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Cargando...</div>}>
      <ForgotPasswordContent />
    </Suspense>
  );
}