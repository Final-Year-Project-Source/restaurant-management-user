'use client';
import React, { useState, FC, TextareaHTMLAttributes } from 'react';
import { Input, ConfigProvider } from 'antd';
import { open_sans } from '@/utils/fontUtils';
const { TextArea } = Input;
import './input.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  valueInput?: string;
  value?: string;
  valuePlaceholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const TextAreaInput: FC<TextAreaProps> = ({
  valueInput,
  required,
  valuePlaceholder,
  onChange,
  disabled,
  value,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState<string | undefined>(valueInput);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              paddingInline: 15,
              paddingBlock: 10,
            },
          },
          token: {
            lineHeight: 1.5,
            colorText: '#131C16',
            fontFamily: `${open_sans}, sans-serif`,
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
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
        <TextArea
          className={open_sans.className}
          value={value || inputValue}
          required={required}
          onChange={handleInputChange}
          placeholder={valuePlaceholder}
          autoSize={{ minRows: 3, maxRows: 3.1 }}
          disabled={disabled}
        />
      </ConfigProvider>
    </>
  );
};

export default TextAreaInput;
