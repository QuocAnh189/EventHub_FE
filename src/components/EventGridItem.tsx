// components
import { NavLink } from 'react-router-dom'
import RatingStars from '@ui/RatingStars'

const EventGridItem = () => {
  return (
    <NavLink to='/organization/event/123' className='card flex flex-col h-full hover:cursor-pointer'>
      <div className='flex items-start gap-[14px] mb-2.5'>
        <div className='img-wrapper flex flex-1 items-center justify-center'>
          <img
            src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
            alt='Anh Quoc'
          />
        </div>
      </div>
      <h6 className={`!leading-[1.4] block max-w-[180px] transition hover:text-accent mb-3`}>Top Event</h6>
      <RatingStars rating={4} />
      <div className='flex flex-col flex-1 gap-1 mt-1.5'>
        <p className='font-heading font-bold text-sm leading-[1.4] text-green'>Sales : 200</p>
        <p className='font-heading font-bold text-sm leading-[1.4] text-accent'>Favorites : 400</p>
      </div>
    </NavLink>
  )
}

export default EventGridItem
