// import MessageSkeleton from '../skeleton/MessageSkeleton'
import Message from './Message'

const Messages = () => {
  const messages = [
    { message: 'Helle shop' },
    { message: 'Chào bạn, có việc gì không ạ' },
    { message: 'Tôi muốn hỏi sự kiện này tổ chức như thế nào' },
    { message: 'Đây là sự kiện bao gồm 500 người' },
    { message: 'Bạn có thể giới thiệu thêm cho tôi được không' },
    { message: 'Trước khi bắt đầu sẽ có nhân viên hỗ trợ bạn' },
    { message: 'Tôi đã đặt vé' },
    { message: 'Cảm ơn bạn' }
  ]
  return (
    <div className='px-4 flex-1 overflow-auto py-2'>
      {messages.map((message, index) => (
        <Message key={`message-${index}`} message={message} index={index} />
      ))}

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
