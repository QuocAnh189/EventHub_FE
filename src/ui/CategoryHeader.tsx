// import { EVENT_CATEGORIES } from '@constants/options'

interface Props {
  category: string
}
const CategoryHeader = (props: Props) => {
  const { category } = props
  // const { label, icon, color }: any = EVENT_CATEGORIES.find((c) => c.value === category)

  return (
    <div className='flex items-center gap-4'>
      <div className={`badge-icon badge-icon--sm bg-blue-500`}>{/* <i className={` text-base`} /> */}</div>
      <h5>{category}</h5>
    </div>
  )
}

export default CategoryHeader
