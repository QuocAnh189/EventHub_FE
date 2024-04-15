//component
import SearchHome from '@components/common/SearchHome'
import BestEvents from '@components/common/event/BestEvents'
import BannerPic from '@components/common/BannerPic'
import UpComingEvents from '@components/common/event/UpComingEvents'
import AboutUs from '@components/common/AboutUs'
import LocationUs from '@components/common/Location'

//assets
import PosterOne from '@assets/event/event-poster.png'
import PosterTwo from '@assets/event/event-subposter.png'

const Home = () => {
  return (
    <div>
      <SearchHome />
      <BestEvents />
      <BannerPic img={PosterOne} />
      <UpComingEvents />
      <BannerPic img={PosterTwo} />
      <AboutUs />
      <LocationUs />
    </div>
  )
}

export default Home
