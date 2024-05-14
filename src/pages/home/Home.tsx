/* eslint-disable react-hooks/exhaustive-deps */

//hook
import { useEffect } from 'react'
import { useAppDispatch } from '@hooks/useRedux'

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

//redux
import { useGetCategoriesQuery } from '@redux/services/categoryApi'
import { setCategories } from '@redux/slices/categorySlice'

const Home = () => {
  const dispatch = useAppDispatch()

  const { data: categories, isSuccess } = useGetCategoriesQuery()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCategories(categories))
    }
  }, [isSuccess])

  return (
    <div className='flex flex-col items-center'>
      <SearchHome />
      <BestEvents />
      <BannerPic img={PosterOne} />
      <UpComingEvents />
      <BannerPic img={PosterTwo} />
      <AboutUs />
      <MapLocation />
    </div>
  )
}

export default Home
