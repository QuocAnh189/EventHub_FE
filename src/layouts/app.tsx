/* eslint-disable react-hooks/exhaustive-deps */
// hooks
import { useState } from 'react'

//component
import MessageIcon from './components/MessageIcon'
import ModalMessage from './components/ModalMessage'

// assets
import useOpenLiveChatAnimation from '@hooks/useOpenLiveChat'

const AppLayout = ({ children }: any) => {
  const [openLiveChat, setOpenLiveChat] = useState<boolean>(false)
  const scope = useOpenLiveChatAnimation(openLiveChat)

  const handleOpenLiveChat = () => {
    setOpenLiveChat(!openLiveChat)
  }

  return (
    <div className='relative min-h-screen bg-body'>
      <div className='menu' ref={scope}>
        <MessageIcon onClick={handleOpenLiveChat} />
        <ModalMessage />
      </div>
      {children}
    </div>
  )
}

export default AppLayout
