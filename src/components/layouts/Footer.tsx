import { FC } from 'react';
import { Button } from '../button';

export interface FooterProps {
  isShowPrimaryButton?: boolean;
  primaryBtnChildren?: React.ReactNode;
  secondaryBtnChildren?: React.ReactNode;
  disabledPrimary?: boolean;
  disabledSecondary?: boolean;
  onClickPrimaryBtn?: React.MouseEventHandler<HTMLButtonElement>;
  onClickSecondaryBtn?: React.MouseEventHandler<HTMLButtonElement>;
  isTextRequestTaxInvoice?: boolean;
  className?: string;
}

const Footer: FC<FooterProps> = ({
  isShowPrimaryButton = false,
  primaryBtnChildren,
  secondaryBtnChildren,
  disabledPrimary,
  disabledSecondary,
  onClickPrimaryBtn,
  onClickSecondaryBtn,
  isTextRequestTaxInvoice,
  className,
}) => {
  return (
    <div className={`${className || ''} w-full fixed flex flex-col space-y-3 bottom-0 bg-white-100 px-6 py-3 z-999`}>
      {isTextRequestTaxInvoice && (
        <div className="text-[14px] text-black-500 text-center mb-2">
          Sau khi bạn yêu cầu hóa đơn thuế, nhân viên của chúng tôi sẽ in ra, ký tên và giao cho bạn.
        </div>
      )}
      {isShowPrimaryButton && (
        <Button variant="primary" disabled={disabledPrimary} onClick={onClickPrimaryBtn}>
          {primaryBtnChildren}
        </Button>
      )}
      <Button variant="secondary" disabled={disabledSecondary} onClick={onClickSecondaryBtn}>
        {secondaryBtnChildren}
      </Button>
    </div>
  );
};

export default Footer;
