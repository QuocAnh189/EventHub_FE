import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPayment } from 'interfaces/contents/payment'

export const apiPayment = createApi({
  reducerPath: 'apiPayment',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Payment'],
  endpoints: (builder) => ({
    getPayments: builder.query<any, void>({
      query: () => ({
        url: '/payments',
        method: 'GET'
      }),
      providesTags: ['Payment']
    }),

    getPayment: builder.query<any, string>({
      query: (paymentId) => ({
        url: `/payments/${paymentId}`,
        method: 'GET'
      }),
      providesTags: ['Payment']
    }),

    createPayment: builder.mutation<IPayment, IPayment>({
      query: (data) => ({
        url: '/payments',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Payment']
    }),

    updatePayment: builder.mutation<IPayment, Partial<IPayment>>({
      query: (data) => ({
        url: `/payments/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Payment']
    }),

    deletePayment: builder.mutation<any, string>({
      query: (paymentId) => ({
        url: `/payments/${paymentId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Payment']
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
