import { EPageOrder } from '@constants/enum'

export interface IMessageParams {
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  search?: string
}

export const initMessageParams = {
  page: 1,
  size: 10,
  takeAll: false,
  search: ''
} as IMessageParams
