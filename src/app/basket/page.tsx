'use client';
import InputText from '@/components/input/Input';
import OtherLayout from '@/components/layouts/OtherLayout';
import LoadingIndicator from '@/components/LoadingIndicator';
import CustomizedModal from '@/components/modal/CustomizedModal';
import OrderItem from '@/components/OrderItem';
import OrderSummary from '@/components/OrderSummary';
import { resetBasket } from '@/redux/features/basketSlice';
import { useAddBillMutation, useGetSingleBillQuery, useUpdateBillMutation } from '@/redux/services/billApi';
import { useGetSingleDiscountQuery } from '@/redux/services/discountApi';
import { useCreatePaymentMutation } from '@/redux/services/paymentApi';
import { useGetSingleDiningTableQuery } from '@/redux/services/tableApi';
import { RootState } from '@/redux/store';
import { formatPrice, getFormattedTime } from '@/utils/commonUtils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Basket = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const [payments, setPayments] = useState<string>('');
  // const [requiredName, setRequiredName] = useState<string>('');
  const [itemsInBasket, setItemsInBasket] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');
  // const isNameRequired = name.trim() !== '';
  const allItemInBasket = useSelector((state: RootState) => state.basketReducer.basket) as any;

  const dispatch = useDispatch();
  const tableId = useSelector((state: RootState) => state.tableReducer.tableId) as string;
  const { data: diningTablesData } = useGetSingleDiningTableQuery({ id: tableId || '' }, { skip: !tableId });
  const diningTable = diningTablesData?.data;
  const { data: discountsData } = useGetSingleDiscountQuery(
    { id: diningTable?.discount },
    { skip: !diningTable?.discount },
  );
  const discount = discountsData?.data;
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [createPayment, { isLoading: isCreatingPayment }] = useCreatePaymentMutation();
  const [addBill, { isLoading: isBillLoading }] = useAddBillMutation();
  const [updateBill, { isLoading: isUpdateBillLoading }] = useUpdateBillMutation();
  const { data: singleBill, isFetching } = useGetSingleBillQuery({ id: bill_id || '' }, { skip: !bill_id });
  // const orderedItems = singleOrder?.data;

  // const order = useMemo(() => Orders.find((item) => item._id === bill_id), [bill_id]);

  useEffect(() => {
    setItemsInBasket(allItemInBasket?.orderItems || []);
    if (bill_id) {
      setOrders(singleBill?.data.orders || []);
    }
    if (!loadingPayment && !isBillLoading && !isUpdateBillLoading && !isFetching) setLoading(false);
  }, [allItemInBasket, bill_id, singleBill, isBillLoading, isUpdateBillLoading, isFetching, loadingPayment]);

  useEffect(() => {
    if (
      !itemsInBasket?.length &&
      !orders?.length &&
      !loading &&
      !loadingPayment &&
      !isBillLoading &&
      !isUpdateBillLoading &&
      !isFetching
    ) {
      router.push('/menu');
    }
  }, [itemsInBasket, orders, loading, router, loadingPayment, isBillLoading, isUpdateBillLoading, isFetching]);

  const modifiersTotal = useCallback(
    (orderItems: any) => {
      return orderItems?.modifiers?.reduce((accumulator: any, modifier: any) => {
        return accumulator + modifier?.price * orderItems?.quantity;
      }, 0);
    },
    [discount],
  );

  var subTotal = useMemo(() => {
    let temp = itemsInBasket?.reduce((a: any, b: any) => a + +b?.product?.price * b?.quantity + modifiersTotal(b), 0);
    if (singleBill) {
      for (const order of singleBill?.data.orders) {
        for (const item of order.items) {
          temp += Number(item.price * item.quantity);
          if (item.modifiers_info) {
            for (const modifier of item.modifiers_info) temp += Number(modifier.price * item.quantity);
          }
        }
      }
    }
    return temp;
  }, [itemsInBasket, discount, modifiersTotal, singleBill]);
  // subTotal = subTotal - +discount?.discount_amount! + (singleOrder ? +singleOrder?.data.sub_total! + +discount?.discount_amount! : 0);

  const totalDiscount = discount
    ? discount?.type === 'FIXED_AMOUNT'
      ? discount?.value
      : Math.round(((discount?.value * subTotal) / 100) * 100) / 100
    : 0;
  const subTotalAfterDiscount =
    Math.round((subTotal - totalDiscount) * 100) / 100 > 0 ? Math.round((subTotal - totalDiscount) * 100) / 100 : 0;
  const serviceCharge = Math.round(((subTotalAfterDiscount * 10) / 100) * 100) / 100;
  const vat = Math.round(((subTotalAfterDiscount * 7.7) / 100) * 100) / 100;
  const total = Math.round((subTotalAfterDiscount + vat + serviceCharge) * 100) / 100;
  // const isMoreOrder = !!bill_id;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleInputPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOrderNowPayLater = () => {
    setLoading(true);
    if (bill_id && itemsInBasket?.length > 0) {
      const data = {
        id: bill_id,
        orderItems: itemsInBasket?.map((item) => ({
          ...item,
          product: item.product.id,
          modifiers: item.modifiers.map((modifier: any) => modifier._id),
          dietary_requests: item.dietary_restrictions,
        })),
      };

      setLoadingPayment(true);
      // run api update order with new additions data (itemsInBasket)
      updateBill({ data: data })
        .unwrap()
        .then(() => router.push(`/confirmation?bill_id=${bill_id}`))
        .catch((error) => {
          setLoading(false);
          toast.error(error.data.message);
        });
    } else {
      router.push(`/confirmation?bill_id=${bill_id}`);
    }
  };
  const handlePayNowOK = () => {
    const data = {
      orderItems: itemsInBasket?.map((item) => ({
        ...item,
        modifiers: item.modifiers.map((modifier: any) => modifier._id),
        product: item.product.id,
        dietary_requests: item.dietary_restrictions,
      })),
      customer_name: name.trim(),
      dining_table_id: tableId,
      discount_id: diningTable?.discount,
    };
    setLoadingPayment(true);
    addBill({
      data: data,
    })
      .unwrap()
      .then((response) => {
        dispatch(resetBasket());
        createPayment({ data: { bill_id: response.data.id } })
          .unwrap()
          .then((response) => {
            router.push(response.data.checkoutUrl);
          });
      })
      .catch((error) => toast.error(error.data.message));
    setLoadingPayment(true);
    setPayments('');
  };

  const handlePayLaterOk = () => {
    const data = {
      orderItems: itemsInBasket?.map((item) => ({
        ...item,
        modifiers: item.modifiers.map((modifier: any) => modifier._id),
        product: item.product.id,
        dietary_requests: item.dietary_restrictions,
      })),
      customer_name: name.trim(),
      dining_table_id: tableId,
      discount_id: diningTable?.discount,
    };
    setLoadingPayment(true);
    addBill({
      data: data,
    })
      .unwrap()
      .then((response) => {
        router.push(`/confirmation?bill_id=${response.data.id}`);
      })
      .catch((error) => toast.error(error.data.message));
    setPayments('');
  };

  // useEffect(() => {
  //   setRequiredName(Customers.find((cus: any) => cus.id === order?.customer_id)?.name || '');
  // }, [order]);

  const btnText = (
    <div>
      <span>Order & pay now</span> <span className="font-normal">・ {`Total ${formatPrice(total)}`}</span>
    </div>
  );
  const body = (
    <div className="h-full flex flex-col space-y-5 px-6 pt-[13px]">
      {orders?.length > 0 && (
        <>
          {orders.map((order: any, index: number) => {
            return (
              <div key={index} className="space-y-[20px]">
                <span className="text-sm font-medium text-black-400">
                  Order placed at {getFormattedTime(new Date(order.placed_at))}
                </span>
                {order?.items.map((item: any, index: number) => {
                  return (
                    <div key={index} className="flex flex-col space-y-5">
                      <OrderItem
                        name={item.product_info?.name}
                        price={item.product_info?.price}
                        priceAfterDiscount={item?.total_price_product_after_discount}
                        image_url={item.product_info?.image_url}
                        quantity={item.quantity}
                        modifiers={item.modifiers_info}
                        note={item.notes || undefined}
                        dietary_restrictions={item.dietary_restrictions}
                      />
                      {index !== order?.products?.length - 1 && <hr className="w-full border-t border-black-100" />}
                    </div>
                  );
                })}
              </div>
            );
          })}

          {itemsInBasket && itemsInBasket.length > 0 && (
            <span className="text-sm font-medium text-black-400">New additions</span>
          )}
        </>
      )}
      {itemsInBasket &&
        itemsInBasket.length > 0 &&
        itemsInBasket?.map((item: any, index: number) => {
          return (
            <div key={index} className="flex flex-col space-y-5">
              <OrderItem
                key={index}
                item={item?.product}
                name={item?.product?.name}
                price={item.product?.price}
                image_url={item?.product?.image_url}
                quantity={item.quantity}
                modifiers={item.modifiers}
                note={item?.notes || undefined}
                isNewItem={true}
                dietary_restrictions={item.dietary_restrictions}
                disabled={isBillLoading || isUpdateBillLoading || isCreatingPayment}
              />
              <hr className="w-full border-t border-black-100" />
            </div>
          );
        })}

      {(itemsInBasket?.length > 0 || orders?.length > 0) && (
        <OrderSummary
          className="pb-[40px]"
          discount={discount}
          discountAmount={totalDiscount}
          serviceCharge={serviceCharge}
          vat={vat}
          subTotal={subTotalAfterDiscount}
          total={total}
        />
      )}
      {!!payments && (
        <CustomizedModal
          open={!!payments}
          title="Add your information"
          okText="Confirm"
          onOk={payments === 'Pay Now' ? handlePayNowOK : handlePayLaterOk}
          disabled={!name}
          onCancel={() => setPayments('')}
        >
          We need your name to identify your bill
          <InputText
            className="!mt-[10px]"
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (name) {
                  if (payments === 'Pay Now') {
                    handlePayNowOK();
                  } else {
                    handlePayLaterOk();
                  }
                }
              }
            }}
            autoFocus
            valuePlaceholder="First name (required)"
          />
          {/* <InputText
            className="!mt-[10px]"
            onChange={handleInputPhoneChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (name) {
                  if (payments === 'Pay Now') {
                    handlePayNowOK();
                  } else {
                    handlePayLaterOk();
                  }
                }
              }
            }}
            autoFocus
            valuePlaceholder="Your phone number (required)"
          /> */}
        </CustomizedModal>
      )}
    </div>
  );

  return (
    <OtherLayout
      title="Basket"
      isShowPrimaryButton={true}
      disabledPrimary={loading || isBillLoading || isUpdateBillLoading || isFetching || isCreatingPayment}
      disabledSecondary={loading || isBillLoading || isUpdateBillLoading || isFetching || isCreatingPayment}
      onClickBackBtn={() => router.push(bill_id ? `/menu?bill_id=${bill_id}` : '/menu')}
      primaryBtnChildren="Order now, pay later"
      onClickPrimaryBtn={() => {
        if (bill_id) {
          handleOrderNowPayLater();
        } else {
          setPayments('Pay Later');
        }
      }}
      disabledBackBtn={loading || isBillLoading || isUpdateBillLoading || isFetching || isCreatingPayment}
      secondaryBtnChildren={btnText}
      onClickSecondaryBtn={() => {
        if (bill_id) {
          setLoading(true);
          if (itemsInBasket?.length > 0) {
            const data = {
              id: bill_id,
              orderItems: itemsInBasket?.map((item) => ({
                ...item,
                product: item.product.id,
                modifiers: item.modifiers.map((modifier: any) => modifier.id),
                dietary_requests: item.dietary_restrictions,
              })),
            };
            setLoadingPayment(true);
            updateBill({ data: data })
              .unwrap()
              .then(() => {
                dispatch(resetBasket());
                createPayment({ data: { bill_id: bill_id } })
                  .unwrap()
                  .then((response) => {
                    router.push(response?.data?.checkoutUrl);
                  })
                  .catch((error) => {
                    setLoading(false);
                    toast.error(error?.data?.message);
                  });
              })
              .catch((error) => {
                setLoading(false);
                toast.error(error?.data?.message);
              });
          } else {
            createPayment({ data: { bill_id: bill_id } })
              .unwrap()
              .then((response) => {
                router.push(response.data.checkoutUrl);
                dispatch(resetBasket());
              })
              .catch((error) => {
                setLoading(false);
                toast.error(error?.data?.message);
              });
          }
        } else {
          setPayments('Pay Now');
        }
      }}
    >
      {loading || isFetching ? <LoadingIndicator /> : body}
      {(isUpdateBillLoading || isBillLoading || isCreatingPayment) && <LoadingIndicator />}
    </OtherLayout>
  );
};

export default Basket;
