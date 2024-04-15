// components
import Spring from './Spring'

const TopRetailCard = () => {
  return (
    <Spring className='card'>
      <div className='img-wrapper h-[157px] flex justify-center items-center mb-6'>
        <img
          className='max-w-[120px]'
          src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
          alt='Anh Quoc'
        />
      </div>
      <div className='flex gap-5'>
        <div className='w-full flex flex-col items-center'>
          <span className='label-text truncate'>Game</span>
          <span className='h5'>$256k</span>
        </div>
      </div>
    </Spring>
  )
}

export default TopRetailCard
