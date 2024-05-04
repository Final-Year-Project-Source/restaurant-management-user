import { open_sans } from '@/utils/fontUtils';
import { GoogleIcon, TrapadvisorIcon, WongnaiIcon } from '@/components/Icons';
import { Button } from '@/components/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import copy from 'copy-to-clipboard';
import { Tooltip } from 'antd';
import TextAreaInput from '@/components/input/TextArea';

const MoreStarsPage = ({ comment, customerName }: { comment: string; customerName: string }) => {
  const [review, setReview] = useState(comment);
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);

  const handleCopyReview = () => {
    copy(review);
    setOpenTooltip(true);
  };

  useEffect(() => {
    if (openTooltip) {
      setTimeout(() => {
        setOpenTooltip(false);
      }, 500);
    }
  }, [openTooltip]);

  return (
    <div className="px-6 pt-[13px] pb-[40px]">
      <div className="font-medium text-black-500 text-[24px] text-center mb-3">Thank you, {customerName} 🙏</div>
      <div className="text-black-500 text-[14px] text-center mb-4">
        We sincerely appreciate your positive feedback.
        <br />
        It means a lot to the team!
      </div>
      <div className="text-black-400 text-[14px] text-center font-medium mb-[7px]">Help us spread the word</div>
      <div className={`text-black-500 text-[10px] text-center mb-[20px] ${open_sans.className}`}>
        Review us on Google, Tripadvisor, or Wongnai
      </div>
      <div className="flex space-x-[20px] items-center justify-center mb-[30px]">
        <Link target="_blank" className="cursor-pointer" href="https://g.page/r/CRr-1gtSxRZMEBM/review">
          <GoogleIcon />
        </Link>
        <Link
          target="_blank"
          className="cursor-pointer"
          href="https://www.tripadvisor.com/UserReviewEdit-g293916-d21373705-Yellow_Lane-Bangkok.html"
        >
          <TrapadvisorIcon />
        </Link>
        <Link
          target="_blank"
          className="cursor-pointer"
          href="https://www.wongnai.com/restaurants/662304hK-yellow-lane-cafe-ari"
        >
          <WongnaiIcon />
        </Link>
      </div>
      <div className="font-medium text-[14px] text-black-400"> Here&rsquo;s your review to copy &amp; paste </div>
      <div className={`mt-[10px] mb-[23px] ${open_sans.className}`}>
        <TextAreaInput
          valueInput={review}
          required
          valuePlaceholder=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)}
        />
      </div>
      <Tooltip placement="top" title="Copied review" open={openTooltip}>
        <Button onClick={handleCopyReview} variant="primary">
          Copy your review
        </Button>
      </Tooltip>
    </div>
  );
};

export default MoreStarsPage;
