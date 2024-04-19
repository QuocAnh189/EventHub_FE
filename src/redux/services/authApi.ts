import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuth } from 'interfaces/systems/auth'
import { LoginPayload, SignUpPayload, ForgotPassPayload } from '@type/auth'

export const apiAuth = createApi({
  reducerPath: 'apiAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    signUp: builder.mutation<IAuth, SignUpPayload>({
      query: (data) => ({
        url: '/api/auth/signup',
        method: 'POST',
        body: data
      })
    }),

    signIn: builder.mutation<IAuth, LoginPayload>({
      query: (data) => ({
        url: '/api/auth/signin',
        method: 'POST',
        body: data
      })
    }),

    signInExternal: builder.mutation<IAuth, void>({
      query: (data) => ({
        url: '/api/auth/external-login',
        method: 'POST',
        body: data
      })
    }),

    exterlAuthCallBack: builder.query<IAuth, void>({
      query: () => ({
        url: '/api/auth/external-auth-callback',
        method: 'GET'
      })
    }),

    forgotPasswrod: builder.mutation<IAuth, ForgotPassPayload>({
      query: (data) => ({
        url: '/api/auth/forgot-password',
        method: 'POST',
        body: data
      })
    }),

    resetPasswrod: builder.mutation<IAuth, void>({
      query: () => ({
        url: '/api/auth/reset-password',
        method: 'POST'
      })
    }),

    getProfile: builder.query<IAuth, void>({
      query: () => ({
        url: '/api/auth/profile',
        method: 'GET'
      })
    }),

    signOut: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/api/auth/signout/${userId}`,
        method: 'POST'
      })
    })
  })
})

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } = apiAuth
