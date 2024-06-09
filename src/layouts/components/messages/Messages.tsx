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
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data: messages } = useGetMessageByConversationIdQuery({ conversationId: conservation?.id!, params: {} })

  useEffect(() => {
    if (messages) {
      console.log('update')
      dispatch(setMessagesCurrent(messages.items))
    }
  }, [messages, dispatch])

  return (
    <div className='flex flex-col flex-1 gap-2 px-4 py-4 overflow-scroll no-scrollbar'>
      {messagesCurrent?.length !== 0 ? (
        messagesCurrent?.map((message: any, index: number) => (
          <Message key={`message-${index}`} message={message} userId={user?.id!} />
        ))
      ) : (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}
export default Messages
