// components
import Spring from '@components/common/Spring'

// utils
import dayjs from 'dayjs'

const UserProfileCard = () => {
  return (
    <Spring className='card flex flex-col items-center justify-center'>
      <div className='relative mb-3.5'>
        <img
          loading='lazy'
          className='relative rounded-full w-[110px] h-[110px]'
          src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
          alt='Maria Smith'
        />
        <button
          className='absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                        border-widget border-solid transition hover:bg-green-darker'
          aria-label='Change profile picture'
        >
          <i className='inline-block icon-camera-solid mt-1' />
        </button>
      </div>
      <h4>Anh Quoc</h4>
      <span className='badge badge--square bg-red min-w-[96px] mt-2.5'>Admin</span>
      <p className='subheading-2 mt-6 mb-[18px]'>last visit {dayjs().format('DD/MM/YYYY')}</p>
      <button className='btn btn--secondary w-full md:max-w-[280px]'>Log Out</button>
    </Spring>
  )
}

export default UserProfileCard
