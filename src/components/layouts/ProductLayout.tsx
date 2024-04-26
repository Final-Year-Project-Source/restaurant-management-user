'use client';
import React, { FC, useRef } from 'react';
import { IconButton } from '../button';
import { useScrollbarState } from '../hooks/useScrollbarState';
import { ArrowLeftIcon } from '../Icons';
import Footer, { FooterProps } from './Footer';

export interface ProductLayoutProps extends FooterProps {
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickBackBtn?: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductLayout: FC<ProductLayoutProps> = ({
  children,
  disabledSecondary,
  onClickSecondaryBtn,
  secondaryBtnChildren,
  onClickPrimaryBtn,
  primaryBtnChildren,
  isShowPrimaryButton,
  onClickBackBtn,
}) => {
  const productLayoutRef = useRef(null);
  const { scrollBottom } = useScrollbarState(productLayoutRef);

  return (
    <div className="flex flex-col">
      <div className="w-full pt-[22px] pl-4 fixed z-10">
        <IconButton icon={<ArrowLeftIcon />} onClick={onClickBackBtn} />
      </div>
      <div ref={productLayoutRef} className="h-screen overflow-y-auto max-h-screen-85">
        {children}
      </div>
      <Footer
        className={scrollBottom - 30 > 0 ? 'shadow-medium-top' : ''}
        disabledSecondary={disabledSecondary}
        isShowPrimaryButton={isShowPrimaryButton}
        onClickPrimaryBtn={onClickPrimaryBtn}
        primaryBtnChildren={primaryBtnChildren}
        onClickSecondaryBtn={onClickSecondaryBtn}
        secondaryBtnChildren={secondaryBtnChildren}
      />
    </div>
  );
};

export default ProductLayout;
