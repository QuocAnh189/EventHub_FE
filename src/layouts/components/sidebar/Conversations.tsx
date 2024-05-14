import { getRandomEmoji } from '@utils/emojis'
import Conversation from './Conversation'

const Conversations = () => {
  const conversations = [
    {
      profilePic:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/events/ba831270-ef3a-49aa-8e87-bf014de374d5/main_1.png?sv=2023-11-03&se=2024-05-15T16%3A12%3A05Z&sr=b&sp=r&sig=14m5JEGPV04f1huBjhZhqazDe34YNcTdnaz9lq7TESQ%3D',
      fullName: 'Ngày hội việc làm UIT'
    },
    {
      profilePic:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/events/b4ec3a94-1a03-484c-9b83-e9520a4e5629/main.png?sv=2023-11-03&se=2024-05-15T16%3A12%3A05Z&sr=b&sp=r&sig=ZbdR0K%2BnRVaJEnvhiaVE6LRebkX76Hd7csMfkVYWdds%3D',
      fullName: 'Ngày hội thời trang UIT'
    },
    {
      profilePic:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/events/b4b9a143-9e04-4f0b-8eea-422111268adf/main.png?sv=2023-11-03&se=2024-05-15T16%3A12%3A05Z&sr=b&sp=r&sig=mAkvdHBkHb5qe2CJdZ3qpsc6dibQgf4cZCyRBOc%2BZ2U%3D',
      fullName: 'Ngày hội ẩm thực UIT'
    },
    {
      profilePic:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/events/813e94fd-4635-4069-b43d-81a59bce5932/main.png?sv=2023-11-03&se=2024-05-15T16%3A12%3A05Z&sr=b&sp=r&sig=MgO7rNGzF0o%2B8QQQOJ1ElHaXl4uJAC0naNbVVCLelNA%3D',
      fullName: 'Mùa hè xanh UIT'
    },
    {
      profilePic:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/events/0444e893-8112-481a-8f48-c77aeab9016b/main.jpg?sv=2023-11-03&se=2024-05-15T16%3A12%3A05Z&sr=b&sp=r&sig=PvGF836j8qWE06c%2B58LASz1qzkGaaP22pKtmvBQrMAY%3D',
      fullName: 'Hội khỏe phù đổng'
    }
  ]

  return (
    <div className='py-2 flex flex-col overflow-auto gap-3'>
      {conversations.map((conversation, index) => (
        <Conversation
          key={`conservation-${index}`}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={true}
        />
      ))}
    </div>
  )
}
export default Conversations

// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;
