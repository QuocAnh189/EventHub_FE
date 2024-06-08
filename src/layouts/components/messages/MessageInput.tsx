/* eslint-disable react-hooks/exhaustive-deps */
//icon
import { useAppSelector } from '@hooks/useRedux'
import { useContext, useState } from 'react'
import { AiTwotoneAudio } from 'react-icons/ai'
import { BsSend } from 'react-icons/bs'
import { FaRegImage } from 'react-icons/fa'
// import { IMessageResponse } from '@type/conversation'

//redux
import { AppSocketContext } from '@contexts/socketContext'
import { GrClose } from 'react-icons/gr'

const MessageInput = ({ t }: any) => {
  const [fileImage, setFileImage] = useState<any>('')
  const [message, setMessage] = useState<any>('')
  const user = useAppSelector((state) => state.persistedReducer?.user?.user)

  const conversationActive = useAppSelector((state) => state.persistedReducer?.conservation?.conservation)

  const { handleSendMessage } = useContext(AppSocketContext)

  const handleSubmit = async () => {
    try {
      if (handleSendMessage) {
        await handleSendMessage({
          userId: user?.id || '',
          conversationId: conversationActive?.id || '',
          content: message
        })
      }
    } catch (error) {
      console.error('Error sending message: ', error)
    }
    setMessage('')
  }

  return (
    <div className='px-4 my-3'>
      {fileImage && (
        <div className='mb-4 relative w-[100px]'>
          <img className='object-cover w-full' src={URL.createObjectURL(fileImage)} />
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
      <div className='relative w-full'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600'
          placeholder={t('box_message.right.placeholder')}
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <div className='absolute inset-y-0 flex items-center gap-4 pr-3 end-0'>
          <AiTwotoneAudio size={20} />
          <div className='relative flex items-center justify-center h-full'>
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
          <div className='flex items-center pl-6'>
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
