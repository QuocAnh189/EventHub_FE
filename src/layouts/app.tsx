/* eslint-disable react-hooks/exhaustive-deps */
// hooks
import { useEffect, useState } from 'react'

//component
import MessageIcon from './components/MessageIcon'
import ModalMessage from './components/ModalMessage'

// assets
import useOpenLiveChatAnimation from '@hooks/useOpenLiveChat'

//redux
import { useAppSelector } from '@hooks/useRedux'

//socket
import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

const AppLayout = ({ children }: any) => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const [openLiveChat, setOpenLiveChat] = useState<boolean>(false)
  const scope = useOpenLiveChatAnimation(openLiveChat)

  const handleOpenLiveChat = () => {
    setOpenLiveChat(!openLiveChat)
  }

  useEffect(() => {
    if (user) {
      const connectSocket = async () => {
        try {
          const conn: HubConnection = new HubConnectionBuilder()
            .withUrl(`${import.meta.env.VITE_API_URL_SOCKET}/chat`, {
              skipNegotiation: true,
              transport: HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Debug)
            .build()

          conn.on('TestConnection', (message: string) => {
            console.log('🚀 ~ conn.on ~ message:', message)
          })
          await conn.start()
          await conn.invoke('TestConnection')

          // console.log(conn)
        } catch (e) {
          console.log(e)
        }
      }
      connectSocket()
    }
  }, [user])

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
