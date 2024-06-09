// assets
import { useAppSelector } from '@hooks/useRedux'
import { IMessageResponse } from '@type/conversation'
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
        {message.content}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{dayjs(new Date()).toString()}</div>
    </div>
  )
}
export default Message
