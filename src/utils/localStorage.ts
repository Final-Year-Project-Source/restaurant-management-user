import { OPERATOR } from '@/enums';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
const tryParseJSONObject = (jsonString: string): object | null | string => {
  try {
    const o = JSON.parse(jsonString);
    if (o && typeof o === 'object') {
      return o;
    }
  } catch (e) {
    return null;
  }

  return jsonString;
};

// region Access Token
export const setAccessToken = (accessToken: string | null): void => {
  localStorage.setItem('access_token', accessToken || '');
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem('access_token');
};

export const removeAccessToken = (): void => {
  localStorage.removeItem('access_token');
};

export const getBasket = () => {
  if (typeof window !== 'undefined')
    return tryParseJSONObject(localStorage.getItem('basket') || '') || { orderItems: [] };
};

export const getFilerDietaryRestrictions = () => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem('dietaryRestrictions') || '';
    const parsedValue = tryParseJSONObject(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  }

  return [];
};

export const removeFilerDietaryRestrictions = (): void => {
  localStorage.removeItem('dietaryRestrictions');
};

export const getFilerProtein = () => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem('protein') || '';
    const parsedValue = tryParseJSONObject(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  }

  return [];
};
export const removeFilerProtein = (): void => {
  localStorage.removeItem('protein');
};
export const removeBasket = (): void => {
  localStorage.removeItem('basket');
};

export const getTableId = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('table_id');
  }
  return '';
};
export const removeTableId = (): void => {
  localStorage.removeItem('table_id');
};
// end region
