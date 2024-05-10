import { ICategory } from 'interfaces/contents/category'

interface Props {
  category: ICategory
}
const ItemCategory = (props: Props) => {
  const { category } = props

  return (
    <div className='flex flex-row items-center gap-2'>
      <div
        style={{ backgroundColor: category.color }}
        className={`w-[30px] h-[30px] rounded-lg bg-[${category.color}] flex items-center justify-center`}
      >
        <img loading='lazy' className='w-[20px] h-[20px]' src={category.iconImage} />
      </div>
      <p className='text-header'>{category.name}</p>
    </div>
  )
}

export default ItemCategory
