import { EEventStyle, EEventTicket } from '@constants/enum'

export interface ICreateTicketPayload {
  name: string
  quantity: number
  price: number
}

export const InitCreateTicketPayload = {
  name: '',
  quantity: 100,
  price: 0
} as ICreateTicketPayload

export interface ICreateEventPayload {
  creatorId?: string
  name: string
  categories: string[]
  eventType: EEventStyle
  startDate: any
  endDate: any
  startTime: any
  endTime: any
  location: any
  description: string
  reasons: string[]
  coverImage: any
  subImage: any[]
  eventTicketType: EEventTicket
  tickets: ICreateTicketPayload[]
  isPublic: boolean
}

export const InitCreateEventPayload = {
  name: '',
  categories: [],
  eventType: 'SINGLE',
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
  location: '',
  description: '',
  reasons: [],
  coverImage: '',
  subImage: ['', '', '', ''],
  eventTicketType: 'FEE',
  tickets: [],
  isPublic: true
} as ICreateEventPayload

export interface IFavouriteEventPayload {
  eventId: string
  userId: string
}

export interface IReviewEventPayload {
  userId: string
  eventId: string
  content: string
  rate: 0
}

export interface IFilterEvent {
  status: any
  category: any
  eventTicketType: any
}
