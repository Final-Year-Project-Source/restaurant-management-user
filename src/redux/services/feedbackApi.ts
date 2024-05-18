import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
  }),
  tagTypes: ['Feedback'],
  endpoints: (builder) => ({
    getFeedbacks: builder.query<any, void>({
      query: () => 'feedback',
      providesTags: ['Feedback'],
    }),
    getSingleFeedback: builder.query<any, { id: string }>({
      query: ({ id }) => `feedback/${id}`,
      providesTags: ['Feedback'],
    }),
    createFeedback: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'feedback',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Feedback'],
    }),
    updateFeedback: builder.mutation<any, { data: any }>({
      query: ({ data }) => ({
        url: 'feedback',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Feedback'],
    }),
  }),
});
export const { useGetFeedbacksQuery, useGetSingleFeedbackQuery, useCreateFeedbackMutation, useUpdateFeedbackMutation } =
  feedbackApi;
