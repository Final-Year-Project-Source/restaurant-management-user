'use client';

import AdminLoginForm from '@/components/AdminLoginForm';
import AuthLayout from '@/components/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AdminLoginForm />
    </AuthLayout>
  );
}
