import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiMessage = createApi({
  reducerPath: 'apiMessage',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getMessage: builder.query<any, void>({
      query: () => ({
        url: '/messsages',
        method: 'GET'
      })
    })
  })
})

export const { useGetMessageQuery } = apiMessage
