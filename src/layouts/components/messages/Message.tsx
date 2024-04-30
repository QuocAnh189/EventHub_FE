// assets
import messageIcon from '@assets/common/message-icon.png'
import dayjs from 'dayjs'

const Message = ({ message }: any) => {
  return (
    <div className={`chat chat-end`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component' src={messageIcon} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 shake pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{dayjs(new Date()).toString()}</div>
    </div>
  )
}
export default Message
