/* eslint-disable react-hooks/exhaustive-deps */
//redux
import { useAppDispatch } from '@hooks/useRedux'
import { setConservation } from '@redux/slices/conservationSlice'

//type
import { IConservationResponse } from '@type/conversation'

interface IConservationProps {
  conversation: IConservationResponse
  lastIdx: any
  active?: boolean
  host: boolean
}

const Conversation = (props: IConservationProps) => {
  const { host, active, conversation, lastIdx } = props

  const dispatch = useAppDispatch()

  const handleActive = () => {
    dispatch(setConservation(conversation))
  }

  return (
    <>
      <div
        onClick={handleActive}
        style={{ backgroundColor: active ? '#3D56F0' : 'gray' }}
        className={`flex gap-2 items-center  rounded p-2 py-1 cursor-pointer`}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={conversation?.event?.coverImage} alt='user avatar' />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-white truncate text-ellipsis'>{conversation?.event?.name}</p>
          </div>
          <div className='flex items-center gap-2 text-white'>
            {host ? (
              <>
                <p>Client: </p>
                <p>{conversation?.user?.fullName}</p>
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

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  )
}
export default Conversation
