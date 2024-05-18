import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

export const diningTableApi = createApi({
  reducerPath: 'diningTableApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Dining Table'],
  endpoints: (builder) => ({
    getDiningTables: builder.query<any, { access_token: string }>({
      query: ({ access_token }) => ({
        url: 'diningTable',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
      providesTags: ['Dining Table'],
    }),
    getSingleDiningTable: builder.query<any, { id: string }>({
      query: ({ id }) => `diningTable/${id}`,
      providesTags: ['Dining Table'],
    }),
  }),
});

export const { useGetDiningTablesQuery, useGetSingleDiningTableQuery } = diningTableApi;
