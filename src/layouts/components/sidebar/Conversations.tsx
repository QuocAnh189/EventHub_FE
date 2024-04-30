import { getRandomEmoji } from '@utils/emojis'
import Conversation from './Conversation'

// assets
import messageIcon from '@assets/common/message-icon.png'

const Conversations = () => {
  const conversation = {
    profilePic: messageIcon,
    fullName: 'Anh Quoc'
  }

  return (
    <div className='py-2 flex flex-col overflow-auto gap-3'>
      <Conversation conversation={conversation} emoji={getRandomEmoji()} lastIdx={true} />
      <Conversation conversation={conversation} emoji={getRandomEmoji()} lastIdx={true} />
      <Conversation conversation={conversation} emoji={getRandomEmoji()} lastIdx={true} />
      {/* <span className='loading loading-spinner mx-auto'></span> */}
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
