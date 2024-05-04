'use client';
import OtherLayout from '@/components/layouts/OtherLayout';
import { useUpdateFeedbackMutation } from '@/redux/services/feedbackApi';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import LessStarsPage from './LessStarsPage';
import MoreStarsPage from './MoreStarsPage';
import LoadingIndicator from '@/components/LoadingIndicator';
import { useGetSingleBillQuery } from '@/redux/services/billApi';
import { validateEmail, validatePhoneNumber } from '@/utils/commonUtils';
const Rating = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');

  const { data: getSingleOrder, isFetching } = useGetSingleBillQuery({ id: bill_id || '' });
  const bill = getSingleOrder?.data;
  const [updateFeedback, { isLoading }] = useUpdateFeedbackMutation();

  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const isEmailValid = validateEmail(email);
  const isPhoneValid = validatePhoneNumber(phone);

  const isFormValid = email.trim() !== '' && isEmailValid && (phone.trim() === '' || isPhoneValid);
  const handleSubmitButton = () => {
    updateFeedback({ data: { id: bill.feedback_info?._id, contact_email: email.trim(), contact_phone: phone.trim() } })
      .unwrap()
      .then(() => router.push(`/feedback/rating/thank-you?bill_id=${bill_id}`))
      .catch((err) => toast.error(err?.data?.message));
  };

  return (
    <>
      {!!bill?.feedback_info &&
        (bill?.feedback_info?.stars > 3 ? (
          <OtherLayout
            isShowPrimaryButton={false}
            isShowBackBtn={true}
            onClickBackBtn={() => router.push(`/receipt?bill_id=${bill_id}`)}
            secondaryBtnChildren="Start ordering again"
            onClickSecondaryBtn={() => router.push('/menu')}
            title="Feedback"
            disabledBackBtn={isFetching}
            disabledSecondary={isFetching}
          >
            <MoreStarsPage customerName={bill?.customer_name} comment={bill?.feedback_info?.comment} />
          </OtherLayout>
        ) : (
          <OtherLayout
            disabledSecondary={!isFormValid || isLoading || isFetching}
            disabledBackBtn={isLoading || isFetching}
            disabledPrimary={isLoading || isFetching}
            isShowPrimaryButton={true}
            isShowBackBtn={true}
            primaryBtnChildren="Start ordering again"
            onClickPrimaryBtn={() => router.push('/menu')}
            secondaryBtnChildren="Submit your contact details"
            onClickBackBtn={() => router.push(`/receipt?bill_id=${bill_id}`)}
            onClickSecondaryBtn={handleSubmitButton}
            title="Feedback"
          >
            <LessStarsPage
              email={email}
              phone={phone}
              isEmailValid={isEmailValid}
              isPhoneValid={isPhoneValid}
              handleEmailChange={handleEmailChange}
              handlePhoneChange={handlePhoneChange}
              disabled={isLoading || isFetching}
            />
          </OtherLayout>
        ))}
      {(isFetching || isLoading) && <LoadingIndicator />}
    </>
  );
};

export default Rating;
