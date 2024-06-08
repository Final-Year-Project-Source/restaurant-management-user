'use client';
import TextAreaInput from '@/components/input/TextArea';
import OtherLayout from '@/components/layouts/OtherLayout';
import LoadingIndicator from '@/components/LoadingIndicator';
import Stars from '@/components/Stars';
import { useCreateFeedbackMutation } from '@/redux/services/billApi';
import { open_sans } from '@/utils/fontUtils';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
const Feedback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');
  const stars = parseInt(searchParams.get('stars') || '0');
  const [valueRating, setValueRating] = useState<number>(stars || 0);
  const [loading, setLoading] = useState<boolean>(false);
  const [createFeedback, { isLoading: isCreateLoading }] = useCreateFeedbackMutation();

  const handleRatingStars = (value: number) => {
    setValueRating(value);
  };
  const handleSubmitFeedBackButton = () => {
    setLoading(true);
    const newFeedback = {
      bill: bill_id,
      comment: comment.trim(),
      stars: valueRating,
    };
    createFeedback({ data: newFeedback })
      .unwrap()
      .then((res) => {
        router.push(`/feedback/rating?bill_id=${bill_id}`);
      })
      .catch((err) => toast.error(err?.data?.message));
  };

  const handleClickBackBtn = () => {
    router.push(`/receipt?bill_id=${bill_id}`);
  };
  const [comment, setComment] = useState('');
  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const body = (
    <div className="px-6 pt-[13px]">
      <div className="text-black-500 text-[18px] text-center mb-[20px]">
        We strive to always provide a 5-star experience.
        <br />
        How was it for you?
      </div>
      <div className="flex justify-center mb-[30px]">
        <Stars value={stars} onRateChange={handleRatingStars} disabled={isCreateLoading || loading} />
      </div>

      <div className="font-medium text-[18px] text-black-400"> Tell us your thoughts </div>
      <div className={`mt-[10px] mb-[40px] ${open_sans.className}`}>
        <TextAreaInput
          disabled={isCreateLoading || loading}
          onChange={handleComment}
          required
          valuePlaceholder="Comment here (optional)"
        />
      </div>
    </div>
  );
  const btnText = (
    <div>
      <span>Submit your feedback </span>
    </div>
  );

  return (
    <OtherLayout
      isShowPrimaryButton={false}
      isShowBackBtn={true}
      onClickBackBtn={handleClickBackBtn}
      onClickSecondaryBtn={handleSubmitFeedBackButton}
      primaryBtnChildren="Order something else"
      secondaryBtnChildren={btnText}
      disabledBackBtn={isCreateLoading || loading}
      disabledSecondary={isCreateLoading || loading}
      title="Feedback"
    >
      {body}
      {(isCreateLoading || loading) && <LoadingIndicator />}
    </OtherLayout>
  );
};

export default Feedback;
