//icon
import { useEffect, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { AiTwotoneAudio } from 'react-icons/ai'
import { FaRegImage } from 'react-icons/fa'
import { useAppSelector } from '@hooks/useRedux'
import { IMessageResponse } from '@type/conversation'
import { updateMessagesCurrent } from '@redux/slices/conservationSlice'
// import { initMessage } from '@interfaces'

//redux
import { useAppDispatch } from '@hooks/useRedux'

const MessageInput = () => {
  const dispatch = useAppDispatch()
  const [message, setMessage] = useState()
  const conn = useAppSelector((state) => state.persistedReducer.socket.socket)
  const user = useAppSelector((state) => state.persistedReducer?.user?.user)

  const conversationActive = useAppSelector((state) => state.persistedReducer?.conservation?.conservation)

  const handleSubmit = async () => {
    console.log({
      userId: user?.id,
      conversationId: conversationActive?.id,
      content: message
    })
    await conn?.invoke('SendMessage', {
      userId: user?.id,
      conversationId: conversationActive?.id,
      content: message
    })
  }

  useEffect(() => {
    if (conn?.on) {
      conn?.on('ReceiveMessage', (result: IMessageResponse) => {
        console.log(result)
        dispatch(updateMessagesCurrent(result))
      })
    }
    return () => {
      conn?.off('ReceiveMessage')
    }
  }, [conn, dispatch])

  return (
    <div className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600'
          placeholder='Send a message'
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
