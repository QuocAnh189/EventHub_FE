/* eslint-disable react-hooks/exhaustive-deps */
//icon
import { useEffect, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { AiTwotoneAudio } from 'react-icons/ai'
import { FaRegImage } from 'react-icons/fa'
import { useAppSelector } from '@hooks/useRedux'
// import { IMessageResponse } from '@type/conversation'
import { updateMessagesCurrent } from '@redux/slices/conservationSlice'

//redux
import { useAppDispatch } from '@hooks/useRedux'
import { GrClose } from 'react-icons/gr'

const MessageInput = ({ t }: any) => {
  const dispatch = useAppDispatch()

  const [fileImage, setFileImage] = useState<any>('')
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
      await conn?.invoke('TestConnection')
      // await conn?.invoke('SendMessage', {
      //   userId: user?.id,
      //   conversationId: conversationActive?.id,
      //   content: message
      // })
      // setMessage('')
      // dispatch(updateMessagesCurrent({ userId: user?.id!, content: message, convservationId: conversationActive?.id! }))
      // await conn?.invoke('TestConnection')
    } catch (error) {
      console.error('Error sending message: ', error)
    }
  }

  useEffect(() => {
    console.log('vao day')
    if (conn && typeof conn.on === 'function') {
      // conn?.on('ReceiveMessage', (result: IMessageResponse) => {
      //   console.log(result)
      //   dispatch(updateMessagesCurrent(result))
      // })

      conn?.on('TestConnection', (result: any) => {
        console.log(result)
        dispatch(
          updateMessagesCurrent({ userId: user?.id!, content: result, convservationId: conversationActive?.id! })
        )
      })

      return () => {
        conn?.off('TestConnection')
        // conn?.off('ReceiveMessage')
      }
    }
  }, [conn, dispatch])

  return (
    <div className='px-4 my-3'>
      {fileImage && (
        <div className='mb-4 relative w-[100px]'>
          <img className='w-full object-cover' src={URL.createObjectURL(fileImage)} />
          <button
            className='absolute top-0 right-[-20px] hover:bg-slate-300'
            onClick={() => {
              setFileImage('')
            }}
          >
            <GrClose />
          </button>
        </div>
      )}
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600'
          placeholder={t('box_message.right.placeholder')}
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <div className='absolute inset-y-0 end-0 flex items-center gap-4 pr-3'>
          <AiTwotoneAudio size={20} />
          <div className='relative h-full flex items-center justify-center'>
            <input
              type='file'
              accept='image/*'
              className='absolute w-[20px] left-0 z-[1] opacity-0'
              placeholder={t('box_message.right.placeholder')}
              onChange={(e: any) => setFileImage(e.target.files[0])}
              onClick={(event: any) => (event.target.value = null)}
            />
            <FaRegImage className='absolute left-0 z-[0]' size={20} />
          </div>
          <div className='pl-6 flex items-center'>
            <button onClick={handleSubmit}>
              <BsSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MessageInput
