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
    <div className='py-2 flex flex-col overflow-auto gap-3'>
      {conversations.map((conversation: IConservationResponse, index: number) => (
        <Conversation
          key={`conservation-${index}`}
          conversation={conversation}
          lastIdx={true}
          active={conversationActive?.id === conversation.id}
          host={host}
        />
      ))}
    </div>
  )
}
export default Conversations
