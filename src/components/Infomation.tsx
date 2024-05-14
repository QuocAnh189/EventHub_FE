/* eslint-disable react-hooks/exhaustive-deps */

//hook
import { useMemo } from 'react'

//component
import FormControl from '@mui/material/FormControl'

//icons
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { FaUsers } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

//style
import classNames from 'classnames'
import { IEvent } from 'interfaces/contents/event'
import dayjs from 'dayjs'

//assets
import userDefault from '@assets/common/user_default.png'

//redux
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { useFollowUserMutation, useUnfollowUserMutation } from '@redux/services/userApi'
import { toast } from 'react-toastify'
import { setUser } from '@redux/slices/userSlice'
interface Props {
  event: IEvent
}

const Infomation = (props: Props) => {
  const { event } = props

  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)

  const totalQuatity = useMemo(() => {
    const calculation = event.ticketTypes?.reduce((total, currentValue) => {
      return total + currentValue.quantity
    }, 0)
    return calculation
  }, [])

  const isFollow = user?.followingIds?.includes(event.creatorId)

  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()

  const handleFollowUser = async () => {
    try {
      const result = isFollow
        ? await unfollowUser({ followerId: user?.id!, followedId: event.creatorId }).unwrap()
        : await followUser({ followerId: user?.id!, followedId: event.creatorId }).unwrap()

      if (result) {
        toast.success(isFollow ? 'unFollow sucessfully' : 'follow succesfully')
        dispatch(setUser(result.items))
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-center bg-body'>
        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaRegCalendarAlt color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Time</p>
          <p className='text-gray500 text-[14px] text-header'>
            {dayjs(event.startTime).format('dddd, DD/MM/YYYY hh:mm A').toString()}
          </p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoLocationOutline color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Location</p>
          <p className='text-gray500 text-[14px] text-header'>{event.location}</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoMdTime color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Happen</p>
          <p className='text-gray500 text-[14px] text-header'>9 day</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaUsers color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Participant</p>
          <p className='text-gray500 text-[14px] text-header'>{event.ticketTypes.length ? totalQuatity : 0}</p>
        </div>
      </div>

      <div className='flex flex-col px-[100px] gap-8'>
        <div className='space-y-2'>
          <h5>Organization By</h5>
          <div className='flex items-center gap-3'>
            <img
              src={user?.avatar ? user.avatar : userDefault}
              alt=''
              className='w-[50px] h-[50px] object-cover rounded-full'
            />
            <div>
              <p className='font-semibold text-header'>{user?.userName}</p>
              <button onClick={handleFollowUser} className='flex items-center gap-1 bg-primary px-2 py-1 rounded-md'>
                <IoMdAdd color='white' size={24} />
                <p className='text-white'>{isFollow ? 'unfollow' : 'follow'}</p>
              </button>
            </div>
          </div>
        </div>

        <div className='space-y-1'>
          <h5>Event Description</h5>
          <p className='text-header'>{event.description}</p>
          <h6 className='text-header'>3 Reasons to attend the event:</h6>

          {event.reasons?.map((reason, index) => (
            <p key={`reason${index}`} className='text-header'>
              {index + 1}. {reason}
            </p>
          ))}
        </div>
      </div>

      <div className='w-full flex items-center gap-8 justify-center'>
        {event?.subImages.map(
          (image: any, index: number) =>
            image && (
              <img
                key={`subimage-${index}`}
                loading='lazy'
                className='h-[200px] w-[200px] rounded-lg'
                src={image || ''}
                alt=''
              />
            )
        )}
      </div>

      <div className='flex px-[100px] gap-8'>
        <div className='flex flex-col flex-auto gap-5 p-8 bg-body shadow-xl rounded-md'>
          <h1 className='text-header font-bold text-2xl'>Chat Room</h1>
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
                  <input
                    readOnly
                    className={classNames('field-input')}
                    id='qty'
                    placeholder='0'
                    value={user?.userName}
                  />
                </div>
                <div className='field-wrapper'>
                  <label className='field-label' htmlFor='qty'>
                    Email
                  </label>
                  <input readOnly className={classNames('field-input')} id='qty' placeholder='0' value={user?.email} />
                </div>
              </div>
              <div className='field-wrapper'>
                <label className='field-label' htmlFor='qty'>
                  Event
                </label>
                <input readOnly className={classNames('field-input')} id='qty' value={event.name} />
              </div>
            </div>
          </FormControl>
          <button className='px-4 py-3 rounded-3xl bg-primary font-semibold text-white w-[200px] hover:bg-primary-500'>
            Start Chat
          </button>
        </div>
      </div>
    </div>
  )
}

export default Infomation
