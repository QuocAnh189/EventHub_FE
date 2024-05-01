import { EEventAction, EEventStatus, EEventStyle, EEventTicket, EPageOrder } from '@constants/enum'

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

export const initFilterEvent = {
  status: null,
  category: null,
  eventTicketType: null
} as IFilterEvent

export interface IParamsEvent {
  type?: EEventStatus
  location?: string | null
  categoryIds?: string[] | null
  eventPrivacy?: EEventAction
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  search?: string
}

export interface IMetadataEventReponse {
  currentPage: number
  hasNext: boolean
  hasPrevious: boolean
  pageSize: number
  takeAll: boolean
  totalCount: number
  totalPages: number
  totalPrivate: number
  totalPublic: number
  totalTrash: number
}
