'use client';
import React, { useEffect, useRef } from 'react';
import { Input, ConfigProvider, InputRef } from 'antd';
import { open_sans } from '@/utils/fontUtils';
import './input.scss';
interface InputTextProps extends React.ComponentProps<typeof Input> {
  valuePlaceholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

const InputText: React.FC<InputTextProps> = ({ valuePlaceholder, autoFocus, ...restProps }) => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      const timeout = setTimeout(() => {
        inputRef?.current!.focus();
      }, 1);

      return () => clearTimeout(timeout);
    }
  }, [autoFocus]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingInline: 15,
            paddingBlock: 10,
            borderRadius: 16,
          },
        },
        token: {
          lineHeight: 1.85,
          colorText: '#131C16',
          fontSize: 14,
          colorBgContainer: 'transparent',
          colorBorder: 'rgba(19, 28, 22, 0.2)',
          colorPrimary: 'transparent',
          colorPrimaryHover: 'transparent',
          colorPrimaryActive: 'transparent',
          colorTextPlaceholder: 'rgba(0, 0, 0, 0.50)',
          borderRadius: 16,
        },
      }}
    >
      <Input className={`${open_sans.className}`} placeholder={valuePlaceholder} {...restProps} ref={inputRef} />
    </ConfigProvider>
  );
};
3;
export default InputText;
