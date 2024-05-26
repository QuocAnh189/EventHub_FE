/* eslint-disable react-hooks/rules-of-hooks */
//component
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import FormControl from '@mui/material/FormControl'
import { updateConversationUser } from '@redux/slices/conservationSlice'
import { IConservationResponse } from '@type/conversation'
import classNames from 'classnames'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

interface IPropsFormToChat {
  userId: string
  eventId: string
  hostId: string
  eventName: string
  userEmail: string
  userFullName: string
}

const FormToChat = (props: IPropsFormToChat) => {
  const dispatch = useAppDispatch()
  const { userId, eventId, hostId, eventName, userEmail, userFullName } = props

  const conn = useAppSelector((state) => state.persistedReducer.socket.socket!)

  const handleStartChat = async () => {
    await conn?.invoke('JoinChatRoom', { eventId, hostId, userId })
  }

  useEffect(() => {
    conn?.on('JoinChatRoom', (conversation: IConservationResponse) => {
      dispatch(updateConversationUser(conversation))
      toast.success('Open Dialog to chat')
    })

    return () => {
      conn?.off('JoinChatRoom')
    }
  }, [conn, dispatch])

  return (
    <div className='flex px-[100px] gap-8'>
      <div className='flex flex-col flex-auto gap-5 p-8 rounded-md shadow-xl bg-body'>
        <h1 className='text-2xl font-bold text-header'>Chat Room</h1>
        <p className='text-header'>
          If you have any questions or problems related to this event.
          <br />
          Do not hesitate to contact me.
        </p>
        <FormControl>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-4 text-header'>
              <div className='field-wrapper'>
                <label className='field-label' htmlFor='qty'>
                  Name
                </label>
                <input readOnly className={classNames('field-input')} id='qty' placeholder='0' value={userFullName} />
              </div>
              <div className='field-wrapper'>
                <label className='field-label' htmlFor='qty'>
                  Email
                </label>
                <input readOnly className={classNames('field-input')} id='qty' placeholder='0' value={userEmail} />
              </div>
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='qty'>
                Event
              </label>
              <input readOnly className={classNames('field-input')} id='qty' value={eventName} />
            </div>
          </div>
        </FormControl>
        <button
          onClick={handleStartChat}
          className='px-4 py-3 rounded-3xl bg-primary font-semibold text-white w-[200px] hover:bg-primary-500'
        >
          Start Chat
        </button>
      </div>
    </div>
  )
}

export default FormToChat
