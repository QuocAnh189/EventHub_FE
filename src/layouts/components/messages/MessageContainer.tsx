import { BiMessageDetail } from 'react-icons/bi'
import MessageInput from './MessageInput'
import Messages from './Messages'

const MessageContainer = () => {
  const lc = false
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {lc ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-primary px-4 py-2 mb-2'>
            <span className='text-white'>To:</span>{' '}
            <span className='text-textOrange font-bold text-xl'>Trần Phước Anh Quốc</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 Anh Quoc ❄</p>
        <p>Select a chat to start messaging</p>
        <BiMessageDetail className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
