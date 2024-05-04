'use client';
import '@/app/menu/menu.scss';
import CheckboxGroup from '@/components/checkbox/CheckboxGroup';
import { useWindowDimensions } from '@/components/hooks/useWindowDimensions';
import MenuLayout from '@/components/layouts/MenuLayout';
import OtherLayout from '@/components/layouts/OtherLayout';
import LoadingIndicator from '@/components/LoadingIndicator';
import ProductItem from '@/components/ProductItem';
import { updateDietaryRestrictions, updateProtein } from '@/redux/features/menuFilterSlice';
import { useGetSingleBillQuery } from '@/redux/services/billApi';
import { useGetCategoriesQuery } from '@/redux/services/categoryApi';
import { useGetSingleDiscountQuery } from '@/redux/services/discountApi';
import { useGetFilteredProductsQuery } from '@/redux/services/productApi';
import { useGetSingleDiningTableQuery } from '@/redux/services/tableApi';
import { RootState } from '@/redux/store';
import {
  DIETARY_RESTRICTIONS,
  FOOTER_HEIGHT,
  PADDING_TO_HEADER,
  PROTEINS,
  STICKY_HEADER_HEIGHT,
} from '@/utils/constants';
import { ConfigProvider, Drawer, Empty } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { debounce } from 'lodash';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function MenuUI() {
  const dispatch = useDispatch();
  const [height, setHeight] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const filterProteinDefault = useSelector(
    (state: RootState) => state.menuFilterReducer.protein,
  ) as CheckboxValueType[];
  const filterDietaryRestrictions = useSelector(
    (state: RootState) => state.menuFilterReducer.dietaryRestrictions,
  ) as CheckboxValueType[];
  const [selectedCheckboxDietaryRestrictionsValues, setSelectedCheckboxDietaryRestrictionsValues] = useState<
    CheckboxValueType[]
  >([]);
  const [selectedCheckboxProteinValues, setSelectedCheckboxProteinValues] = useState<CheckboxValueType[]>([]);
  const tableId = useSelector((state: RootState) => state.tableReducer.tableId) as string;
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: allCategories } = useGetCategoriesQuery();
  const { data: diningTablesData } = useGetSingleDiningTableQuery({ id: tableId || '' }, { skip: !tableId });
  const diningTable = diningTablesData?.data;
  const { data: discountsData } = useGetSingleDiscountQuery(
    { id: diningTable?.discount },
    { skip: !diningTable?.discount },
  );
  const discount = discountsData?.data;
  const { data: filteredProductsData, isFetching } = useGetFilteredProductsQuery({
    search: searchValue,
    dietary_restrictions: selectedCheckboxDietaryRestrictionsValues,
    proteins: selectedCheckboxProteinValues,
  });

  const Categories = useMemo(() => {
    if (allCategories?.data) {
      return [...allCategories?.data].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return [];
    }
  }, [allCategories]);

  const products = filteredProductsData?.data;
  const organizeProductsByCategory = (products: any[], categories: any[]) => {
    const clonedCategories = Array.isArray(categories) ? [...categories] : [];

    const organizedCategories = clonedCategories
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((category) => {
        const categoryItems = products?.filter((product) => product.category_id === category._id);
        if (categoryItems?.length > 0) {
          const sortedItems = categoryItems.sort((a, b) => a.name.localeCompare(b.name));
          return {
            id: category._id,
            name: category.name,
            items: sortedItems,
          };
        }
        return null;
      })
      .filter(Boolean);

    return organizedCategories;
  };

  const organizedProductsAfterFilter = useMemo(
    () => organizeProductsByCategory(products, Categories),
    [products, Categories],
  );

  const [activeCategory, setActiveCategory] = useState<string>(Categories?.[0]?.id);
  const [isClickedCategoryBtn, setIsClickedClickCategoryBtn] = useState<boolean>(false);
  const allItemInBasket = useSelector((state: RootState) => state.basketReducer.basket) as any;
  const [basketOrderItems, setBasketOrderItems] = useState<any[]>([]);

  const searchParams = useSearchParams();
  const bill_id = searchParams.get('bill_id');
  const { data: getSingleBill, isFetching: isBillFetching } = useGetSingleBillQuery(
    { id: bill_id || '' },
    { skip: !bill_id },
  );

  const totalItems =
    (basketOrderItems?.length || 0) +
    (getSingleBill?.data?.orders?.reduce((acc: number, order: any) => acc + order.items.length, 0) || 0);

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  useEffect(() => {
    setBasketOrderItems(allItemInBasket?.orderItems);
  }, [allItemInBasket]);

  const [dietaryRestrictionsSelected, setDietaryRestrictionsSelected] = useState<CheckboxValueType[]>([]);
  const [proteinsSelected, setProteinsSelected] = useState<CheckboxValueType[]>([]);

  useEffect(() => {
    setSelectedCheckboxDietaryRestrictionsValues(filterDietaryRestrictions);
    setSelectedCheckboxProteinValues(filterProteinDefault);
    setDietaryRestrictionsSelected(filterDietaryRestrictions);
    setProteinsSelected(filterProteinDefault);
  }, [filterDietaryRestrictions, filterProteinDefault, open]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleCheckboxDietaryRestrictionsChange = (selectedValues: CheckboxValueType[]) => {
    setDietaryRestrictionsSelected(selectedValues);
    // setActiveCategory('');
  };
  const handleCheckboxProteinChange = (selectedValues: CheckboxValueType[]) => {
    setProteinsSelected(selectedValues);
    // setActiveCategory('');
  };

  // const getBadge = () => {
  //   const node = document.createElement('span');
  //   node.classList.add('cart-item-badge');
  //   return node;
  // };

  // const handleCountButtonClick = (e: React.MouseEvent<HTMLButtonElement>, product: any) => {
  //   e.stopPropagation();

  //   const addToBasketBtn = document.getElementById(`btn--add_${product?.id}`);
  //   const { x: xA, y: yA } = addToBasketBtn?.getBoundingClientRect() as any;
  //   const cartItemBadge = getBadge();
  //   addToBasketBtn?.appendChild(cartItemBadge);

  //   const basketElement = document.getElementById('basket-ele');
  //   const { x: xB, y: yB, height: heightBasketElement } = basketElement?.getBoundingClientRect() as any;

  //   cartItemBadge!.style.transform = `translate(${-Math.abs(xA - xB)}px,${
  //     Math.abs(yA - yB) - heightBasketElement / 2
  //   }px)`;

  //   setTimeout(function () {
  //     addToBasketBtn?.removeChild(cartItemBadge);
  //     // update local storage
  //     dispatch(updateBasket({ product, quantity: 1, operator: OPERATOR.ADD }));
  //   }, 1000);
  // };

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (Math.abs(entries.length - Categories.length) <= 1) return;
      entries.forEach((entry) => {
        if (entry.target.id && entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    },
    [Categories],
  );

  const debouncedHandleSearch = debounce((value: string) => {
    setSearchValue(value);
  }, 500);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleSearch(e.target.value);
  };

  useEffect(() => {
    setActiveCategory(organizedProductsAfterFilter?.[0]?.id);
  }, [organizedProductsAfterFilter]);

  useEffect(() => {
    if (isClickedCategoryBtn) return;
    const headerHeight = STICKY_HEADER_HEIGHT + PADDING_TO_HEADER;
    const rootMarginTop = (headerHeight / windowHeight) * 100;
    const rootMarginBottom = 100 - rootMarginTop;

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: `-${rootMarginTop}% 0px -${rootMarginBottom}% 0px`,
    });
    const categoryTitle = document.querySelectorAll('.category--item');

    categoryTitle.forEach((category) => {
      observer.observe(category);
    });

    return () => {
      observer.disconnect();
    };
  }, [isClickedCategoryBtn, handleIntersection, filteredProductsData, windowHeight]);

  // // trick to demo
  // useEffect(() => {
  //   return () => {
  //     if (Feedbacks.length > 2) Feedbacks.pop();
  //   };
  // }, []);

  const btnText = (
    <div>
      <span>View basket</span>
      <span id="basket-ele" className="font-normal">
        ・{totalItems} item
        {totalItems > 1 ? 's' : ''}
      </span>
    </div>
  );

  useEffect(() => {
    if (organizedProductsAfterFilter) {
      const categoryElements = document.querySelectorAll('#last-category');
      const lastCategoryElement = categoryElements[categoryElements.length - 1];

      if (lastCategoryElement) {
        const rect = lastCategoryElement.getBoundingClientRect();
        const heightItem = rect.height;
        const marginBottomToItem = 40;
        const deviation = 1;
        const totalHeight =
          windowHeight -
          (STICKY_HEADER_HEIGHT + FOOTER_HEIGHT + heightItem + marginBottomToItem + PADDING_TO_HEADER) +
          deviation;
        deviation;
        setHeight(totalHeight);
      }
    }
  }, [organizedProductsAfterFilter]);

  return (
    <>
      <MenuLayout
        secondaryBtnChildren={btnText}
        onClickSecondaryBtn={() => router.push(bill_id ? `/basket?bill_id=${bill_id}` : '/basket')}
        toggleFilter={showDrawer}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isClickedCategoryBtn={isClickedCategoryBtn}
        handleSearch={handleSearch}
        setIsClickedClickCategoryBtn={setIsClickedClickCategoryBtn}
        isEmptyData={!organizedProductsAfterFilter?.length}
        disabledSecondary={!totalItems}
        categories={organizedProductsAfterFilter}
        bottomHeight={height}
      >
        <main className="flex flex-col justify-center px-[24px] h-full">
          {organizedProductsAfterFilter?.length === 0 && !isFetching && (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={<span className="text-black-300 text-lg">No items found</span>}
            />
          )}
          {organizedProductsAfterFilter?.map((category, index) => {
            const length = category?.items?.length || 0;
            return (
              <div
                id="last-category"
                key={category?.id}
                className={`flex flex-col justify-start w-full mb-[40px] ${index === 0 ? 'pt-[5px]' : ''}`}
              >
                <p id={category?.id} className="text-[24px] font-medium text-black-500 leading-7 category--item">
                  {category?.name}
                </p>
                <div className="flex flex-col w-full mt-[30px]">
                  {category?.items?.map((item, index) => (
                    <Link
                      className={`${item.is_available ? 'cursor-pointer' : 'pointer-events-none'}`}
                      key={item._id}
                      href={bill_id ? `/product?id=${item._id}&bill_id=${bill_id}` : `/product?id=${item._id}`}
                    >
                      <div className={index !== 0 ? 'mt-[22px]' : ''}>
                        <ProductItem
                          id={item._id}
                          name={item.name}
                          image_url={item.image_url}
                          description={item.description}
                          price={item.price}
                          track_stock={item.is_available}
                        />
                      </div>
                      {index < length - 1 && <hr className="w-full border-t border-black-100 mt-[18px]" />}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div style={{ height: height }} />
          {open && (
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: 'var(--font-rubik)',
                },
              }}
            >
              <Drawer title="" closable={false} placement="left" onClose={onClose} open={open} width={windowWidth}>
                <OtherLayout
                  isShowPrimaryButton={false}
                  isShowBackBtn={true}
                  onClickBackBtn={onClose}
                  secondaryBtnChildren={<>Apply filters</>}
                  // disabledSecondary={!dietaryRestrictionsSelected?.length && !proteinsSelected?.length}
                  onClickSecondaryBtn={() => {
                    // update to localstorage filters
                    dispatch(updateDietaryRestrictions(dietaryRestrictionsSelected));
                    dispatch(updateProtein(proteinsSelected));

                    onClose();
                  }}
                  title="Filter menu"
                >
                  <div className="flex flex-col space-y-[29px] mt-[12px] pl-[25px]">
                    <CheckboxGroup
                      defaultValue={filterDietaryRestrictions}
                      {...DIETARY_RESTRICTIONS}
                      onChange={handleCheckboxDietaryRestrictionsChange}
                    />
                    <CheckboxGroup
                      defaultValue={filterProteinDefault}
                      {...PROTEINS}
                      onChange={handleCheckboxProteinChange}
                    />
                  </div>
                </OtherLayout>
              </Drawer>
            </ConfigProvider>
          )}
        </main>
      </MenuLayout>
      {(isFetching || isBillFetching) && <LoadingIndicator />}
    </>
  );
}
