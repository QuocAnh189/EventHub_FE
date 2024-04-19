import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiCategory = createApi({
  reducerPath: 'apiCategory',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    createCategory: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/categories',
        method: 'POST',
        body: data
      })
    }),

    getCategories: builder.query<any, any>({
      query: () => ({
        url: '/api/categories',
        method: 'GET'
      })
    }),

    getCategory: builder.query<any, string>({
      query: (id) => ({
        url: `/api/categories/${id}`,
        method: 'GET'
      })
    }),

    updateCategory: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/categories/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteCategory: builder.mutation<any, string>({
      query: (id) => ({
        url: `/api/categories/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const { useCreateCategoryMutation } = apiCategory
