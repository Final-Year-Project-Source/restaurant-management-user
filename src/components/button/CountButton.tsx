import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button as ButtonElement, ButtonProps, ConfigProvider } from 'antd';
import { FC } from 'react';
import styles from './styles.module.css';

interface CountButtonProps extends ButtonProps {
  className?: string;
  plus?: boolean;
  variant?: 'primary' | 'secondary';
}

const CountButton: FC<CountButtonProps> = ({ plus = true, variant = 'primary', className, ...restProps }) => {
  const iconColor = variant === 'primary' ? '#FA4A0C' : '#fff';
  const buttonColor = variant === 'primary' ? '#fff' : '#FA4A0C';
  const borderStyle = 'border border-solid border-red-100';
  const iconStyle = { color: iconColor, fontSize: '10px', margin: '0px' };
  const buttonStyle = { backgroundColor: buttonColor };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: 'none',
            defaultBorderColor: '#FA4A0C',
            colorBgContainer: 'transparent',
          },
        },
        token: {
          colorPrimaryActive: '#FA4A0C',
          colorBorder: '#FA4A0C',
        },
      }}
    >
      <ButtonElement
        {...restProps}
        className={`${className || ''} ${borderStyle} ${styles.countBtn} `}
        icon={plus ? <PlusOutlined style={iconStyle} /> : <MinusOutlined style={iconStyle} />}
        size="small"
        style={buttonStyle}
      />
    </ConfigProvider>
  );
};

export default CountButton;
