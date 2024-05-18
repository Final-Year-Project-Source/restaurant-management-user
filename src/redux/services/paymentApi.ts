import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Payment'],
  endpoints: (builder) => ({
    getPayments: builder.query<any, void>({
      query: () => 'payment',
      providesTags: ['Payment'],
    }),
    getSinglePayment: builder.query<any, { id: string }>({
      query: ({ id }) => `payment?id=${id}`,
      providesTags: ['Payment'],
    }),
    createPayment: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'payment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Payment'],
    }),
  }),
});
export const { useGetPaymentsQuery, useGetSinglePaymentQuery, useCreatePaymentMutation } = paymentApi;
