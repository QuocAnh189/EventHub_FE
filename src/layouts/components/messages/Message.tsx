/* eslint-disable no-redeclare */
// assets
import { useAppSelector } from '@hooks/useRedux'
import { IMessageResponse } from '@type/conversation'
import { isNullOrEmpty } from '@utils/stringBuilder'
import { Image } from 'antd'
import dayjs from 'dayjs'

interface IMessageProps {
  message: IMessageResponse
  userId: string
}
const Message = (props: IMessageProps) => {
  const { message, userId } = props
  const conservationActive = useAppSelector((state) => state.persistedReducer.conservation.conservation)

  return (
    <div className={`chat ${userId === message.userId ? 'chat-end' : 'chat-start'}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt='image'
            src={
              userId === conservationActive?.userId ? conservationActive.user.avatar : conservationActive?.host.avatar
            }
          />
        </div>
      </div>
      <div
        className={`chat-bubble text-white bg-${userId !== message.userId ? 'blue-500' : 'gray'} shake pb-2 ${
          userId === message.userId ? 'chat-bubble-info' : 'chat-bubble'
        }`}
      >
        {(() => {
          if (!isNullOrEmpty(message.content)) return <>{message.content}</>
          else if (!isNullOrEmpty(message.image)) {
            return <Image src={message.image} alt='message-image' width={200} className='object-cover' />
          }
          return <></>
        })()}
      </div>
      <div className='flex items-center gap-1 text-xs opacity-50 chat-footer'>{dayjs(new Date()).toString()}</div>
    </div>
  )
}
export default Message
