// styles
import 'swiper/css'

// components
import Spring from '@components/common/navbar/Spring'
import CategoryHeader from '@ui/CategoryHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductGridItem from '@components/common/ProductGridItem'
import { Pagination } from 'swiper/modules'

// data placeholder
import products from '@db/products'

const TopEventsByCategories = ({ category = 'electronics' }) => {
  const categoryProducts = products.filter((product) => product.category === category).slice(0, 6)

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
          {categoryProducts.map((product) => (
            <SwiperSlide className='!h-auto' key={product.id}>
              <ProductGridItem product={product} isSlide />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Spring>
  )
}

export default TopEventsByCategories
