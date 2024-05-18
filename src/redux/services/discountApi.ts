import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const discountApi = createApi({
  reducerPath: 'discountApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Discount'],
  endpoints: (builder) => ({
    getDiscounts: builder.query<any, void>({
      query: () => 'discount',
      providesTags: ['Discount'],
    }),
    getSingleDiscount: builder.query<any, { id: string }>({
      query: ({ id }) => `discount/${id}`,
      providesTags: ['Discount'],
    }),
  }),
});

export const { useGetDiscountsQuery, useGetSingleDiscountQuery } = discountApi;
