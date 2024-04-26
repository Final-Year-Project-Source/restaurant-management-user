'use client';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { IconButton } from '../button';
import { FilterIcon } from '../Icons';
import SearchInput from '../input/searchInput';
import Footer, { FooterProps } from './Footer';
import CategoryButton from '@/components/button/CategoryButton';
import { CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useScrollbarState } from '../hooks/useScrollbarState';
export interface MenuLayoutProps extends FooterProps {
  children?: React.ReactNode;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleFilter?: () => void;
  onSelectCategory?: () => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
  isClickedCategoryBtn: boolean;
  setIsClickedClickCategoryBtn: (value: boolean) => void;
  isEmptyData?: boolean;
  categories?: any;
}

const MenuLayout: FC<MenuLayoutProps> = ({
  children,
  handleSearch,
  disabledSecondary,
  toggleFilter,
  onClickSecondaryBtn,
  onClickPrimaryBtn,
  secondaryBtnChildren,
  primaryBtnChildren,
  isShowPrimaryButton,
  activeCategory,
  setActiveCategory,
  isClickedCategoryBtn,
  setIsClickedClickCategoryBtn,
  isEmptyData,
  categories,
}) => {
  const categoryBarRef = useRef(null);
  const isSticky = (categoryBarRef?.current as any)?.getBoundingClientRect()?.top === 0;
  const menuLayoutRef = useRef(null);
  const menuFilterReducer = useSelector((state: RootState) => state.menuFilterReducer);
  const [menuFilter, setMenuFilter] = useState<any>();
  const { scrollBottom } = useScrollbarState(menuLayoutRef);

  const filterProtein = useMemo(() => menuFilter?.protein || ([] as CheckboxValueType[]), [menuFilter]);
  const filterDietaryRestrictions = useMemo(
    () => menuFilter?.dietaryRestrictions || ([] as CheckboxValueType[]),
    [menuFilter],
  );
  const badgeNumber = useMemo(() => {
    return filterProtein?.length + filterDietaryRestrictions?.length;
  }, [filterDietaryRestrictions, filterProtein]);
  const Categories = categories?.map((item: any) => ({ ...item, id: item._id })) || [];

  useEffect(() => {
    setMenuFilter(menuFilterReducer);
  }, [menuFilterReducer]);

  useEffect(() => {
    if (isClickedCategoryBtn) return;
    let activeCategoryButton = document.getElementById(`btn_category_${activeCategory}`);
    if (activeCategoryButton) {
      const parentElement = activeCategoryButton.parentElement;
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        const buttonRect = activeCategoryButton.getBoundingClientRect();
        const scrollAmount = buttonRect.left - parentRect.left - 24;

        parentElement.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  }, [activeCategory, isClickedCategoryBtn]);

  const handleCategoryClick = (categoryId: string) => {
    if (activeCategory === categoryId) return;
    setActiveCategory(categoryId);
    setIsClickedClickCategoryBtn(true);
    let categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      const distanceToTop =
        categoryElement?.getBoundingClientRect()?.top - (categoryId === Categories[0]?.id ? 150 : 77) - 20; // 77: height of header when sticky
      const menuEle = menuLayoutRef.current! as HTMLElement;
      if (menuEle) {
        menuEle.scrollTo({ top: menuEle.scrollTop + distanceToTop, behavior: 'smooth' });
      }
      setTimeout(() => {
        setIsClickedClickCategoryBtn(false);
      }, 500);
    }
  };
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (handleSearch) {
      handleSearch(e);
    }
  };

  const handleClearInput = (e: any) => {
    setInputValue('');
    if (handleSearch) {
      handleSearch(e);
    }
  };

  const uniqueCategories = categories.filter(
    (category: any, index: number) => Categories.findIndex((c: any) => c.name === category.name) === index,
  );

  return (
    <main ref={menuLayoutRef} className="overflow-y-auto h-full max-h-screen-85">
      <div className={`flex flex-col ${isEmptyData ? 'h-full' : ''}`}>
        <div className={`w-full flex flex-row space-x-[9px] pt-[15px] pb-[10px] px-[24px]`}>
          <SearchInput
            value={inputValue}
            suffix={
              inputValue && <CloseOutlined style={{ color: 'rgba(19, 28, 22, 0.50)' }} onClick={handleClearInput} />
            }
            onChange={handleInputChange}
          />
          <div className="relative">
            <IconButton className="p-[10px]" onClick={toggleFilter} icon={<FilterIcon />} />
            {!!badgeNumber && (
              <span className="absolute top-[-2px] right-[-1px] flex items-center justify-center font-open-sans bg-black-500 text-white	h-[18px] min-w-[18px] font-bold	text-[11px] leading-[28px] rounded-[50%]">
                {badgeNumber}
              </span>
            )}
          </div>
        </div>
        <div
          ref={categoryBarRef}
          className={`sticky shrink-0 top-0 bg-white-100 z-10 pl-[24px] pt-[20px] pb-[19px] flex space-x-[14px] overflow-auto ${
            categoryBarRef?.current && isSticky ? 'shadow-medium-bottom' : ''
          }`}
        >
          {uniqueCategories.map((category: any) => (
            <CategoryButton
              key={category.id}
              id={`btn_category_${category.id}`}
              active={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </div>
        {children}
        <Footer
          className={scrollBottom - 40 > 0 ? 'shadow-medium-top' : ''}
          isShowPrimaryButton={isShowPrimaryButton}
          disabledSecondary={disabledSecondary}
          onClickPrimaryBtn={onClickPrimaryBtn}
          primaryBtnChildren={primaryBtnChildren}
          onClickSecondaryBtn={onClickSecondaryBtn}
          secondaryBtnChildren={secondaryBtnChildren}
        />
      </div>
    </main>
  );
};

export default MenuLayout;
