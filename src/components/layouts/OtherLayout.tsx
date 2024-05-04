'use client';
import { Avatar } from 'antd';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useMemo, useRef } from 'react';
import { IconButton } from '../button';
import { useScrollbarState } from '../hooks/useScrollbarState';
import { ArrowLeftIcon, DownloadIcon } from '../Icons';
import Footer, { FooterProps } from './Footer';

export interface OtherLayoutProps extends FooterProps {
  children?: React.ReactNode;
  onClickBackBtn?: React.MouseEventHandler<HTMLButtonElement>;
  onClickDownBtn?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  isShowBackBtn?: boolean;
  isTextRequestTaxInvoice?: boolean;
  disabledBackBtn?: boolean;
}

const OtherLayout: FC<OtherLayoutProps> = ({
  isShowBackBtn = true,
  title,
  isTextRequestTaxInvoice,
  children,
  disabledPrimary,
  disabledSecondary,
  onClickSecondaryBtn,
  secondaryBtnChildren,
  onClickPrimaryBtn,
  primaryBtnChildren,
  isShowPrimaryButton,
  onClickBackBtn,
  onClickDownBtn,
  disabledBackBtn,
}) => {
  const otherLayoutBodyRef = useRef(null);
  const { scrollTop, scrollBottom } = useScrollbarState(otherLayoutBodyRef);
  const router = useRouter();
  const headerFooterHeight = useMemo(() => {
    if (!isShowPrimaryButton) {
      return isTextRequestTaxInvoice ? '211px' : '170px';
    }
    return '243px';
  }, [isShowPrimaryButton, isTextRequestTaxInvoice]);
  // padding top: 22px (on all pages of Other layout)
  return (
    <div className="flex flex-col h-screen">
      <div
        className={`${
          scrollTop - 13 > 0 ? 'shadow-medium-bottom' : ''
        } relative w-full pt-[22px] pb-[15px] flex flex-row items-center ${
          isShowBackBtn ? 'justify-start pl-4' : 'justify-end pr-4'
        }`}
      >
        {isShowBackBtn && <IconButton icon={<ArrowLeftIcon />} disabled={disabledBackBtn} onClick={onClickBackBtn} />}
        <span className="w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500">
          {title}
        </span>
        {!isShowBackBtn && <IconButton icon={<DownloadIcon />} onClick={onClickDownBtn} />}
        <Avatar
          className="cursor-pointer bg-white text-black-500 mr-4"
          size={48}
          onClick={() => router.push('/setting')}
        >
          {/* {session?.user.name[0].toUpperCase()} */}
        </Avatar>
      </div>
      <div ref={otherLayoutBodyRef} className={`overflow-y-auto max-h-screen-${headerFooterHeight}`}>
        {children}
      </div>
      <Footer
        className={scrollBottom - 40 > 0 ? 'shadow-medium-top' : ''}
        disabledPrimary={disabledPrimary}
        disabledSecondary={disabledSecondary}
        isTextRequestTaxInvoice={isTextRequestTaxInvoice}
        isShowPrimaryButton={isShowPrimaryButton}
        onClickPrimaryBtn={onClickPrimaryBtn}
        primaryBtnChildren={primaryBtnChildren}
        onClickSecondaryBtn={onClickSecondaryBtn}
        secondaryBtnChildren={secondaryBtnChildren}
      />
    </div>
  );
};

export default OtherLayout;
