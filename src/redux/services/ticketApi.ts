import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiTicket = createApi({
  reducerPath: 'apiTicket',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getTickets: builder.query<any, any>({
      query: () => ({
        url: '/api/tickets',
        method: 'GET'
      })
    }),

    getTicket: builder.query<any, string>({
      query: (ticketId) => ({
        url: `/api/tickets/${ticketId}`,
        method: 'GET'
      })
    }),

    createTicket: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/tickets',
        method: 'POST',
        body: data
      })
    }),

    updateTicket: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/tickets/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteTicket: builder.mutation<any, string>({
      query: (ticketId) => ({
        url: `/api/tickets/${ticketId}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetTicketQuery,
  useGetTicketsQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation
} = apiTicket
