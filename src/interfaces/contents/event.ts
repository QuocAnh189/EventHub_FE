import { EEventPaymentTicket, EEventStatus, EEventStyle } from '@constants/enum'
import { IPriceRange } from 'interfaces/systems/price-range'

export interface IEvent {
  id: string
  creatorId: string
  creatorName: string
  coverImage: string
  subImages: any[]
  name: string
  description: string
  location: string
  priceRange: IPriceRange
  startTime: any
  endTime: any
  eventCycleType: EEventStyle
  eventPaymentType?: EEventPaymentTicket
  isPrivate: boolean
  isTrash: boolean
  ticketTypes: any
  categories: string[] | any
  promotion: number
  numberOfFavourites: number
  numberOfShares: number
  numberOfSoldTickets: number
  status: EEventStatus
  createdAt: Date
  updatedAt: Date
}
