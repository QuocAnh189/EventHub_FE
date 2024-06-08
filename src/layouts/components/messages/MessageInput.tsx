/* eslint-disable react-hooks/exhaustive-deps */
//icon
import { useEffect, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { AiTwotoneAudio } from 'react-icons/ai'
import { FaRegImage } from 'react-icons/fa'
import { useAppSelector } from '@hooks/useRedux'
import { IMessageResponse } from '@type/conversation'
import { updateMessagesCurrent } from '@redux/slices/conservationSlice'

//redux
import { useAppDispatch } from '@hooks/useRedux'

const MessageInput = ({ t }: any) => {
  const dispatch = useAppDispatch()
  const [message, setMessage] = useState<any>('')
  const conn = useAppSelector((state) => state.persistedReducer.socket.socket)
  const user = useAppSelector((state) => state.persistedReducer?.user?.user)

  const conversationActive = useAppSelector((state) => state.persistedReducer?.conservation?.conservation)

  const handleSubmit = async () => {
    console.log({
      userId: user?.id,
      conversationId: conversationActive?.id,
      content: message
    })
    try {
      // await conn?.invoke('SendMessage', {
      //   userId: user?.id,
      //   conversationId: conversationActive?.id,
      //   content: message
      // })
      // setMessage('')
      // dispatch(updateMessagesCurrent({ userId: user?.id!, content: message, convservationId: conversationActive?.id! }))
      await conn?.invoke('TestConnection')
      // conn?.on('TestConnection', (result: any) => {
      //   console.log(result)
      // })
    } catch (error) {
      console.error('Error sending message: ', error)
    }
  }

  useEffect(() => {
    console.log('vao day')
    if (conn && typeof conn.on === 'function') {
      conn?.on('ReceiveMessage', (result: IMessageResponse) => {
        console.log(result)
        dispatch(updateMessagesCurrent(result))
      })

      conn?.on('TestConnection', (result: any) => {
        console.log(result)
        dispatch(
          updateMessagesCurrent({ userId: user?.id!, content: result, convservationId: conversationActive?.id! })
        )
      })

      return () => {
        conn?.off('TestConnection')
      }
    }
  }, [conn, dispatch])

  return (
    <div className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600'
          placeholder={t('box_message.right.placeholder')}
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <button type='button' className='absolute inset-y-0 end-0 flex items-center pe-3 gap-4'>
          <AiTwotoneAudio size={20} />
          <FaRegImage size={20} />
          <BsSend size={20} onClick={handleSubmit} />
        </button>
      </div>
    </div>
  )
}
export default MessageInput
