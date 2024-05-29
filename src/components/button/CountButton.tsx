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
  const iconColor = variant === 'primary' ? '#A82825' : '#fff';
  const buttonColor = variant === 'primary' ? 'transparent' : '#A82825';
  const borderStyle = 'border border-solid border-red-50';
  const iconStyle = { color: iconColor, fontSize: '10px', margin: '0px' };
  const buttonStyle = { backgroundColor: buttonColor };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: 'none',
            defaultBorderColor: '#A82825',
            colorBgContainer: 'transparent',
          },
        },
        token: {
          colorPrimaryActive: '#A82825',
          colorBorder: '#A82825',
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
