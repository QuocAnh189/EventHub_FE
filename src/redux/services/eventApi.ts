import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICreateEventPayload, IFavouriteEventPayload, IReviewEventPayload } from '@type/event'
import { IEvent } from 'interfaces/contents/event'

export const apiEvent = createApi({
  reducerPath: 'apiEvent',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Event', 'Review'],
  endpoints: (builder) => ({
    getEvents: builder.query<Partial<IEvent>[], any>({
      query: () => ({
        url: '/events',
        method: 'GET'
      }),
      providesTags: ['Event']
    }),

    getEventById: builder.query<IEvent, string>({
      query: (eventId) => ({
        url: `/events/${eventId}`,
        method: 'GET'
      }),
      providesTags: ['Event']
    }),

    createEvent: builder.mutation<IEvent, ICreateEventPayload>({
      query: (data) => ({
        url: '/events',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    updateEvent: builder.mutation<IEvent, Partial<IEvent>>({
      query: (data) => ({
        url: `/events/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    deleteEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/events/${eventId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Event']
    }),

    addReview: builder.mutation<any, IReviewEventPayload>({
      query: (data) => ({
        url: `/events/${data.eventId}/reviews`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Review']
    }),

    getReviewsByEventId: builder.query<any, string>({
      query: (eventId) => ({
        url: `/events/${eventId}/reviews`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    getReviewById: builder.query<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    updateReview: builder.mutation<any, { reviewId: string; data: IReviewEventPayload }>({
      query: ({ reviewId, data }) => ({
        url: `/events/${data.eventId}/reviews/${reviewId}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Review']
    }),

    deleteReview: builder.mutation<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Review']
    }),

    favouriteEvent: builder.mutation<any, IFavouriteEventPayload>({
      query: (data) => ({
        url: `/events/${data.eventId}/favourites/subscribe`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    unfavouriteEvent: builder.mutation<any, IFavouriteEventPayload>({
      query: (data) => ({
        url: `/events/${data.eventId}/favourites/unsubscribe`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Event']
    })
  })
})

export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useAddReviewMutation,
  useGetReviewsByEventIdQuery,
  useGetReviewByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useFavouriteEventMutation,
  useUnfavouriteEventMutation
} = apiEvent
