"use client";

import { Suspense } from "react";
import RestablecerContraseña from "@/components/Auth/RestablecerContraseña";

function ResetPasswordContent() {
  return <RestablecerContraseña />;
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Cargando...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}