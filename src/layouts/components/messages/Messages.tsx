// import MessageSkeleton from '../skeleton/MessageSkeleton'
import Message from './Message'

const Messages = () => {
  const message = { message: 'Dung co ma sao l' }
  return (
    <div className='px-4 flex-1 overflow-auto'>
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />
      <Message message={message} />

      {/* {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} */}
      {/* <p className='text-center'>Send a message to start the conversation</p> */}
    </div>
  )
}
export default Messages

// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// 		</div>
// 	);
// };
// export default Messages;
