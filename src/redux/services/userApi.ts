import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => ({
        url: '/api/users',
        method: 'GET'
      })
    }),

    getUser: builder.query<any, string>({
      query: (userId) => ({
        url: `/api/users/${userId}`,
        method: 'GET'
      })
    }),

    createUser: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/users',
        method: 'GET',
        body: data
      })
    }),

    updateUser: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/users/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteUser: builder.mutation<any, string>({
      query: (userId) => ({
        url: `/api/users/${userId}`,
        method: 'DELETE'
      })
    }),

    changePassword: builder.mutation<any, { userId: string; data: any }>({
      query: ({ userId, data }) => ({
        url: `/api/users/${userId}/change-password`,
        method: 'PATCH',
        body: data
      })
    }),

    getMenuByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/api/users/${userId}/menu`,
        method: 'GET'
      })
    }),

    getReviewsByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/api/users/${userId}/reviews`,
        method: 'GET'
      })
    }),

    getEventsFavouriteByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/api/users/${userId}/events/favourites`,
        method: 'GET'
      })
    }),

    followUser: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/users/followers/follow`,
        method: 'POST',
        body: data
      })
    }),

    unfollowUser: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/users/followers/unfollow`,
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  useGetMenuByUserIdQuery,
  useGetReviewsByUserIdQuery,
  useGetEventsFavouriteByUserIdQuery,
  useFollowUserMutation,
  useUnfollowUserMutation
} = apiUser
