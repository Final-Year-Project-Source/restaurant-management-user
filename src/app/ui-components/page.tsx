'use client';
import React from 'react';
// import RadioGroup from '@/components/radio/RadioGroup';
import CheckboxGroup from '@/components/checkbox/CheckboxGroup';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import Icon from '@/components/DietaryIcons';
import Button from '@/components/button/Button';
import IconButton from '@/components/button/IconButton';
import CountButton from '@/components/button/CountButton';

import Tag from '@/components/Tag';
import CategoryButton from '@/components/button/CategoryButton';
import { ArrowLeftIcon } from '@/components/Icons';
import Footer from '@/components/layouts/Footer';
// import SearchInput from '@/components/SearchInput';
// import InputText from '@/components/Input';
// import Stats from '@/components/stars/Stars';
// import TextAreaInput from '@/components/TextArea';
import { FilterIcon } from '@/components/Icons';
const checkboxGroupData = {
  groupName: 'Checkbox group',
  options: [{ label: 'Vegan' }, { label: 'Vegetarian' }, { label: 'Diary-free' }, { label: 'Gluten-free' }],
};

const checkboxGroupData1 = {
  groupName: 'Dietary restrictions',
  options: [
    { icon: 'Vegan', label: 'Vegan' },
    { icon: 'Vegetarian', label: 'Vegetarian' },
    { icon: 'Diary-free', label: 'Diary-free' },
    { icon: 'Gluten-free', label: 'Gluten-free' },
  ],
};

const checkboxGroupData2 = {
  groupName: 'Protein',
  options: [{ label: 'Chicken' }, { label: 'Pork' }, { label: 'Beef' }, { label: 'Seafood' }, { label: 'Other' }],
};

const checkboxGroupData3 = {
  groupName: 'Extras',
  options: [
    { label: 'Bacon', price: '80' },
    { label: 'Salmon gravlax', price: '80' },
    { label: 'Sausage', price: '70' },
    { label: 'Baked beans', price: '30' },
  ],
};

const radioGroupData = {
  groupName: 'Radio group',
  options: [{ label: 'Chicken' }, { label: 'Pork' }, { label: 'Beef' }, { label: 'Seafood' }],
};

export default function UIComponents() {
  const handleRadioChange = (selectedValue: string) => {};

  const handleCheckboxChange = (selectedValues: CheckboxValueType[]) => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-10 p-8 ">
      <Button disabled>Inactive button</Button>
      <Button variant="secondary">Add to basket ・ 260</Button>
      <Button variant="primary">Button name</Button>
      <IconButton icon={<ArrowLeftIcon />} />
      <CountButton variant="secondary" />
      <CountButton plus={false} />
      <Tag>Out of stock</Tag>
      <CategoryButton active>Brunch</CategoryButton>
      <CategoryButton>Sandwiches </CategoryButton>
      {/* <Footer
        isShowPrimaryButton
        primaryBtnChildren="Order now, pay later"
        secondaryBtnChildren="Add to basket ・ 260"
      /> */}
      {/* <Footer secondaryBtnChildren="View basket ・2 items" /> */}
      {/* <Footer secondaryBtnChildren="Apply filters"  disabled /> */}
    </main>
  );
}
