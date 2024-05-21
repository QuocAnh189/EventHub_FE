import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IParamsEvent } from '@type/event'
import { IChangePasswordPayload, IFollowPayload } from '@type/user'
import { ApiListResponse, IListData } from 'interfaces'
import { IPayment, IPaymentAccount } from 'interfaces/contents/payment'
import { IUser } from 'interfaces/systems/user'

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!).accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['User', 'Event'],
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

    getEventsByUserId: builder.query<any, { userId: string; params: IParamsEvent }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/events`,
        method: 'GET',
        params
      }),
      providesTags: ['Event'],
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (data) => ({
        url: '/users',
        method: 'GET',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    updateUser: builder.mutation<IUser, { userId: string; data: any }>({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
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
        method: 'GET',
        params: { size: 5 }
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['User']
    }),

    getEventsFavouriteByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/events/favourites`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getEventsTrashByUserId: builder.query<any, { userId: string; params: IParamsEvent }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/events/trash`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['User', 'Event']
    }),

    followUser: builder.mutation<any, IFollowPayload>({
      query: (data) => ({
        url: `/users/followers/follow`,
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      invalidatesTags: ['User']
    }),

    unfollowUser: builder.mutation<any, IFollowPayload>({
      query: (data) => ({
        url: `/users/followers/unfollow`,
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      invalidatesTags: ['User']
    }),

    getPaymentAccounts: builder.query<IListData<IPaymentAccount[]>, string>({
      query: (userId) => ({
        url: `/users/${userId}/payments/accounts`,
        method: 'GET'
      }),
      transformResponse: (response: ApiListResponse<IPaymentAccount[]>) => response.data,
      providesTags: ['User']
    }),

    createPaymentAccount: builder.mutation<{ id: string }, { userId: string; data: FormData }>({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/payments/accounts`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    updatePaymentAccount: builder.mutation<{ id: string }, { accountId: string; userId: string; data: FormData }>({
      query: ({ accountId, userId, data }) => ({
        url: `/users/${userId}/payments/accounts/${accountId}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    deletePaymentAccount: builder.mutation<{ id: string }, { accountId: string; userId: string }>({
      query: ({ accountId, userId }) => ({
        url: `/users/${userId}/payments/accounts/${accountId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),

    getPaymentsByUserId: builder.query<IListData<IPayment[]>, { userId: string; filter?: IParamsEvent }>({
      query: ({ userId, filter }) => ({
        url: `/users/${userId}/payments`,
        method: 'GET',
        params: filter
      }),
      providesTags: ['User'],
      transformResponse: (response: ApiListResponse<IPayment[]>) => {
        return response.data
      }
    }),

    getPaymentsByCreatorId: builder.query<IListData<IPayment[]>, { creatorId: string; filter?: IParamsEvent }>({
      query: ({ creatorId, filter }) => ({
        url: `/users/${creatorId}/payments/creator`,
        method: 'GET',
        params: filter
      }),
      providesTags: ['User'],
      transformResponse: (response: ApiListResponse<IPayment[]>) => {
        return response.data
      }
    })
  })
})

export const {
  useGetUserByIdQuery,
  useGetEventsByUserIdQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  useGetMenuByUserIdQuery,
  useGetReviewsByUserIdQuery,
  useGetEventsFavouriteByUserIdQuery,
  useGetEventsTrashByUserIdQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetPaymentAccountsQuery,
  useCreatePaymentAccountMutation,
  useUpdatePaymentAccountMutation,
  useDeletePaymentAccountMutation,
  useGetPaymentsByUserIdQuery,
  useGetPaymentsByCreatorIdQuery
} = apiUser
