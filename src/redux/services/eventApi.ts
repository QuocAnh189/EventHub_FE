import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiEvent = createApi({
  reducerPath: 'apiEvent',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getEvents: builder.query<any, any>({
      query: () => ({
        url: '/api/events',
        method: 'GET'
      })
    }),

    getEvent: builder.query<any, string>({
      query: (eventId) => ({
        url: `/api/events/${eventId}`,
        method: 'GET'
      })
    }),

    createEvent: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/events',
        method: 'POST',
        body: data
      })
    }),

    updateEvent: builder.mutation<any, any>({
      query: (data) => ({
        url: `/api/events/${data.id}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/api/events/${eventId}`,
        method: 'DELETE'
      })
    }),

    addReview: builder.mutation<any, { eventId: string; review: any }>({
      query: ({ eventId, review }) => ({
        url: `/api/events/${eventId}/reviews`,
        method: 'POST',
        body: review
      })
    }),

    getReviews: builder.query<any, string>({
      query: (eventId) => ({
        url: `/api/events/${eventId}/reviews`,
        method: 'GET'
      })
    }),

    getReview: builder.query<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/api/events/${eventId}/reviews/${reviewId}`,
        method: 'GET'
      })
    }),

    updateReview: builder.mutation<any, { eventId: string; reviewId: string; data: any }>({
      query: ({ eventId, reviewId, data }) => ({
        url: `/api/events/${eventId}/reviews/${reviewId}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteReview: builder.mutation<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/api/events/${eventId}/reviews/${reviewId}`,
        method: 'DELETE'
      })
    }),

    favouriteEvent: builder.mutation<any, { eventId: string; data: any }>({
      query: ({ eventId, data }) => ({
        url: `/api/events/${eventId}/favourites/subscribe`,
        method: 'POST',
        body: data
      })
    }),

    unfavouriteEvent: builder.mutation<any, { eventId: string; data: any }>({
      query: ({ eventId, data }) => ({
        url: `/api/events/${eventId}/favourites/unsubscribe`,
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  useGetEventsQuery,
  useGetEventQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useAddReviewMutation,
  useGetReviewsQuery,
  useGetReviewQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useFavouriteEventMutation,
  useUnfavouriteEventMutation
} = apiEvent
