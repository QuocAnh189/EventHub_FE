import { EPageOrder } from '@constants/enum'

export interface IConversationParams {
  page?: number
  size?: number
  takeAll?: boolean
  order?: EPageOrder
  search?: string
}

export const initConversationParams = {
  page: 1,
  size: 6,
  takeAll: false,
  search: ''
} as IConversationParams

export type JoinChatRoomRequest = {
  eventId: string
  hostId: string
  userId: string
}

export type SendMessageRequest = {
  userId: string
  conversationId: string
  content: string
}
