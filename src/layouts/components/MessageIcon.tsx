// assets
import messageIcon from '@assets/common/message-icon.png'

interface Props {
  onClick: () => void
}
const MessageIcon = (props: Props) => {
  const { onClick } = props

  return (
    <button
      onClick={onClick}
      className='fixed bg-primary rounded-full p-3 flex right-8 bottom-8 z-[2000] hover:cursor-pointer hover:bg-primary-500'
    >
      <img src={messageIcon} className='h-10 w-10 ' />
    </button>
  )
}

export default MessageIcon
