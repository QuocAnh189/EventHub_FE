import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IChangePasswordPayload, IFollowPayload } from '@type/user'
import { IUser } from 'interfaces/systems/user'

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!).accessToken

      headers.set('Content-Type', 'application/json')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: '/users',
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getUserById: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (data) => ({
        url: '/users',
        method: 'GET',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    updateUser: builder.mutation<IUser, Partial<IUser>>({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteUser: builder.mutation<any, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),

    changePassword: builder.mutation<any, IChangePasswordPayload>({
      query: (data) => ({
        url: `/users/${data.userId}/change-password`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    getMenuByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/menu`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getReviewsByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/reviews`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getEventsFavouriteByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/events/favourites`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    followUser: builder.mutation<any, IFollowPayload>({
      query: (data) => ({
        url: `/users/followers/follow`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    unfollowUser: builder.mutation<any, IFollowPayload>({
      query: (data) => ({
        url: `/users/followers/unfollow`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    })
  })
})

export const {
  useGetUserByIdQuery,
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
