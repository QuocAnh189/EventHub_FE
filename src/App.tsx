// utils
import { lazy, Suspense, useContext, useEffect } from 'react'

// styles
import '@styles/index.scss'
import 'react-toastify/dist/ReactToastify.min.css'
import ThemeStyles from '@styles/theme'

//route
import { Routes, Route } from 'react-router-dom'

//context
import { ThemeProvider } from 'styled-components'

//hook
import { ThemeContext } from './contexts'

// components
import MainLayout from '@layouts/main'
import { Loader } from '@components/index'
import { ToastContainer } from 'react-toastify'

//aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// pages
const Landing = lazy(() => import('@pages/landing/Landing'))
const SignIn = lazy(() => import('@pages/auth/Signin'))
const SignUp = lazy(() => import('@pages/auth/Signup'))
const Home = lazy(() => import('@pages/home/Home'))
const Explore = lazy(() => import('@pages/explore/Explore'))
const Overview = lazy(() => import('@pages/dashboard/Overview'))
const OverviewDetail = lazy(() => import('@pages/dashboard/Overview-Detail'))
const EventAnalysis = lazy(() => import('@pages/dashboard/Event-Analysis'))
const EventAnalysisDetail = lazy(() => import('@pages/dashboard/Event-Analysis-Detail'))
const Customer = lazy(() => import('@pages/dashboard/Customer'))
const Payment = lazy(() => import('@pages/dashboard/Payment'))
const TopEvent = lazy(() => import('@pages/event/Top-Event'))
const MyEvent = lazy(() => import('@pages/event/My-Event'))
const EventDetail = lazy(() => import('@pages/event/Event-Detail'))
const CreateEvent = lazy(() => import('@pages/event/Create-Event'))
const ModifyEvent = lazy(() => import('@pages/event/Modify-Event'))
const Calendar = lazy(() => import('@pages/calendar/Calendar'))
const Order = lazy(() => import('@pages/order/Order'))
const Reviews = lazy(() => import('@pages/review/Review'))
const Todo = lazy(() => import('@pages/todo/Todo'))
const FAQ = lazy(() => import('@pages/faq/Faq'))
const Profile = lazy(() => import('@pages/setting/Profile'))
const Permission = lazy(() => import('@pages/permissions/Permission'))
const NotFound = lazy(() => import('@pages/NotFound'))

function App() {
  const { theme }: any = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100
    })
    AOS.refresh()
  }, [])

  return (
    <ThemeProvider theme={{ theme: theme }}>
      <ThemeStyles />
      <ToastContainer theme={theme} autoClose={2000} style={{ padding: '20px' }} />
      <Suspense fallback={<Loader />}>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/organization' element={<MainLayout />}>
              <Route path='/organization/' element={<Home />} />
              <Route path='/organization/explore' element={<Explore />} />
              <Route path='/organization/dashboard/overview' element={<Overview />} />
              <Route path='/organization/dashboard/overview-detail' element={<OverviewDetail />} />
              <Route path='/organization/dashboard/event-analysis' element={<EventAnalysis />} />
              <Route path='/organization/dashboard/event-analysis/:id' element={<EventAnalysisDetail />} />
              <Route path='/organization/dashboard/customer' element={<Customer />} />
              <Route path='/organization/dashboard/payment' element={<Payment />} />
              <Route path='/organization/event/top-event' element={<TopEvent />} />
              <Route path='/organization/event/my-event' element={<MyEvent />} />
              <Route path='/organization/event/:id' element={<EventDetail />} />
              <Route path='/organization/event/create-event' element={<CreateEvent />} />
              <Route path='/organization/event/my-event/modify-event/:id' element={<ModifyEvent />} />
              <Route path='/organization/calendar' element={<Calendar />} />
              <Route path='/organization/order' element={<Order />} />
              <Route path='/organization/review' element={<Reviews />} />
              <Route path='/organization/todo-list' element={<Todo />} />
              <Route path='/organization/faq' element={<FAQ />} />
              <Route path='/organization/settings/profile' element={<Profile />} />
              <Route path='/organization/permissions' element={<Permission />} />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
