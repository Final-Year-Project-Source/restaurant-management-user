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
  const emailErrorMessage = !isEmailValid ? 'Vui lòng nhập email hợp lệ' : '';
  const phoneErrorMessage = !isPhoneValid ? 'Vui lòng nhập số điện thoại hợp lệ' : '';

  return (
    <div className="px-6 pt-[13px] pb-[40px]">
      <div className="font-medium text-black-500 text-[24px] text-center mb-3">Chúng tôi luôn làm việc vì bạn ☹️</div>
      <div className="text-black-500 text-[14px] text-center mb-4">
        Chúng tôi chân thành đánh giá cao phản hồi của bạn.
        <br />
        Điều quan trọng là chúng tôi phải liên tục cải thiện.
      </div>
      <div className="text-black-500 text-[14px] text-center mb-[22px]">
        Chúng tôi có thể liên hệ với bạn về trải nghiệm của bạn không?
        <br />
        Chúng tôi sẽ tặng voucher miễn phí cho lần ghé thăm tiếp theo của bạn.
      </div>
      <div className="px-[8px] flex flex-col space-y-[20px]">
        <div>
          <div className="font-medium text-[14px] text-black-400"> Địa chỉ email liên lạc </div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <InputText
              disabled={disabled}
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Nhập email của bạn (bắt buộc)"
            />
            {!isEmailValid && <div className="text-red-400 mt-[5px] text-[12px]">{emailErrorMessage}</div>}
          </div>
        </div>
        <div>
          <div className="font-medium text-[14px] text-black-400">Số điện thoại liên hệ</div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <InputText
              disabled={disabled}
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Nhập số điện thoại của bạn (tùy chọn)"
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
