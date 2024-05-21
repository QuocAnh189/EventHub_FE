import { EEventPaymentTicket, EEventStatus, EEventStyle } from '@constants/enum'
import { IPriceRange } from 'interfaces/systems/price-range'
import { ITicketType } from './ticketType'
import { IUser } from 'interfaces/systems/user'

export interface IEvent {
  id: string
  creatorId: string
  creator: Partial<IUser>
  creatorName: string
  categories: any[]
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
  ticketTypes: ITicketType[]
  categoryIds: string[] | any
  promotion: number
  numberOfFavourites: number
  isFavourite?: boolean
  numberOfShares: number
  numberOfSoldTickets: number
  averageRating: number
  status: EEventStatus
  reasons: string[]
  createdAt: Date
  updatedAt: Date
}
