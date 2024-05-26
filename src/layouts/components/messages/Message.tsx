// assets
import messageIcon from '@assets/common/message-icon.png'
import dayjs from 'dayjs'

const Message = ({ message, index }: any) => {
  return (
    <div className={`chat ${index % 2 !== 0 ? 'chat-end' : 'chat-start'}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='image' src={messageIcon} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-${index % 2 !== 0 ? 'blue-500' : 'gray'} shake pb-2 chat-buble-info`}>
        {message.content}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{dayjs(new Date()).toString()}</div>
    </div>
  )
}
export default Message
