'use client';
import CheckboxGroup from '@/components/checkbox/CheckboxGroup';
import Icon from '@/components/DietaryIcons';
import ProductLayout from '@/components/layouts/ProductLayout';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { RootState } from '@/redux/store';
import { OPERATOR } from '@/enums';
import { useDispatch, useSelector } from 'react-redux';
import { updateBasket } from '@/redux/features/basketSlice';
import { open_sans } from '@/utils/fontUtils';
import { Skeleton } from 'antd';
import './skeleton.scss';
import { useGetSingleProductQuery } from '@/redux/services/productApi';
import { useGetSingleDiningTableQuery } from '@/redux/services/tableApi';
import { useGetSingleDiscountQuery } from '@/redux/services/discountApi';
import { getDietaryRequests } from '@/utils/commonUtils';
import TextAreaInput from '@/components/input/TextArea';

const Product = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [notes, setNotes] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [selectedDietaryRequests, setSelectedDietaryRequests] = useState<any[]>([]);

  const [totalAmount, setTotalAmount] = useState<number>(0);
  const productId = searchParams.get('id');
  const { data: productRes, isFetching } = useGetSingleProductQuery({ id: productId || '' }, { skip: !productId });

  const product = useMemo(() => productRes?.data, [productRes]);

  const bill_id = searchParams.get('bill_id');
  const tableId = useSelector((state: RootState) => state.tableReducer.tableId) as string;
  const { data: diningTablesData } = useGetSingleDiningTableQuery({ id: tableId }, { skip: !tableId });
  const diningTable = diningTablesData?.data;
  const { data: discountsData } = useGetSingleDiscountQuery(
    { id: diningTable?.discount },
    { skip: !diningTable?.discount },
  );
  const discount = discountsData?.data;
  const originalPrice = useMemo(() => (product as any)?.price || 0, [product, discount]);
  const [loadingImage, setLoadingImage] = useState(true);

  // useEffect(() => {
  //   setTotalAmount(originalPrice);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [product, originalPrice]);

  const { image_url, name, description, dietary_restrictions, modifier_ids, modifiers_info } = (product as any) || {};
  const [imageURL, setImageURL] = useState<string>('/assets/images/product-default.png');
  const dispatch = useDispatch();

  useEffect(() => {
    setLoadingImage(!!image_url);
    if (image_url) setImageURL(image_url);
  }, [image_url]);

  const getModifiersModifier = (modifiers_info: any[]) => {
    return modifiers_info?.map((modifier) => {
      const sortedOptions =
        (modifier?.modifier_options || [])
          .filter(Boolean)
          .sort((a: any, b: any) => (a.position || 0) - (b.position || 0)) || [];

      return {
        id: modifier._id,
        nameGroup: modifier?.name,
        options: sortedOptions.map((option: any) => ({
          label: option.name || '',
          price: option.price > 0 ? option.price.toString() : '',
        })),
      };
    });
  };

  const [modifierState, setModifierState] = useState<{ [groupName: string]: CheckboxValueType[] }>({});

  const handleCheckboxChange = useCallback((selectedValues: CheckboxValueType[], groupName: string) => {
    setModifierState((prevModifierState) => {
      return {
        ...prevModifierState,
        [groupName]: selectedValues,
      };
    });
  }, []);

  const allCheckedOptions = useMemo(() => {
    return modifiers_info?.flatMap((modifierGroup: any) => {
      const groupSelectedValues = modifierState[modifierGroup.name];

      if (groupSelectedValues) {
        return modifierGroup.modifier_options.filter((modifier_option: any) =>
          groupSelectedValues.includes(modifier_option.name),
        );
      }
      return [];
    });
  }, [modifierState, modifiers_info]);

  const totalCheckedOptionsPrice = useMemo(() => {
    return allCheckedOptions?.reduce(
      (accumulator: any, modifier_option: any) => accumulator + (+modifier_option?.price || 0),
      0,
    );
  }, [allCheckedOptions, discount]);

  useEffect(() => {
    setTotalAmount(+originalPrice + +totalCheckedOptionsPrice || 0);
    setSelectedOptions(allCheckedOptions);
  }, [originalPrice, totalCheckedOptionsPrice, allCheckedOptions]);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleAddToBasket = () => {
    const productItem = {
      product,
      notes: notes.trim(),
      modifiers: selectedOptions,
      dietary_restrictions: selectedDietaryRequests,
    };

    dispatch(updateBasket({ ...productItem, quantity: 1, operator: OPERATOR.ADD }));

    router.push(bill_id ? `/menu?bill_id=${bill_id}` : '/menu');
  };

  const btnText = (
    <div>
      <span>Thêm vào giỏ hàng</span> <span className="font-normal">・ {totalAmount}</span>
    </div>
  );

  return (
    <ProductLayout
      secondaryBtnChildren={btnText}
      onClickBackBtn={() => {
        router.push(bill_id ? `/menu?bill_id=${bill_id}` : '/menu');
      }}
      onClickSecondaryBtn={handleAddToBasket}
      disabledSecondary={isFetching || !product}
    >
      <div className="relative">
        {/* <div className="bg-black-500 border-full shadow-2xl h-[236px]"> */}
        {!image_url && (
          <Image
            className="rounded-full shadow-2xl mx-auto mt-[50px]"
            src={imageURL}
            alt="product"
            width={260}
            height={260}
            loading="lazy"
            onLoad={() => setLoadingImage(false)}
            onError={() => {
              setImageURL('/assets/images/product-default.png');
              setLoadingImage(false);
            }}
          />
        )}
        {(loadingImage || isFetching) && (
          <Skeleton.Avatar
            className="absolute top-0 right-1/2 transform translate-x-1/2"
            size={273}
            active
            style={{ backgroundColor: '#e5e5e5' }}
          />
        )}
        {/* </div> */}
        {isFetching ? (
          <Skeleton className="product-skeleton-paragraph px-6 pt-[88px] pb-[30px]" active paragraph={{ rows: 3 }} />
        ) : (
          <div className="flex flex-col px-6 pt-[88px] pb-[30px] text-black-500 space-y-[29px]">
            <div className="flex flex-col space-y-[15px]">
              <span className="text-2xl font-medium">{name}</span>
              <span
                className={`text-sm font-normal ${open_sans.className}`}
                dangerouslySetInnerHTML={{ __html: description || '' }}
              />
              <div className="flex space-x-[9px] items-start">
                {Array.isArray(dietary_restrictions) &&
                  dietary_restrictions.map((item, index) => <Icon key={index} iconName={item} />)}
              </div>
            </div>
            {modifier_ids?.length > 0 &&
              getModifiersModifier(modifiers_info)?.map((modifier, index) => (
                <CheckboxGroup
                  key={index}
                  groupName={modifier.nameGroup ?? ''}
                  options={modifier.options ?? []}
                  onChange={handleCheckboxChange}
                />
              ))}
            {getDietaryRequests((product as any)?.dietary_restrictions || [])?.length > 0 && (
              <CheckboxGroup
                groupName="Chế độ ăn kiêng"
                options={
                  getDietaryRequests((product as any)?.dietary_restrictions || [])?.map((label: any) => ({
                    label: 'Làm từ ' + label,
                  })) ?? []
                }
                onChange={(value) => {
                  setSelectedDietaryRequests(value);
                }}
              />
            )}
            <div className="flex flex-col space-y-2.5">
              <span className="font-medium text-sm text-black-400">Ghi chú</span>
              <TextAreaInput valuePlaceholder="Thêm ghi chú cho nhà bếp" onChange={handleTextAreaChange} />
            </div>
          </div>
        )}
      </div>
    </ProductLayout>
  );
};

export default Product;
