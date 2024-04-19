import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiPayment = createApi({
  reducerPath: 'apiPayment',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getPayments: builder.query<any, any>({
      query: () => ({
        url: '/api/payments',
        method: 'GET'
      })
    }),

    getPayment: builder.query<any, string>({
      query: (paymentId) => ({
        url: `/api/payments/${paymentId}`,
        method: 'GET'
      })
    }),

    createPayment: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/payments',
        method: 'POST',
        body: data
      })
    }),

    updatePayment: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/payments/${data.id}`,
        method: 'POST',
        body: data
      })
    }),

    deletePayment: builder.mutation<any, string>({
      query: (paymentId) => ({
        url: `/api/payments/${paymentId}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetPaymentsQuery,
  useGetPaymentQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation
} = apiPayment
