import { PRODUCT_CATEGORIES } from '@constants/options'

const CategoryHeader = ({ category }: any) => {
  const { label, icon, color }: any = PRODUCT_CATEGORIES.find((c) => c.value === category)

  return (
    <div className='flex items-center gap-4'>
      <div className={`badge-icon badge-icon--sm bg-${color}`}>
        <i className={`${icon} text-base`} />
      </div>
      <h5>{label}</h5>
    </div>
  )
}

export default CategoryHeader
