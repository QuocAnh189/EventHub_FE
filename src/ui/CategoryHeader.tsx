// import { EVENT_CATEGORIES } from '@constants/options'

import { ICategory } from 'interfaces/contents/category'

interface Props {
  category: ICategory
}
const CategoryHeader = (props: Props) => {
  const { category } = props

  return (
    <div className='flex items-center gap-4'>
      <div style={{ backgroundColor: category.color }} className={`badge-icon badge-icon--sm bg-blue-500`}>
        {/* <i className={` text-base`} /> */}
        <img className='w-4/5 h4/5' src={category.iconImage} />
      </div>
      <h5>{category.name}</h5>
    </div>
  )
}

export default CategoryHeader
