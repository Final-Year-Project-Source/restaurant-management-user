import { open_sans } from '@/utils/fontUtils';
import { FC } from 'react';

export interface OrderSummaryProps {
  serviceCharge: number;
  vat: number;
  subTotal: number;
  total: number;
  className?: string;
  discountAmount?: number;
  discount?: any;
}

const OrderSummary: FC<OrderSummaryProps> = ({
  discountAmount,
  serviceCharge,
  vat,
  subTotal,
  total,
  className,
  discount,
}) => {
  const discount_text = discount
    ? discount?.type === 'FIXED_AMOUNT'
      ? `฿${discount?.value}`
      : `${discount?.value}%`
    : null;
  return (
    <div className={`${className || ''} flex flex-col space-y-[7px] ml-[108px] text-black-500`}>
      <div className={`text-[10px] font-normal ${open_sans.className}`}>
        {discountAmount! > 0 && (
          <div className="flex items-center justify-between ">
            <span>{discount_text} Discount </span>
            <span>-{discountAmount}</span>
          </div>
        )}
        <div className="flex items-center justify-between ">
          <span>Subtotal</span>
          <span>{subTotal}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>10% Service Charge</span>
          <span>{serviceCharge}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>7% VAT</span>
          <span>{vat}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm  font-normal">
        <span>Total</span>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
