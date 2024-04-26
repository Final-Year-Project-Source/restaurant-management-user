import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const customerApi = createApi({
  reducerPath: 'customerApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Customer'],
  endpoints: (builder) => ({
    getCustomers: builder.query<any, { access_token: string }>({
      query: ({ access_token }) => ({
        url: 'customer',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
      providesTags: ['Customer'],
    }),
    getSingleCustomer: builder.query<any, { id: string }>({
      query: (arg) => `customer?id=${arg.id}`,
      providesTags: ['Customer'],
    }),
    addCustomer: builder.mutation<any, { data: object }>({
      query: ({ data }) => ({
        url: 'customer',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: ['Customer'],
    }),

    updateCustomer: builder.mutation<any, { access_token: string; data: object }>({
      query: ({ access_token, data }) => ({
        url: 'customer',
        method: 'PATCH',
        body: {
          data,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
      invalidatesTags: ['Customer'],
    }),
    deleteCustomer: builder.mutation<any, { data: any; access_token: string }>({
      query: ({ data, access_token }) => ({
        url: `customer?id=${data.id}`,
        method: 'DELETE',
        body: {
          data,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
      invalidatesTags: ['Customer'],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetSingleCustomerQuery,
  useUpdateCustomerMutation,
  useAddCustomerMutation,
  useDeleteCustomerMutation,
} = customerApi;
