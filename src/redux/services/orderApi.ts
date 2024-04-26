import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    getOrders: builder.query<any, { access_token: string }>({
      query: ({ access_token }) => ({
        url: 'order',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
      providesTags: ['Order'],
    }),
    getSingleOrder: builder.query<any, { id: string }>({
      query: (arg) => `order?id=${arg.id}`,
      providesTags: ['Order'],
    }),
    addOrder: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'order',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: ['Order'],
    }),

    updateOrder: builder.mutation<any, { data: object }>({
      query: ({ data }) => ({
        url: 'order',
        method: 'PUT',
        body: {
          data,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Order'],
    }),
    deleteOrder: builder.mutation<any, { data: any; access_token: string }>({
      query: ({ data, access_token }) => ({
        url: `order?id=${data.id}`,
        method: 'DELETE',
        body: {
          data,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
      invalidatesTags: ['Order'],
    }),
    createReceiptForCounting: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'receipt',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: ['Order'],
    }),
    createFeedback: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'feedback',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
  useAddOrderMutation,
  useDeleteOrderMutation,
  useCreateFeedbackMutation,
  useCreateReceiptForCountingMutation,
} = orderApi;
