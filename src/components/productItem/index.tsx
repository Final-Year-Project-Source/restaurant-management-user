'use client';
import React from 'react';
import CountButton from '@/components/button/CountButton';
import { open_sans } from '@/utils/fontUtils';
import ProductImage from '../ProductImage';
import Tag from '../Tag';
import { formatPrice } from '@/utils/commonUtils';

interface ItemsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  discountPrice?: number;
  className?: string;
  track_stock: boolean;
}

const ProductItem: React.FC<ItemsProps> = ({
  id,
  name,
  description,
  price,
  image_url,
  discountPrice,
  className,
  track_stock,
}) => {
  return (
    <div className={`${className || ''} ${(!track_stock && 'opacity-50') || ''} flex w-full`}>
      <ProductImage className="mr-[24px]" width={86} height={86} src={image_url} alt={name} />
      <div className="flex flex-col w-full">
        <div className="text-[18px] text-red-50">{name}</div>
        <div
          className={`text-[13px] text-black-300 mt-[7px] ${open_sans.className}`}
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
        <div className="flex items-center justify-between mt-[9px]">
          {(discountPrice! < price && (
            <div className="flex space-x-[3px]">
              <div className="text-[18px] text-black-400 line-through">{price}</div>
              <div className="text-[18px] text-black-500">{discountPrice}</div>
            </div>
          )) || <div className="text-[15px] text-back-500">{`${formatPrice(price)} vnd`}</div>}
          <div className="flex space-x-[10px]">
            {!track_stock && <Tag>Out of stock</Tag>}
            {track_stock && (
              <CountButton
                className="btn--add-to-basket"
                id={`btn--add_${id}`}
                plus={true}
                variant="secondary"
                disabled={!track_stock}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
