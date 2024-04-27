import { DISCOUNT_TYPE } from '@/enums';
import { uniq } from 'lodash';

export const getDiscountedPrice = (price: number, discount?: any) => {
  if (!discount) return price;

  if (discount.type === DISCOUNT_TYPE.FIXED_PERCENT) {
    return Math.round(price * (100 - discount.discount_percent) * 0.01 * 100) / 100;
  } else if (discount.type === DISCOUNT_TYPE.FIXED_AMOUNT) {
    return price;
  }
  return 0;
};

export const getDietaryRequests = (dietaryRequests: string[]) => {
  return uniq(
    dietaryRequests
      ?.filter((item: string) => item.endsWith('option'))
      .map((item: string) => {
        item = item.replace(' option', '');
        return item;
      }) || [],
  );
};

export const getFormattedTime = (date: Date) =>
  date ? `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}` : '';

export const validateEmail = (email: string) => {
  if (email.trim() === '') {
    return true;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.trim() === '') {
    return true;
  }
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneRegex.test(phoneNumber);
};
export const validateTaxID = (taxID: string) => {
  const taxIDRegex = /^(\d[- ]?){12}\d$/;

  return taxIDRegex.test(taxID);
};
export const validateIsNotEmpty = (value: string) => {
  return value.trim() !== '';
};
