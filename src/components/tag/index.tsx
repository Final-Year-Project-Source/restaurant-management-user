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
            defaultBg: '#F1EEE8',
            fontSizeSM: 10,
            defaultColor: '#131C16',
            lineHeightSM: 2.2,
            colorBorder: '#131C16',
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
