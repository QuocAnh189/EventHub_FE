/* eslint-disable react-hooks/exhaustive-deps */
//icon
import { useAppSelector } from '@hooks/useRedux'
import { useContext, useState } from 'react'
// import { AiTwotoneAudio } from 'react-icons/ai'
import { BsSend } from 'react-icons/bs'
import { FaRegImage } from 'react-icons/fa'
// import { IMessageResponse } from '@type/conversation'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

//redux
import { AppSocketContext } from '@contexts/socketContext'
import { GrClose } from 'react-icons/gr'

const MessageInput = ({ t }: any) => {
  const [fileAudio, setFileAudio] = useState<any>('')
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob)
    setFileAudio(url)
    // const audio = document.createElement('audio')
    // audio.src = url
    // audio.controls = true
    // document.body.appendChild(audio)
  }
  const [fileImage, setFileImage] = useState<any>('')
  const [message, setMessage] = useState<any>('')
  const user = useAppSelector((state) => state.persistedReducer?.user?.user)

  const conversationActive = useAppSelector((state) => state.persistedReducer?.conservation?.conservation)

  const { handleSendMessage } = useContext(AppSocketContext)

  const handleSubmit = async () => {
    // console.log(fileImage, fileAudio)
    try {
      if (handleSendMessage) {
        await handleSendMessage({
          userId: user?.id || '',
          conversationId: conversationActive?.id || '',
          content: message,
          image: fileImage ? fileImage : null,
          audio: fileAudio ? fileAudio : null
        })
      }
    } catch (error) {
      console.error('Error sending message: ', error)
    }
    setMessage('')
  }

  return (
    <div className='px-4 my-3'>
      {fileAudio && (
        <div className='mb-4 relative w-4/5'>
          <audio controls src={fileAudio} className='mt-6 h-10' />
          <button
            className='absolute top-0 right-0 hover:bg-slate-300'
            onClick={() => {
              setFileAudio('')
            }}
          >
            <GrClose />
          </button>
        </div>
      )}

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
        <div className='absolute inset-y-0 end-0 flex items-center gap-4 pr-3'>
          <button>
            <AudioRecorder
              // downloadOnSavePress={true}
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
          </button>
          <button className='relative h-full flex items-center justify-center'>
            <input
              type='file'
              accept='image/*'
              className='absolute w-[20px] left-0 z-[1] opacity-0'
              placeholder={t('box_message.right.placeholder')}
              onChange={(e: any) => setFileImage(e.target.files[0])}
              onClick={(event: any) => (event.target.value = null)}
            />
            <FaRegImage className='absolute left-0 z-[0]' size={20} />
          </button>
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
