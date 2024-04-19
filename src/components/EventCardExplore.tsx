//hook
import { useNavigate } from 'react-router-dom'

//icon
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { BiPurchaseTagAlt } from 'react-icons/bi'

const EventCardExplore = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        navigate('event/123')
      }}
      className='flex gap-2 h-[200px] items-center rounded-md shadow-lg hover:cursor-pointer'
    >
      <div className='w-1/2 h-full'>
        <img
          loading='lazy'
          src='https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
          alt=''
          className='w-full h-full object-cover rounded-l-md'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h5>Hello everyone! Today I feel so good</h5>
        <div className='flex items-center gap-1'>
          <FaCalendarAlt />
          <p>Nov 23 -29</p>
        </div>
        <div className='flex items-center gap-1'>
          <IoLocationSharp />
          <p>University Of Information Technology</p>
        </div>
        <div className='flex items-center gap-1'>
          <IoMdTime />
          <p>7PM - 11PM</p>
        </div>

        <div className='flex items-center gap-1'>
          <BiPurchaseTagAlt color='#3D56F0' size='24px' />
          <p className='text-primary text-xl'>100.000VND</p>
        </div>
      </div>
    </button>
  )
}

export default EventCardExplore
