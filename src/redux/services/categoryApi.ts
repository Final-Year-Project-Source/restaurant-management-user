import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      query: () => {
        return {
          url: 'category',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),
    //get all categories including deleted
    getAllCategories: builder.query<any, void>({
      query: () => {
        return {
          url: 'category',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            isAll: 'true',
          },
        };
      },
    }),
    getCategoriesById: builder.query<any, { access_token: string; id: string }>({
      query: ({ access_token, id }) => ({
        url: `category/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetAllCategoriesQuery, useGetCategoriesByIdQuery } = categoryApi;
