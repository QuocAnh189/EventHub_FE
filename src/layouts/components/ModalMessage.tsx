import MessageContainer from './messages/MessageContainer'
import Sidebar from './sidebar/Sidebar'

const ModalMessage = () => {
  return (
    <div className='main fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-primary-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[6] z-[2000] '>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default ModalMessage
