import React from 'react';
import '@/styles/globals.css';
import AuthLayout from '@/components/AuthLayout';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

export default async function AdminForgotPasswordPage() {
  return (
    <AuthLayout isHiddenTabs>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
