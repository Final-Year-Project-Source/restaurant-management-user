'use client';
import OtherLayout from '@/components/layouts/OtherLayout';
import { toPng } from 'html-to-image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import LoadingIndicator from '@/components/LoadingIndicator';
import { ReceiptTaxInvoiceImage } from '@/components/Icons';
import ReceiptDownLoadedImage from './ReceiptDownloaded';
import { useGetSingleBillQuery } from '@/redux/services/billApi';

const ReceiptDownLoad = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');
  const { data: getSingleBill, isFetching } = useGetSingleBillQuery({ id: bill_id || '' });
  const [downloading, setDownloading] = useState(false);
  const downloadImage = (uri: string) => {
    const fileDownloaded = document.createElement('a');
    fileDownloaded.href = uri;
    fileDownloaded.download = 'Receipt';
    fileDownloaded.click();
    setDownloading(false);
  };

  const handleDownloadReceipt = async () => {
    setDownloading(true);
    const receiptPage = document.getElementById('receipt');
    if (receiptPage) {
      receiptPage?.classList.remove('hidden');
      let dataUrl = '';
      const minDataLength = 2000000;
      let i = 0;
      const maxAttempts = 10;
      while (dataUrl.length < minDataLength && i < maxAttempts) {
        try {
          dataUrl = await toPng(receiptPage, { backgroundColor: '#f1eee8', includeQueryParams: true });
        } catch (error) {
          setDownloading(false);
          break;
        }
        i += 1;
      }
      downloadImage(dataUrl);
      receiptPage?.classList.add('hidden');
    }
  };

  const body = (
    <div className="px-6 pt-[13px] pb-[40px] max-h-[var(--100vh)]">
      <div className="font-medium text-black-500 text-[28px] text-center mb-[30px]">
        Download receipt
        <br />
        or request a tax invoice
      </div>
      <div className="flex items-center justify-center">
        <ReceiptTaxInvoiceImage />
      </div>
    </div>
  );

  const btnText = (
    <div>
      <span>Download receipt </span>
    </div>
  );

  return (
    <>
      <OtherLayout
        isShowPrimaryButton={true}
        isShowBackBtn={true}
        onClickBackBtn={() => router.push(`/receipt?bill_id=${bill_id}`)}
        onClickPrimaryBtn={() => router.push(`/request-tax-invoice?bill_id=${bill_id}`)}
        primaryBtnChildren="Request tax invoice"
        secondaryBtnChildren={btnText}
        onClickSecondaryBtn={handleDownloadReceipt}
        disabledPrimary={downloading || isFetching}
        disabledSecondary={downloading || isFetching}
        disabledBackBtn={downloading || isFetching}
        title=""
      >
        {body}
        {downloading && <LoadingIndicator />}
      </OtherLayout>
      <ReceiptDownLoadedImage className="hidden" bill={getSingleBill?.data} />
    </>
  );
};

export default ReceiptDownLoad;
