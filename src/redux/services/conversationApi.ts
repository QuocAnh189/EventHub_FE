import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IConversationParams } from '@type/conversation'
import { IMessageParams } from '@type/message'

export const apiConversation = createApi({
  reducerPath: 'apiConversation',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Conversation'],
  endpoints: (builder) => ({
    getConversations: builder.query<any, IConversationParams>({
      query: (params) => ({
        url: '/conversations',
        method: 'GET',
        params
      }),
      providesTags: ['Conversation']
    }),

    getMessageByConversationId: builder.query<any, { conversationId: string; params: IMessageParams }>({
      query: ({ conversationId, params }) => ({
        url: `/conversations/${conversationId}/messages`,
        method: 'GET',
        params
      }),
      providesTags: ['Conversation']
    })
  })
})

export const { useGetConversationsQuery, useGetMessageByConversationIdQuery } = apiConversation
