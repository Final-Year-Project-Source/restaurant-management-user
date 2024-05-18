import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productApi = createApi({
  reducerPath: 'productApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => ({
        url: 'product',
        method: 'GET',
      }),
      providesTags: ['Product'],
    }),
    getSingleProduct: builder.query<any, { id: string }>({
      query: (arg) => `product/${arg.id}`,
      providesTags: ['Product'],
    }),
    getFilteredProducts: builder.query<any, { search?: string; dietary_restrictions?: any[]; proteins?: any[] }>({
      query: ({ search, dietary_restrictions, proteins }) => {
        let queryString = 'product?';
        if (search) queryString += `&search=${encodeURIComponent(search)}`;
        if (dietary_restrictions?.length)
          queryString += `&dietary_restrictionsParam=${encodeURIComponent(
            JSON.stringify(dietary_restrictions.map((r) => r.toLowerCase())),
          )}`;
        if (proteins?.length)
          queryString += `&proteinsParam=${encodeURIComponent(JSON.stringify(proteins.map((p) => p.toLowerCase())))}`;
        return queryString;
      },
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useGetFilteredProductsQuery } = productApi;
