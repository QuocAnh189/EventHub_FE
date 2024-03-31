// components
import Spring from './navbar/Spring'

// utils
import { numFormatter, getCategory } from '@utils/helpers'

const TopRetailCard = ({ data }: any) => {
  const arr = Object.entries(data.profit)
    .map(([key, value]) => ({ key, value }))
    .sort((a: any, b: any) => b.value - a.value)
  const category = getCategory(arr[0].key)

  return (
    <Spring className='card'>
      <div className='img-wrapper h-[157px] flex justify-center items-center mb-6'>
        <img
          className='max-w-[120px]'
          src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
          alt={data.name}
        />
      </div>
      <div className='flex gap-5'>
        <div className={`badge-icon badge-icon--sm bg-${category?.color}`}>
          <i className={`${category?.icon} text-base`} />
        </div>
        <div className='flex flex-col'>
          <span className='label-text truncate'>{category?.label}</span>
          <span className='h5'>${numFormatter(arr[0].value)}</span>
        </div>
      </div>
    </Spring>
  )
}

export default TopRetailCard
