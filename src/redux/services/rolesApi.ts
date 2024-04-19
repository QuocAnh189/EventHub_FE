import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiRole = createApi({
  reducerPath: 'apiRole',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getRoles: builder.query<any, any>({
      query: () => ({
        url: '/api/roles',
        method: 'GET'
      })
    }),

    getRole: builder.query<any, string>({
      query: (roleId) => ({
        url: `/api/roles/${roleId}`,
        method: 'GET'
      })
    }),

    createRole: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/roles',
        method: 'POST',
        body: data
      })
    }),

    updateRole: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/roles/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteRole: builder.mutation<any, string>({
      query: (roleId) => ({
        url: `/api/roles/${roleId}`,
        method: 'DELETE'
      })
    }),

    getPermissionByRoleId: builder.query<any, string>({
      query: (roleId) => ({
        url: `/api/roles/${roleId}`,
        method: 'GET'
      })
    }),

    updatePermissionByRoleId: builder.query<any, { roleId: string; data: any }>({
      query: ({ roleId, data }) => ({
        url: `/api/roles/${roleId}`,
        method: 'PUT',
        body: data
      })
    })
  })
})

export const {
  useGetRolesQuery,
  useGetRoleQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
  useGetPermissionByRoleIdQuery,
  useUpdatePermissionByRoleIdQuery
} = apiRole
