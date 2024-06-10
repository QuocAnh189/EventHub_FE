/* eslint-disable no-redeclare */
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
import { EFileContainer } from '@constants/enum'
import { AppSocketContext } from '@contexts/socketContext'
import { useUploadFileMutation } from '@redux/services/fileApi'
import { validator } from '@utils/validate-image'
import { Image, Upload } from 'antd'
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload'
import { GrClose } from 'react-icons/gr'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

const MessageInput = ({ t }: any) => {
  const [message, setMessage] = useState<string>('')
  const [imageFile, setImageFile] = useState<UploadFile>()
  const [fileAudioUrl, setFileAudioUrl] = useState<string>('')
  const [audioFile, setAudioFile] = useState<Blob>()

  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob: Blob) => {
    setAudioFile(blob)
    const url = URL.createObjectURL(blob)
    setFileAudioUrl(url)
    // const audio = document.createElement('audio')
    // audio.src = url
    // audio.controls = true
    // document.body.appendChild(audio)
  }
  const { handleSendMessage } = useContext(AppSocketContext)

  const user = useAppSelector((state) => state.persistedReducer?.user?.user)
  const conversationActive = useAppSelector((state) => state.persistedReducer?.conservation?.conservation)
  const [uploadFile] = useUploadFileMutation()

  async function onChangeMessageImage(param: UploadChangeParam) {
    const { file } = param
    setImageFile(file)
  }

  const beforeUploadImageFile = (file: RcFile) => {
    const errs = validator(file)
    errs.map((msg) => toast.error(msg))

    return errs && errs.length > 0 ? false : true
  }

  const handleSubmit = async () => {
    try {
      console.log('BEGIN: handleSubmit')
      await Promise.all([handleSendText(), handleSendImage(), handleSendAudio()])
    } catch (error) {
      console.error('Error sending message: ', error)
    }
  }

  const handleSendText = async () => {
    try {
      if (handleSendMessage && message && message !== '') {
        await handleSendMessage({
          userId: user?.id || '',
          conversationId: conversationActive?.id || '',
          content: message
        })
      }
      setMessage('')
    } catch (error: any) {
      setMessage('')
      throw error
    }
  }
  const handleSendImage = async () => {
    console.log('BEGIN: handleSendImage')
    try {
      if (handleSendMessage && imageFile) {
        const formData = new FormData()
        formData.append('File', imageFile.originFileObj as File)
        const image = await uploadFile({
          data: formData,
          container: EFileContainer.MESSAGES
        }).unwrap()
        await handleSendMessage({
          userId: user?.id || '',
          conversationId: conversationActive?.id || '',
          imageId: image.id,
          imageUrl: image.filePath
        })
      }
      setImageFile(undefined)
    } catch (error: any) {
      setImageFile(undefined)
      throw error
    }
  }
  const handleSendAudio = async () => {
    try {
      if (handleSendMessage && audioFile) {
        const formData = new FormData()
        formData.append(
          'File',
          new File([audioFile], `{audio-${dayjs(new Date()).format('DD/MM/YYYY')}`, {
            type: audioFile.type
          })
        )
        const audio = await uploadFile({
          data: formData,
          container: EFileContainer.MESSAGES
        }).unwrap()
        await handleSendMessage({
          userId: user?.id || '',
          conversationId: conversationActive?.id || '',
          audioId: audio.id,
          audioUrl: audio.filePath
        })
      }
      setFileAudioUrl('')
    } catch (error: any) {
      setFileAudioUrl('')
      throw error
    }
  }

  return (
    <div className='p-4 bg-slate-100'>
      {fileAudioUrl && (
        <div className='relative w-4/5 mb-4'>
          <audio controls src={fileAudioUrl} className='h-10 mt-6' />
          <button
            className='absolute top-0 right-0 hover:bg-slate-300'
            onClick={() => {
              setFileAudioUrl('')
            }}
          >
            <GrClose />
          </button>
        </div>
      )}

      {imageFile && (
        <div className='mb-4 relative w-[100px]'>
          <Image className='object-cover w-full' src={URL.createObjectURL(imageFile.originFileObj as File)} />
          <button className='absolute top-0 right-[-20px] hover:bg-slate-300' onClick={() => setImageFile(undefined)}>
            <GrClose />
          </button>
        </div>
      )}
      <div className='relative flex items-center w-full gap-2'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5'
          placeholder={t('box_message.right.placeholder')}
          value={message}
          onChange={(e: any) => {
            setMessage(e.target.value)
          }}
        />
        <div className='flex items-center gap-2 pr-3 end-0'>
          <button>
            <AudioRecorder
              // downloadOnSavePress={true}
              onRecordingComplete={(blob) => {
                addAudioElement(blob)
              }}
              recorderControls={recorderControls}
            />
          </button>
          <Upload
            beforeUpload={beforeUploadImageFile}
            onChange={onChangeMessageImage}
            listType='picture-card'
            className='message-upload'
            multiple={false}
            showUploadList={false}
          >
            <FaRegImage size={20} />
          </Upload>
          <button onClick={handleSubmit} className='message-upload'>
            <div className='ant-upload'>
              <BsSend size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
export default MessageInput
