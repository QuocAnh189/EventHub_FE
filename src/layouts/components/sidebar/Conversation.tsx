/* eslint-disable react-hooks/exhaustive-deps */
//redux
import { AppSocketContext } from '@contexts/socketContext'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setConservation } from '@redux/slices/conservationSlice'

//type
import { IConservationResponse } from '@type/conversation'
import { useContext } from 'react'

interface IConservationProps {
  hostId: any
  eventId: any
  conversation: IConservationResponse
  lastIdx: any
  active?: boolean
  host: boolean
}

const Conversation = (props: IConservationProps) => {
  const { hostId, eventId, host, active, conversation, lastIdx } = props

  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { handleJoinChatRoom } = useContext(AppSocketContext)

  const handleActive = async () => {
    try {
      if (handleJoinChatRoom) {
        await handleJoinChatRoom({ eventId, hostId, userId: user?.id || '' })
        dispatch(setConservation(conversation))
      }
      console.log('🚀 ~ handleActive ~ conversation:', conversation)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div
        onClick={handleActive}
        style={{ backgroundColor: active ? '#3D56F0' : 'gray' }}
        className={`flex gap-2 items-center rounded p-1 cursor-pointer`}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={conversation?.event?.coverImage} alt='user avatar' />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex justify-between gap-3'>
            <p className='font-bold text-white truncate text-ellipsis'>{conversation?.event?.name}</p>
          </div>
          <div className='flex items-center gap-2 text-white'>
            {host ? (
              <>
                <p>Client: </p>
                <p className='truncate'>{conversation?.user?.fullName}</p>
              </>
            ) : (
              <>
                <p>Author: </p>
                <p className='truncate'>{conversation?.host?.fullName}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {!lastIdx && <div className='h-1 py-0 my-0 divider' />}
    </>
  )
}
export default Conversation
