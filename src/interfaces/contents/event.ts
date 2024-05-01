import { EEventStatus } from '@constants/enum'
import { IPriceRange } from 'interfaces/systems/price-range'

export interface IEvent {
  id: string
  creatorId: string
  creatorName: string
  coverImageId: string
  coverImage: string
  name: string
  descrption: string
  locationId: string
  locationString: string
  PriceRange: IPriceRange
  startTime: Date
  endTime: Date
  categories: string[]
  promotion: number
  numberOfFavourites: number
  numberOfShares: number
  numberOfSoldTickets: number
  status: EEventStatus
  createdAt: Date
  updatedAt: Date
}
