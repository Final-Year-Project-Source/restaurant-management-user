'use client';
import OtherLayout from '@/components/layouts/OtherLayout';
import OrderItem from '@/components/OrderItem';
import { resetBasket } from '@/redux/features/basketSlice';
import { useGetSingleOrderQuery } from '@/redux/services/orderApi';
import { useCreatePaymentMutation } from '@/redux/services/paymentApi';
import { open_sans } from '@/utils/fontUtils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useGetSingleBillQuery } from '@/redux/services/billApi';
import { formatPrice } from '@/utils/commonUtils';

const Confirmation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const bill_id = searchParams.get('bill_id');
  const { data: singleBill, isFetching } = useGetSingleBillQuery({ id: bill_id || '' });
  // const order = Orders.find((item) => item._id === bill_id);
  // const customer = Customers.find((item) => item._id === order?.customer_id);
  // const orderedItems = order?.orderItems;
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const [createPayment, { isLoading: isCreating }] = useCreatePaymentMutation();

  const bill = singleBill?.data;
  const totalDiscount = bill?.total_discount || 0;
  const subTotal = bill?.sub_total;
  const serviceCharge10 = bill?.service_charge;
  const vat7 = bill?.vat_charge;
  const discount = bill?.discount_info;
  const discount_text = discount
    ? discount.type === 'FIXED_AMOUNT'
      ? `${formatPrice(discount?.value)} vnd`
      : `${discount?.value}%`
    : null;
  const dispatch = useDispatch();
  let Items = [];
  if (bill?.orders?.length > 0) {
    for (const order of bill?.orders) {
      for (const item of order?.items) {
        Items.push(item);
      }
    }
  }
  const body = (
    <div className="px-4 pt-[13px] max-h-[var(--100vh)]">
      {bill?.orders?.length > 0 && (
        <>
          <div className="text-center text-[28px] font-medium text-black-500">
            We’ve got your order, {bill?.customer_name}
          </div>
          <div className="text-center text-[18px] text-black-500 mt-[12px]">
            Speak to one of our team members if you have any questions about your order.
          </div>
          <div className="flex font-medium text-black-400 mt-[30px]">Order summary</div>
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
                <hr className="w-full border-t border-black-100 mt-[18px] mb-[22px]" />
              </div>
            );
          })}

          <div className="ml-[108px] pb-[40px]">
            <div className={`text-[13px] text-black-500 space-y-[3px] ${open_sans.className}`}>
              {totalDiscount > 0 && (
                <div className="flex items-center justify-between ">
                  <span>{discount_text} Discount </span>
                  <span>-{formatPrice(totalDiscount)}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div> Subtotal </div>
                <div> {formatPrice(subTotal)} </div>
              </div>
              <div className="flex items-center justify-between">
                <div> 10% Service Charge </div>
                <div> {formatPrice(serviceCharge10)} </div>
              </div>
              <div className="flex items-center justify-between">
                <div> 7% VAT </div>
                <div> {formatPrice(vat7)} </div>
              </div>
            </div>
            <div className="text-[18px] flex items-center mt-[7px] justify-between">
              <div> Total </div>
              <div> {formatPrice(bill?.total)} </div>
            </div>
          </div>
        </>
      )}

      {/* <div className="h-[160px]" /> */}
    </div>
  );
  const btnText = (
    <div>
      <span>Pay now </span> <span className="font-normal">・ Total {formatPrice(bill?.total)}</span>
    </div>
  );

  useEffect(() => {
    dispatch(resetBasket());
  }, [dispatch]);

  return (
    <OtherLayout
      disabledPrimary={isFetching || isCreating || isLoading}
      disabledSecondary={isFetching || isCreating || isLoading}
      disabledBackBtn={isFetching || isCreating || isLoading}
      isShowPrimaryButton={true}
      isShowBackBtn={true}
      onClickBackBtn={() => router.push(bill_id ? `/basket?bill_id=${bill_id}` : '/basket')}
      primaryBtnChildren="Order something else"
      onClickPrimaryBtn={() => router.push(bill_id ? `/menu?bill_id=${bill_id}` : '/menu')}
      secondaryBtnChildren={btnText}
      onClickSecondaryBtn={() => {
        createPayment({ data: { bill_id: bill_id } })
          .unwrap()
          .then((res) => {
            setIsLoading(true);
            dispatch(resetBasket());
            router.push(`${res.data.checkoutUrl}`);
          });
      }}
      title="Confirmation"
    >
      {(isFetching || isCreating || isLoading) && <LoadingIndicator />}
      {body}
    </OtherLayout>
  );
};

export default Confirmation;
