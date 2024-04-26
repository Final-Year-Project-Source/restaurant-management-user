import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const billApi = createApi({
  reducerPath: 'billApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Bill'],
  endpoints: (builder) => ({
    getBills: builder.query<any, void>({
      query: () => ({
        url: 'bill',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Bill'],
    }),
    getSingleBill: builder.query<any, { id: string }>({
      query: (arg) => `bill?id=${arg.id}`,
      providesTags: ['Bill'],
    }),
    addBill: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'bill',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: ['Bill'],
    }),

    updateBill: builder.mutation<any, { data: object }>({
      query: ({ data }) => ({
        url: 'bill',
        method: 'PUT',
        body: {
          data,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Bill'],
    }),
    deleteBill: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: `bill?id=${data.id}`,
        method: 'DELETE',
        body: {
          data,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Bill'],
    }),
    createFeedback: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'feedback',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: ['Bill'],
    }),
    createTaxInvoice: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'taxinvoice',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: ['Bill'],
    }),
  }),
});

export const {
  useGetBillsQuery,
  useGetSingleBillQuery,
  useUpdateBillMutation,
  useAddBillMutation,
  useDeleteBillMutation,
  useCreateFeedbackMutation,
  useCreateTaxInvoiceMutation,
} = billApi;
