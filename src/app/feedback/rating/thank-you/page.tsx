'use client';
import OtherLayout from '@/components/layouts/OtherLayout';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useGetSingleBillQuery } from '@/redux/services/billApi';
import { useRouter, useSearchParams } from 'next/navigation';
const Confirmation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');
  const { data: getSingleBill, isFetching } = useGetSingleBillQuery({ id: bill_id || '' });
  const bill = getSingleBill?.data;
  const handleClickBackBtn = () => {
    router.push(`/receipt?bill_id=${bill_id}`);
  };
  const body = (
    <div className="px-6 pt-[13px]">
      <div className="font-medium text-black-500 text-[24px] text-center mb-3">Thank you, {bill?.customer_name} 🙏</div>
      <div className="text-black-500 text-[14px] text-center mb-4">We’ll be in touch soon!</div>
    </div>
  );
  const btnText = (
    <div>
      <span>Start ordering again </span>
    </div>
  );

  return (
    <OtherLayout
      isShowPrimaryButton={false}
      isShowBackBtn={true}
      onClickBackBtn={handleClickBackBtn}
      primaryBtnChildren="Order something else"
      secondaryBtnChildren={btnText}
      onClickSecondaryBtn={() => router.push('/menu')}
      title="Feedback"
    >
      {isFetching ? <LoadingIndicator /> : body}
    </OtherLayout>
  );
};

export default Confirmation;
