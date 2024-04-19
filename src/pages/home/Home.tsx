//component
import SearchHome from './components/SearchHome'
import BestEvents from './components/BestEvents'
import BannerPic from './components/BannerPic'
import UpComingEvents from './components/UpComingEvents'
import AboutUs from './components/AboutUs'
import MapLocation from './components/Location'

//assets
import PosterOne from '@assets/event/event-poster.png'
import PosterTwo from '@assets/event/event-subposter.png'

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <SearchHome />
      <BestEvents />
      <BannerPic img={PosterOne} />
      <UpComingEvents />
      <BannerPic img={PosterTwo} />
      <AboutUs />
      <MapLocation width='90%' />
    </div>
  )
}

export default Home
