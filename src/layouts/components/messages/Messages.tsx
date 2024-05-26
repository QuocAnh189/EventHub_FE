// import MessageSkeleton from '../skeleton/MessageSkeleton'
import { useGetMessageByConversationIdQuery } from '@redux/services/conversationApi'
import Message from './Message'

//redux
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { useEffect } from 'react'
import { setMessagesCurrent } from '@redux/slices/conservationSlice'

const Messages = () => {
  const dispatch = useAppDispatch()

  const conservation = useAppSelector((state) => state.persistedReducer.conservation.conservation)
  const messagesCurrent = useAppSelector((state) => state.persistedReducer.conservation.messagesCurrent)

  const { data: messages } = useGetMessageByConversationIdQuery({ conversationId: conservation?.id!, params: {} })

  useEffect(() => {
    if (messages) {
      dispatch(setMessagesCurrent(messages.items))
    }
  }, [messages, dispatch])

  return (
    <div className='px-4 flex flex-col flex-1 overflow-auto py-4 gap-2'>
      {messagesCurrent?.map((message: any, index: number) => (
        <Message key={`message-${index}`} message={message} index={index} />
      ))}

      {/* {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} */}
      {/* <p className='text-center'>Send a message to start the conversation</p> */}
    </div>
  )
}
export default Messages
