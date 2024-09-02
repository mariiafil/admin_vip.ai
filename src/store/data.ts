import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://87.121.52.145/vip/api',
  }),
  tagTypes: ['Categories'],
  endpoints: (build) => {
    return {
      getCategories: build.query<{ name: string; id: string }[], null>({
        query: () => ({
          url: '/stores/categories/',
          method: 'get',
        }),
        providesTags: ['Categories'],
      }),
      createCategory: build.mutation<{ name: string }, { name: string }>({
        query: (values) => ({
          url: '/stores/categories/',
          method: 'post',
          body: values,
        }),
        invalidatesTags: ['Categories'],
      }),
    };
  },
});
