//hooks
import { useState } from 'react'

//component
import SearchHome from '@components/common/SearchHome'
import BlogsComp from '@components/common/blogs/BlogsComp'
import Places from '@components/common/event/Events'
import BannerPic from '@components/common/BannerPic'
import LocationHome from '@components/common/Location'

//assets
import PosterOne from '@assets/event/event-poster.png'
import PosterTwo from '@assets/event/event-subposter.png'

const Home = () => {
  const [orderPopup, setOrderPopup] = useState<boolean>(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  return (
    <div>
      <SearchHome />
      <Places handleOrderPopup={handleOrderPopup} />
      <BannerPic img={PosterOne} />
      <BlogsComp />
      <BannerPic img={PosterTwo} />
      <div className='container pt-14'>
        <div className='py-10'>
          <h1 className=' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>About us</h1>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus cupiditate quo harum officia
            perspiciatis hic ut sunt repudiandae, laboriosam expedita nostrum tempora, consectetur itaque, voluptate
            error aperiam corrupti ullam aspernatur a! Dolorem, reprehenderit amet quidem deleniti iure rem vel a enim
            ipsam hic numquam consequatur eius id eaque accusamus repudiandae impedit, quisquam non, harum inventore
            ratione? Tempora voluptatum ut eligendi corrupti esse, repellat nesciunt illum facilis officiis? Nisi quidem
            officiis asperiores nostrum ipsa maiores explicabo quia! Corporis provident asperiores fuga eligendi rem
            temporibus possimus autem excepturi! Facilis sunt corrupti nesciunt asperiores, ab consectetur doloremque,
            velit a mollitia possimus quaerat!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi suscipit minus similique aliquam
            recusandae quisquam id nulla tempora voluptate vero.
          </p>
        </div>
      </div>
      <LocationHome />
    </div>
  )
}

export default Home
