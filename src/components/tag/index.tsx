'use client';
import { open_sans } from '@/utils/fontUtils';
import { ConfigProvider, Tag as TagElement, TagProps } from 'antd';
import { FC } from 'react';

interface Props extends TagProps {
  className?: string;
  children: React.ReactNode;
}

const Tag: FC<Props> = ({ className, children, ...restProps }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            borderRadiusSM: 7,
            defaultBg: '#fff',
            fontSizeSM: 10,
            defaultColor: '#FA4A0C',
            lineHeightSM: 2.2,
            colorBorder: '#FA4A0C',
          },
        },
      }}
    >
      <TagElement {...restProps} className={` ${className || ''}  font-normal`} style={{ marginInlineEnd: 0 }}>
        <div className={open_sans.className}>{children}</div>
      </TagElement>
    </ConfigProvider>
  );
};

export default Tag;
