//hook
import { useNavigate } from 'react-router-dom'

const EventCardSearchHome = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => {
        navigate('event/123')
      }}
      className='p-6 min-w-[300px] h-[180px] shadow-none bg-transparent hover:cursor-pointer hover:bg-primary-100 hover:rounded-lg '
    >
      <h3 className='mt-0 mx-0 mb-[10px] flex items-center text-[16px] font-semibold'>
        JobFair UIT
        <img
          className='w-5 h-5 ml-[5px] object-cover'
          loading='lazy'
          src='https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
          alt=''
        />
      </h3>
      <img
        className='w-full h-4/5 object-cover'
        loading='lazy'
        src='https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
        alt=''
      />
      <div className='flex items-center justify-between'>
        <a href='/' className='bg-black text-white rounded-[20px] py-[6px] px-[20px] text-[12px] hover:bg-gray'>
          View
        </a>
        <h5 className='text-[12px] font-medium m-0 mt-1 leading-4'>
          Game <br /> <span className='text-sm font-bold'>$460</span>
        </h5>
      </div>
    </button>
  )
}

export default EventCardSearchHome
