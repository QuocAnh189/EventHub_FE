export enum EEnumMessageType {
  TEXT = 'TEXT',
  AUDIO = 'AUTDIO',
  IMAGE = 'IMAGE'
}

export interface Message {
  id?: string
  userId: string
  conversationId: string
  type: EEnumMessageType
  content?: string
  audio?: any
  image?: string
  video?: string
  createdAt: Date
  updatedAt?: Date
}

export const initMessage = {
  type: EEnumMessageType.TEXT
}
