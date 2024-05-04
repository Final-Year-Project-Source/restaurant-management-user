'use client';
import React from 'react';
import { open_sans } from '@/utils/fontUtils';
import InputText from '@/components/input/Input';
const LessStarsPage = ({
  email,
  phone,
  isEmailValid,
  isPhoneValid,
  handleEmailChange,
  handlePhoneChange,
  disabled,
}: {
  email: string;
  phone: string;
  handleEmailChange: any;
  handlePhoneChange: any;
  isEmailValid: boolean;
  isPhoneValid: boolean;
  disabled: boolean;
}) => {
  const emailErrorMessage = !isEmailValid ? 'Please enter valid email format' : '';
  const phoneErrorMessage = !isPhoneValid ? 'Please enter valid phone number format' : '';

  return (
    <div className="px-6 pt-[13px] pb-[40px]">
      <div className="font-medium text-black-500 text-[24px] text-center mb-3">We have work to do ☹️</div>
      <div className="text-black-500 text-[14px] text-center mb-4">
        We sincerely appreciate your feedback.
        <br />
        It is important for us to continually improve.
      </div>
      <div className="text-black-500 text-[14px] text-center mb-[22px]">
        Can we contact you about your experience?
        <br />
        We will offer a complimentary voucher for your next visit.
      </div>
      <div className="px-[8px] flex flex-col space-y-[20px]">
        <div>
          <div className="font-medium text-[14px] text-black-400"> Contact email </div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <InputText
              disabled={disabled}
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Enter your email (required)"
            />
            {!isEmailValid && <div className="text-red-400 mt-[5px] text-[12px]">{emailErrorMessage}</div>}
          </div>
        </div>
        <div>
          <div className="font-medium text-[14px] text-black-400"> Contact phone </div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <InputText
              disabled={disabled}
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone (optional)"
            />
            {/* Display error message if phone number is invalid */}
            {!isPhoneValid && <div className="text-red-400  mt-[5px] text-[12px]">{phoneErrorMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LessStarsPage;
