'use client';
import OtherLayout from '@/components/layouts/OtherLayout';
import ReceiptPage from './ReceiptPage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGetSingleBillQuery } from '@/redux/services/billApi';

const Receipt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');
  const { data: getSingleOrder, isFetching } = useGetSingleBillQuery({ id: bill_id || '' });

  const btnText = (
    <div>
      <span>Start ordering again </span>
    </div>
  );

  return (
    <OtherLayout
      isShowPrimaryButton={false}
      onClickDownBtn={() => router.push(`/receipt/receipt-download?bill_id=${bill_id}`)}
      isShowBackBtn={false}
      secondaryBtnChildren={btnText}
      onClickSecondaryBtn={() => router.push('/menu')}
      title="Receipt"
    >
      <ReceiptPage receiptData={getSingleOrder?.data} isLoading={isFetching} />
    </OtherLayout>
  );
};

export default Receipt;
