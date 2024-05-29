'use client';
import React, { useEffect, useState } from 'react';
import OtherLayout from '@/components/layouts/OtherLayout';
import { open_sans } from '@/utils/fontUtils';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useCreateTaxInvoiceMutation, useGetSingleBillQuery } from '@/redux/services/billApi';
import { validateIsNotEmpty, validateTaxID } from '@/utils/commonUtils';
import InputText from '@/components/input/Input';
import TextAreaInput from '@/components/input/TextArea';
interface PropsStateForm {
  companyName: string;
  headOffice: string;
  taxId: string;
  address: string;
}
const initStateForm: PropsStateForm = {
  companyName: '',
  headOffice: '',
  taxId: '',
  address: '',
};

const RequestTaxInvoice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');
  const { data: getSingleBill, isFetching } = useGetSingleBillQuery({ id: bill_id || '' }, { skip: !bill_id });
  const [formData, setFormData] = useState<PropsStateForm>({ ...initStateForm });
  const [errors, setErrors] = useState<PropsStateForm>({ ...initStateForm });
  const [createTaxInvoice, { isLoading }] = useCreateTaxInvoiceMutation();

  const errorMessageMap = {
    companyName: 'Company name is required',
    headOffice: 'Head office is required',
    taxId: 'Invalid Tax ID (should be a 13-digit ID)',
    address: 'Address is required',
  };

  const validateFormInput = (field: keyof PropsStateForm, value: string) => {
    if (field === 'taxId') {
      return validateTaxID(value) ? '' : errorMessageMap[field];
    }
    return validateIsNotEmpty(value) ? '' : errorMessageMap[field];
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof PropsStateForm,
  ) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      [field]: value,
    });
    setErrors({
      ...errors,
      [field]: validateFormInput(field, value.trim()),
    });
  };

  useEffect(() => {
    const data = getSingleBill?.data?.tax_invoice_info;
    if (!data) return;
    setFormData({
      headOffice: data.head_office,
      taxId: data.tax_id,
      address: data.address,
      companyName: data.company,
    });
  }, [getSingleBill]);
  const isValidForm =
    validateIsNotEmpty(formData.companyName) &&
    validateIsNotEmpty(formData.headOffice) &&
    validateTaxID(formData.taxId) &&
    validateIsNotEmpty(formData.address);

  const handleSubmitRequestTaxInvoiceButton = () => {
    const data = {
      head_office: formData.headOffice.trim(),
      tax_id: formData.taxId,
      bill_id: bill_id,
      address: formData.address.trim(),
      company: formData.companyName.trim(),
    };
    if (isValidForm) {
      createTaxInvoice({ data: data })
        .unwrap()
        .then(() => toast.success('Request tax invoice successfully'))
        .catch((err) => toast.error(err?.data?.message));
    }
  };

  const body = (
    <div className="px-4 pt-[13px] pb-[40px]">
      <div className="px-[8px] flex flex-col space-y-[20px]">
        <div>
          <div className="font-medium text-[18px] text-black-400"> Company/recipient name </div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <InputText
              disabled={isLoading || isFetching}
              required
              value={formData.companyName}
              onChange={(e) => handleInputChange(e, 'companyName')}
              placeholder="E.g. Company Name Co., Ltd. (required)"
            />
            {errors.companyName && <span className="text-red-400 text-[18px]">{errors.companyName}</span>}
          </div>
        </div>
        <div>
          <div className="font-medium text-[18px] text-black-400"> Branch ID </div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <InputText
              disabled={isLoading || isFetching}
              required
              value={formData.headOffice}
              onChange={(e) => handleInputChange(e, 'headOffice')}
              placeholder="E.g. Head office (required)"
            />
          </div>
          {errors.headOffice && <span className="text-red-400 text-[18px]">{errors.headOffice}</span>}
        </div>
        <div>
          <div className="font-medium text-[18px] text-black-400"> Tax ID </div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <InputText
              disabled={isLoading || isFetching}
              required
              value={formData.taxId}
              onChange={(e) => handleInputChange(e, 'taxId')}
              placeholder="13-digit ID (required)"
            />
          </div>
          {errors.taxId && <span className="text-red-400 text-[18px]">{errors.taxId}</span>}
        </div>
        <div>
          <div className="font-medium text-[18px] text-black-400"> Address</div>
          <div className={`mt-[10px] ${open_sans.className}`}>
            <TextAreaInput
              disabled={isLoading || isFetching}
              required
              value={formData.address}
              onChange={(e) => handleInputChange(e, 'address')}
              valuePlaceholder="Enter full address (required)"
            />
          </div>
          {errors.address && <span className="text-red-400 text-[18px]">{errors.address}</span>}
        </div>
      </div>
    </div>
  );
  const btnText = (
    <div>
      <span>Submit request for tax invoice </span>
    </div>
  );

  return (
    <OtherLayout
      isShowPrimaryButton={false}
      isTextRequestTaxInvoice={true}
      disabledSecondary={!isValidForm || isLoading || isFetching}
      onClickSecondaryBtn={handleSubmitRequestTaxInvoiceButton}
      isShowBackBtn={true}
      disabledBackBtn={isLoading || isFetching}
      onClickBackBtn={() => router.push(`/receipt/receipt-download?bill_id=${bill_id}`)}
      secondaryBtnChildren={btnText}
      title="Request tax invoice"
    >
      {body}
      {isLoading && <LoadingIndicator />}
    </OtherLayout>
  );
};

export default RequestTaxInvoice;
