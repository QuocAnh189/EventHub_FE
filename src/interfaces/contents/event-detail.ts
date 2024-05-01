import { EEventStatus } from '@constants/enum'
import { ICategory } from './category'
import { ICreator } from './creator'
import { ILocation } from './location'
import { ITicketType } from './ticketType'
import { IEmailContent } from './email-content'

export interface IEventDetail {
  id: string
  creatorId: string
  creator: ICreator
  coverImage: string
  name: string
  description: string
  locationId: string
  location: ILocation
  startTime: Date
  endTime: Date
  categories: ICategory[]
  promotion: number
  ticketTypes: ITicketType
  emailContent: IEmailContent
  numberOfFavourites: number
  numberOfShares: number
  numberOfSoldTickets: number
  status: EEventStatus
  createdAt: Date
  updatedAt: Date
}
