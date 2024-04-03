//hooks
import { useState } from 'react'

//component
import Hero from '@components/common/Hero'
import BlogsComp from '@components/common/blogs/BlogsComp'
import Places from '@components/common/event/Events'
import BannerPic from '@components/common/BannerPic'
import LocationHome from '@components/common/Location'

//assets
import NatureVid from '@assets/video/main.mp4'
import BannerOne from '@assets/images/common/event-poster.png'
import BannerTwo from '@assets/images/common/sub-poster.png'

const Home = () => {
  const [orderPopup, setOrderPopup] = useState<boolean>(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  return (
    <>
      <div>
        <div className='h-[700px] relative'>
          <video autoPlay loop muted className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
            <source src={NatureVid} type='video/mp4' />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerOne} />
        <BlogsComp />
        <BannerPic img={BannerTwo} />
        <div className='container pt-14'>
          <div className='py-10'>
            <h1 className=' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>About us</h1>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus cupiditate quo harum officia
              perspiciatis hic ut sunt repudiandae, laboriosam expedita nostrum tempora, consectetur itaque, voluptate
              error aperiam corrupti ullam aspernatur a! Dolorem, reprehenderit amet quidem deleniti iure rem vel a enim
              ipsam hic numquam consequatur eius id eaque accusamus repudiandae impedit, quisquam non, harum inventore
              ratione? Tempora voluptatum ut eligendi corrupti esse, repellat nesciunt illum facilis officiis? Nisi
              quidem officiis asperiores nostrum ipsa maiores explicabo quia! Corporis provident asperiores fuga
              eligendi rem temporibus possimus autem excepturi! Facilis sunt corrupti nesciunt asperiores, ab
              consectetur doloremque, velit a mollitia possimus quaerat!
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
    </>
  )
}

export default Home
