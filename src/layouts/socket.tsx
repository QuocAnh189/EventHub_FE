/* eslint-disable react-hooks/exhaustive-deps */
// hooks
import { useEffect, useRef } from 'react'

//redux
import { useAppDispatch } from '@hooks/useRedux'
import { useAppSelector } from '@hooks/useRedux'
import { setSocket } from '@redux/slices/socketSlice'

//socket
import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

const AppSocket = ({ children }: any) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const connection = useRef<HubConnection | null>(null)

  useEffect(() => {
    if (user && connection.current === null) {
      const connectSocket = async () => {
        connection.current = new HubConnectionBuilder()
          .withUrl(`${import.meta.env.VITE_API_URL_SOCKET}/chat`, {
            withCredentials: false,
            transport: HttpTransportType.WebSockets | HttpTransportType.LongPolling
          })
          .withAutomaticReconnect()
          .configureLogging(LogLevel.Debug)
          .build()

        try {
          await connection.current.start()
        } catch (err) {
          console.error('Connection failed: ', err)
        }
        dispatch(setSocket(connection.current))
      }
      connectSocket()
    }

    return () => {
      connection.current
        ?.stop()
        .then(() => {
          connection.current = null
          dispatch(setSocket(null))
          console.log('Disconnected from SignalR')
        })
        .catch((err) => console.error('Disconnection failed: ', err))
    }
  }, [user, dispatch])

  return <div>{children}</div>
}

export default AppSocket
