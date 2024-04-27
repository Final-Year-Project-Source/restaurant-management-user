'use client';
import { Button } from '@/components/button';
import { useWindowDimensions } from '@/components/hooks/useWindowDimensions';
import CustomizedModal from '@/components/modal/CustomizedModal';
import { removeTable, setTable } from '@/redux/features/tableSlice';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function LandingPage() {
  const router = useRouter();
  const { isMobile } = useWindowDimensions();
  const searchParams = useSearchParams();
  const tableId = searchParams.get('table_id');
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClick = () => {
    if (tableId) {
      dispatch(setTable(tableId));

      router.push('/menu');
    } else {
      setIsModalOpen(true);
      dispatch(removeTable());
    }
  };

  return (
    <div className="w-full h-full max-md:bg-red-100 max-md:pt-[56px] relative">
      <div className="max-md:block hidden">
        <div className="px-[50px]">
          <div className="w-[73px] h-[73px] bg-white rounded-full flex items-center justify-center">
            <Image priority src={'/assets/icons/mini-logo.svg'} alt="logo" width={50} height={50} />
          </div>

          <div className="flex flex-col text-white space-y-5 mt-[50px]">
            <span className="font-medium text-[60px] leading-10">Đồ ăn cho</span>
            <span className="font-medium text-[60px] leading-10">mọi người</span>
          </div>
        </div>
        <div className="flex pt-[45px]">
          <Image
            className="absolute left-0 bottom-[5%]"
            priority
            src={'/assets/icons/person1.svg'}
            alt="person1"
            width={250}
            height={250}
          />
          <Image
            className="pt-[50px] absolute right-0 bottom-[5%]"
            priority
            src={'/assets/icons/person2.svg'}
            alt="person2"
            width={150}
            height={200}
          />
        </div>
      </div>
      <div className="md:block hidden h-full">
        <div className="w-full h-2/3 relative">
          <div className="flex flex-col z-20 absolute top-[10%] right-1/2 transform translate-x-1/2 items-center justify-center">
            <span className="text-white font-bold text-[40px] whitespace-nowrap">Tại sao lại để mình đói khi</span>
            <span className="text-white font-bold text-[40px] whitespace-nowrap">
              bạn có thể đặt món ăn từ Bella Onojie
            </span>
          </div>

          <Image priority src={`/assets/images/landing-page.png`} alt="landing-page" fill className="z-10" />
        </div>
        <Image
          priority
          className="absolute bottom-[85%] left-0 z-10"
          src={'/assets/icons/logo.svg'}
          alt="logo"
          width={200}
          height={200}
        />
        <div className="w-full h-1/3 bg-white relative">
          <Image
            priority
            className="absolute bottom-[0%] right-1/2 transform translate-x-1/2 z-10"
            src={'/assets/images/mobile.png'}
            alt="logo"
            width={375}
            height={300}
          />
        </div>
      </div>

      <div className="absolute md:bottom-[65%] bottom-[5%] md:w-[300px] w-full px-[50px] z-30 right-1/2 transform translate-x-1/2">
        <Button onClick={handleOnClick}>Đặt món ngay</Button>
      </div>
      <CustomizedModal
        open={isModalOpen}
        title="Thông báo"
        okText="Xác nhận"
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        Bạn cần quét mã QR trên bàn ăn trước khi đặt món.
      </CustomizedModal>
    </div>
  );
}
