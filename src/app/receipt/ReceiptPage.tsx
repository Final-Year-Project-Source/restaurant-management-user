'use client';
import LoadingIndicator from '@/components/LoadingIndicator';
import OrderItem from '@/components/OrderItem';
import Stars from '@/components/stars';
import { open_sans } from '@/utils/fontUtils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const ReceiptPage = ({
  className,
  receiptData,
  isLoading,
}: {
  className?: string;
  receiptData: any;
  isLoading?: boolean;
}) => {
  const [isLoadingStar, setIsLoadingStar] = useState(false);
  const handleRatingStars = (value: number) => {
    setIsLoadingStar(true);
    router.push(`/feedback?bill_id=${bill_id}&stars=${value}`);
  };
  const router = useRouter();
  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');

  const totalDiscount = receiptData?.total_discount || 0;
  const subTotal = receiptData?.sub_total;
  const serviceCharge10 = receiptData?.service_charge;
  const vat7 = receiptData?.vat_charge;
  const discount = receiptData?.discount_info;
  const discount_text = discount
    ? discount?.type === 'FIXED_AMOUNT'
      ? `฿${discount?.value}`
      : `${discount?.value}%`
    : null;
  let Items = [];
  if (receiptData?.orders.length > 0) {
    for (const order of receiptData?.orders) {
      for (const item of order?.items) {
        Items.push(item);
      }
    }
  }
  return (
    <div className={`${className || ''} px-6 pt-[13px]`} id="receipt">
      {isLoading || isLoadingStar ? (
        <LoadingIndicator />
      ) : (
        <div>
          {receiptData?.feedback_info ? (
            <>
              <div className="font-medium text-black-500 text-[24px] text-center mb-3">
                Mọi thứ đã hoàn tất, {receiptData?.customer_name}
              </div>
              <div className="text-black-500 text-[14px] text-center mb-4">
                Cảm ơn bạn rất nhiều vì đã ghé thăm chúng tôi,
                <br />
                và cảm ơn bạn đã chia sẻ suy nghĩ của mình!
              </div>
            </>
          ) : (
            <>
              <div className="font-medium text-black-500 text-[24px] text-center mb-3">
                All settled, {receiptData?.customer_name} 🙏
              </div>
              <div className="text-black-500 text-[14px] text-center mb-4">
                Cảm ơn bạn rất nhiều vì đã ghé thăm chúng tôi.
                <br />
                Trải nghiệm chung ngày hôm nay của bạn thế nào?
              </div>
              <div className="flex items-center justify-center">
                <Stars onRateChange={handleRatingStars} value={receiptData?.feedback_info?.stars} />
              </div>
            </>
          )}

          <div className="flex font-medium text-black-400 mt-[30px]"> Tóm tắt đơn</div>
          {Items?.map((item: any, index: number) => {
            return (
              <div key={index} className="mt-[20px]">
                <OrderItem
                  name={item?.product_info?.name}
                  price={item?.price}
                  priceAfterDiscount={item?.total_price_product_after_discount}
                  image_url={item?.image_url}
                  quantity={item?.quantity}
                  modifiers={item?.modifiers_info}
                  note={item?.notes || undefined}
                  dietary_restrictions={item?.dietary_requests || []}
                />
                <hr className="w-full border-t border-black-100 mt-[20px]" />
              </div>
            );
          })}

          <div className="mt-[20px] ml-[108px] pb-[40px]">
            <div className={`text-[10px] text-black-500 space-y-[3px] ${open_sans.className}`}>
              {totalDiscount > 0 && (
                <div className="flex items-center justify-between ">
                  <span>{discount_text} Giảm giá </span>
                  <span>-{totalDiscount}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div> Tổng cộng (`${Items?.length} món`) </div>
                <div> {subTotal} </div>
              </div>
              <div className="flex items-center justify-between">
                <div> 10% Phí dịch vụ </div>
                <div> {serviceCharge10} </div>
              </div>
              <div className="flex items-center justify-between">
                <div> 7% VAT </div>
                <div> {vat7} </div>
              </div>
            </div>
            <div className="text-[14px] flex items-center mt-[7px] justify-between ">
              <div> Thành tiền </div>
              <div> {receiptData?.total} </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ReceiptPage;
