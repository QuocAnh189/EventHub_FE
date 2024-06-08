import Conversation from './Conversation'
import { useAppSelector } from '@hooks/useRedux'
import { IConservationResponse } from '@type/conversation'

interface IConversationsProps {
  conversations: IConservationResponse[]
  host: boolean
}
const Conversations = (props: IConversationsProps) => {
  const { host, conversations } = props

  const conversationActive = useAppSelector((state) => state.persistedReducer.conservation.conservation)

  return (
    <div className='flex flex-col gap-3 py-2 overflow-auto'>
      {conversations.map((conversation: IConservationResponse, index: number) => (
        <Conversation
          key={`conservation-${index}`}
          conversation={conversation}
          lastIdx={true}
          active={conversationActive?.id === conversation.id}
          host={host}
          hostId={conversation.hostId}
          eventId={conversation.eventId}
        />
      ))}
    </div>
  )
}
export default Conversations
