// styles
import 'swiper/css'

// components
import Spring from '@components/Spring'
import CategoryHeader from '@ui/CategoryHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductGridItem from '@components/EventGridItem'
import { Pagination } from 'swiper/modules'

//interface
import { ICategory } from 'interfaces/contents/category'

//redux
import { useGetEventsByCategoryIdQuery } from '@redux/services/categoryApi'

interface Props {
  category: ICategory
}

const TopEventsByCategories = (props: Props) => {
  const { category } = props

  const { data: events } = useGetEventsByCategoryIdQuery(category.id!)

  if (events) {
    console.log(events)
  }

  return (
    <Spring className='flex flex-col gap-5'>
      <CategoryHeader category={category} />
      <div className='w-full'>
        <Swiper
          className='!p-2.5 !-m-2.5'
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={26}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            1536: {
              slidesPerView: 3
            }
          }}
          speed={1300}
          rewind={false}
          loop
        >
          {[0, 1, 2, 3, 4].map((item) => (
            <SwiperSlide className='!h-auto' key={item}>
              <ProductGridItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Spring>
  )
}

export default TopEventsByCategories
