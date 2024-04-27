'use client';
import { DISCOUNT_TYPE, OPERATOR } from '@/enums';
import { updateBasket } from '@/redux/features/basketSlice';
import { open_sans } from '@/utils/fontUtils';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CountButton } from '../button';
import CustomizedModal from '../modal/CustomizedModal';
import ProductImage from '../productImage';

interface ItemsProps {
  name: string;
  price: number;
  image_url: string;
  discount?: any;
  className?: string;
  quantity: number;
  priceAfterDiscount?: number;
  note?: string;
  onCountButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  modifiers?: {
    id: string;
    name: string;
    price: number;
    position: number;
  }[];
  isNewItem?: boolean;
  item?: any;
  dietary_restrictions?: string[];
  isEmptyBasket?: boolean;
  disabled?: boolean;
}

const OrderItem: React.FC<ItemsProps> = ({
  name,
  price,
  priceAfterDiscount,
  image_url,
  discount,
  className,
  note,
  quantity,
  modifiers,
  isNewItem,
  item,
  dietary_restrictions,
  disabled,
}) => {
  const [newQuantity, setNewQuantity] = useState<number>(quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (newQuantity > 1) {
      dispatch(
        updateBasket({
          product: item,
          quantity: 1,
          operator: OPERATOR.SUB,
          dietary_restrictions: dietary_restrictions,
          notes: note,
          modifiers: modifiers,
        }),
      );
    }
    setNewQuantity((prevState) => {
      if (prevState === 1) {
        showModal();
        return prevState;
      }
      return prevState - 1;
    });
  };

  const handleIncrement = () => {
    dispatch(
      updateBasket({
        product: item,
        quantity: 1,
        operator: OPERATOR.ADD,
        dietary_restrictions: dietary_restrictions,
        notes: note,
        modifiers: modifiers,
      }),
    );
    setNewQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(
      updateBasket({
        product: item,
        quantity: 0,
        dietary_restrictions: dietary_restrictions,
        notes: note,
        modifiers: modifiers,
      }),
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setNewQuantity(1);
    setIsModalOpen(false);
  };

  return (
    <div className={`${className || ''} flex w-full`}>
      <ProductImage className="mr-[24px]" width={86} height={86} src={image_url} alt={name} />
      <div className="flex flex-col w-full">
        <div className="text-[14px] text-black-400 ">{name}</div>
        {modifiers && modifiers?.length > 0 && (
          <div className="flex flex-col mt-[7px] text-[10px] text-black-500">
            {modifiers.map((modifier: any, index: number) => (
              <div key={index} className={`flex items-center justify-between ${open_sans.className}`}>
                <div> Add {modifier.name}</div>
                {modifier?.price > 0 && (
                  <div>
                    {(discount?.type === DISCOUNT_TYPE.FIXED_PERCENT && (
                      <div className={`flex space-x-[3px]`}>
                        <div> + </div>
                        <div className="line-through">{modifier.price}</div>
                        <div className="">{modifier.price}</div>
                      </div>
                    )) || <div className=" text-black-400">+ {modifier.price}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {dietary_restrictions && dietary_restrictions?.length > 0 && (
          <div className="flex flex-col mt-[7px] text-[10px] text-black-500">
            {dietary_restrictions.map((dietary: any, index: number) => (
              <div key={index} className={`flex items-center justify-between ${open_sans.className}`}>
                {dietary}
              </div>
            ))}
          </div>
        )}
        {note && (
          <div className={`flex space-x-[5px] text-[10px] text-black-500 mt-[7px] ${open_sans.className}`}>
            <div>Note: {note}</div>
          </div>
        )}

        <div className="flex items-center justify-between mt-[15px]">
          {isNewItem ? (
            <div className="flex space-x-4 items-center w-fit">
              <CountButton plus={false} disabled={disabled || newQuantity === 0} onClick={handleDecrement} />
              <span className="font-normal text-base text-center text-black-400 w-4">{newQuantity}</span>
              <CountButton onClick={handleIncrement} disabled={disabled} />
            </div>
          ) : (
            <div className="flex space-x-[10px]">
              <div> x {quantity}</div>
            </div>
          )}
          {(discount?.type === DISCOUNT_TYPE.FIXED_PERCENT && (
            <div className="flex space-x-[3px]">
              <div className={`text-[14px] text-black-400 line-through`}>{price * newQuantity}</div>
              <div className="text-[14px] text-black-500">{priceAfterDiscount || price * newQuantity}</div>
            </div>
          )) || <div className="text-[14px] text-black-400">{price * newQuantity}</div>}
        </div>

        <CustomizedModal open={isModalOpen} title="Remove item" okText="Remove" onOk={handleOk} onCancel={handleCancel}>
          Are you sure you want to remove the {name?.toLowerCase()} from your basket?
        </CustomizedModal>
      </div>
    </div>
  );
};

export default OrderItem;
