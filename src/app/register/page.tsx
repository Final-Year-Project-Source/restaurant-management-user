'use client';

import AdminRegisterForm from '@/components/AdminRegisterForm';
import AuthLayout from '@/components/AuthLayout';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AdminRegisterForm />
    </AuthLayout>
  );
}
