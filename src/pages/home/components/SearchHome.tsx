//hook
import { useNavigate } from 'react-router-dom'

//component
import EventCardSearchHome from '@components/EventCardSearchHome'

//assets
import NatureVid from '@assets/event/main.mp4'

const SearchHome = () => {
  const navigate = useNavigate()

  return (
    <div className='w-[90%] h-[95vh] m-auto'>
      <div className='relative w-full'>
        <video autoPlay loop muted className='absolute right-0 top-0 h-auto w-full object-cover z-[-1] rounded-md'>
          <source src={NatureVid} type='video/mp4' />
        </video>
      </div>
      <div className='relative w-full h-[90%]'>
        <div className='w-[500px] h-auto text-white px-[30px] pt-[30px] pb-[100px]'>
          <p className='text-white leading-10 font-extrabold text-[2em]'>
            The right desitination for you and your friends
          </p>
          <p className='text-[rgb(241, 241, 241)] font-medium text-[14px]'>
            Creative taglines have the capability of capturing the attention of potential custumer.
          </p>
          <button
            onClick={() => {
              navigate('explore')
            }}
            className='mt-5 py-[10px] px-[20px] rounded-[20px] bg-primary text-white cursor-pointer hover:bg-primary-500'
          >
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
              <select className='mt-1 py-1 px-0 border-none outline-none text-sm' aria-label='aa'>
                <option value='volvo'>Music</option>
                <option value='saab'>Game</option>
                <option value='mercedes'>Sport</option>
                <option value='audi'>Dancer</option>
              </select>
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
              <EventCardSearchHome />
              <EventCardSearchHome />
              <EventCardSearchHome />
              <EventCardSearchHome />
              <EventCardSearchHome />
              <EventCardSearchHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHome
