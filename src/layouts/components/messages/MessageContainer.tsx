import MessageInput from './MessageInput'
import Messages from './Messages'

//redux
import { useAppSelector } from '@hooks/useRedux'

//assets
import { BiMessageDetail } from 'react-icons/bi'

const MessageContainer = () => {
  const conversationActive = useAppSelector((state) => state.persistedReducer.conservation.conservation)
  const user = useAppSelector((state) => state.persistedReducer.user.user)
  const conn = useAppSelector((state) => state.persistedReducer.socket.socket)

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!conversationActive ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-primary px-4 py-2 mb-2 flex items-center gap-1'>
            <span className='text-white'>To:</span>{' '}
            <div className='flex items-center gap-1'>
              {conversationActive.hostId === user?.id ? (
                <>
                  <img
                    src={conversationActive?.user?.avatar}
                    loading='lazy'
                    alt=''
                    className='w-10 h-10 rounded-full object-cover'
                  />
                  <span className='text-textOrange font-bold text-xl'>{conversationActive?.user?.fullName}</span>
                </>
              ) : (
                <>
                  <img
                    src={conversationActive?.host?.avatar}
                    loading='lazy'
                    alt=''
                    className='w-10 h-10 rounded-full object-cover'
                  />
                  <span className='text-textOrange font-bold text-xl'>{conversationActive?.host?.fullName}</span>
                </>
              )}
            </div>
          </div>
          {conn && (
            <>
              <Messages />
              <MessageInput />
            </>
          )}
        </>
      )}
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        {user ? (
          <>
            <p>Welcome 👋 {user?.fullName} ❄</p>
            <p>Select a chat to start messaging</p>
            <BiMessageDetail className='text-3xl md:text-6xl text-center' />
          </>
        ) : (
          <>
            <p>Hello guy</p>
            <p>Login to chat</p>
          </>
        )}
      </div>
    </div>
  )
}
