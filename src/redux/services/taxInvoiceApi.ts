import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taxInvoiceApi = createApi({
  reducerPath: 'taxInvoiceApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Tax Invoice'],
  endpoints: (builder) => ({
    getTaxInvoices: builder.query<any, { access_token: string }>({
      query: ({ access_token }) => ({
        url: 'taxinvoice',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
      providesTags: ['Tax Invoice'],
    }),
    getSingleTaxInvoice: builder.query<any, { id: string }>({
      query: ({ id }) => `taxinvoice?id=${id}`,
      providesTags: ['Tax Invoice'],
    }),
  }),
});

export const { useGetTaxInvoicesQuery, useGetSingleTaxInvoiceQuery } = taxInvoiceApi;
