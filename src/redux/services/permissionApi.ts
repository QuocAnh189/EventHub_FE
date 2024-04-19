import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiPermission = createApi({
  reducerPath: 'apiPermission',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getPermissions: builder.query<any, any>({
      query: () => ({
        url: '/api/permissions',
        method: 'GET'
      })
    })
  })
})

export const { useGetPermissionsQuery } = apiPermission
