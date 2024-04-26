import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const modifierApi = createApi({
  reducerPath: 'modifierApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Modifier'],
  endpoints: (builder) => ({
    getModifiers: builder.query<any, void>({
      query: () => 'modifier',
      providesTags: ['Modifier'],
    }),
    getSingleModifier: builder.query<any, { id: string }>({
      query: (id) => `modifier?id=${id}`,
      providesTags: ['Modifier'],
    }),
  }),
});

export const { useGetModifiersQuery, useGetSingleModifierQuery } = modifierApi;
