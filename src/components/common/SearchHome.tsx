//assets
import NatureVid from '@assets/event/main.mp4'

const SearchHome = () => {
  return (
    <div className='w-[90%] h-[95vh] m-auto'>
      <div className='relative w-full'>
        <video autoPlay loop muted className='absolute right-0 top-0 h-auto w-full object-cover z-[-1] rounded-md'>
          <source src={NatureVid} type='video/mp4' />
        </video>
      </div>
      <div className='relative w-full h-[90%]'>
        <div className='w-[500px] h-auto text-white px-[30px] pt-[30px] pb-[100px]'>
          <h1 className='text-white leading-10 font-extrabold text-[2em]'>
            The right desitination for you and your friends
          </h1>
          <p className='text-[rgb(241, 241, 241)] font-medium text-[14px]'>
            Creative taglines have the capability of capturing the attention of potential custumer.
          </p>
          <button className='mt-5 py-[10px] px-[20px] rounded-[20px] bg-primary text-white cursor-pointer hover:bg-primary-500'>
            Explore Now
          </button>
        </div>
        <div className='trip_bx relative w-[95%] h-auto m-auto  before:absolute before:w-full before:h-[340px] before:rounded-[10px] before:bg-bgSearchHome before:z-[-1] before:backdrop-blur-sm'>
          <div className='flex items-center justify-center pr-[10px] bg-white rounded-md shadow-md z-[1] absolute -top-10 left-0 h-20'>
            <div className='w-[200px] h-full shadow-none p-4'>
              <h4 className='text-[15px] m-0 font-bold'>Location</h4>
              <input
                className='mt-1 py-1 px-0 border-none outline-none text-sm'
                type='text'
                placeholder='Enter your destination'
              />
            </div>
            <div className='w-[200px] h-full shadow-none p-4'>
              <h4 className='text-[15px] m-0 font-bold'>Date</h4>
              <input className='mt-1 py-1 px-0 border-none outline-none text-sm' type='date' />
            </div>
            <div className='w-[200px] h-full shadow-none p-4'>
              <h4 className='text-[15px] m-0 font-bold'>Category</h4>
              <input
                className='mt-1 py-1 px-0 border-none outline-none text-sm'
                type='number'
                placeholder='How many People?'
              />
            </div>
            <input
              className='bg-primary text-white border-none outline-none px-5 py-[10px] rounded-[20px] cursor-pointer ml-[10px] hover:bg-primary-500'
              type='button'
              value='Search'
            />
          </div>
          <div className='relative w-full h-auto m-auto top-[30px] rounded-[10px] pb-5'>
            <h4 className='m-0 pt-20 pl-[1.7%]'>Events to Explore</h4>
            <div className='w-full h-auto my-0 mx-auto flex items-center overflow-x-auto overflow-y-hidden pb-4 scrollbar-w-none'>
              <div className='p-6 min-w-[300px] h-[180px] shadow-none bg-transparent'>
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
                  <a
                    href='/'
                    className='bg-black text-white rounded-[20px] py-[6px] px-[20px] text-[12px] hover:bg-gray'
                  >
                    View
                  </a>
                  <h5 className='text-[12px] font-medium m-0 mt-1 leading-4'>
                    Game <br /> <span className='text-sm font-bold'>$460</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHome
