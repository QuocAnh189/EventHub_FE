// utils
import { lazy, Suspense, useContext } from 'react'

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
import { Loader } from '@components/common'
import { ToastContainer } from 'react-toastify'
import MainLayout from '@layouts/main'

// pages
const Landing = lazy(() => import('@pages/Landing'))
const SignIn = lazy(() => import('@pages/auth/Signin'))
const SignUp = lazy(() => import('@pages/auth/Signup'))
const Home = lazy(() => import('@pages/Home'))
const Overview = lazy(() => import('@pages/dashboard/Overview'))
const EventAnalysis = lazy(() => import('@pages/dashboard/Event-Analysis'))
const CategoryAnalysis = lazy(() => import('@pages/dashboard/Category-Analysis'))
const Customer = lazy(() => import('@pages/dashboard/Customer'))
const Payment = lazy(() => import('@pages/dashboard/Payment'))
const TicketSale = lazy(() => import('@pages/dashboard/Ticket-Sale'))
const TopEvent = lazy(() => import('@pages/event/Top-Event'))
const MyEvent = lazy(() => import('@pages/event/My-Event'))
const CreateEvent = lazy(() => import('@pages/event/Create-Event'))
const MyTicket = lazy(() => import('@pages/event/My-Ticket'))
const Calendar = lazy(() => import('@pages/Calendar'))
const Order = lazy(() => import('@pages/Order'))
const Reviews = lazy(() => import('@pages/Review'))
const Report = lazy(() => import('@pages/Report'))
const Help = lazy(() => import('@pages/Help'))
const Profile = lazy(() => import('@pages/setting/Profile'))

function App() {
  const { theme }: any = useContext(ThemeContext)

  console.log(theme)

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
              <Route path='/organization/dashboard/overview' element={<Overview />} />
              <Route path='/organization/dashboard/event-analysis' element={<EventAnalysis />} />
              <Route path='/organization/dashboard/category-analysis' element={<CategoryAnalysis />} />
              <Route path='/organization/dashboard/customer' element={<Customer />} />
              <Route path='/organization/dashboard/payment' element={<Payment />} />
              <Route path='/organization/dashboard/ticket-sale' element={<TicketSale />} />
              <Route path='/organization/event/top-event' element={<TopEvent />} />
              <Route path='/organization/event/my-event' element={<MyEvent />} />
              <Route path='/organization/event/create-event' element={<CreateEvent />} />
              <Route path='/organization/event/my-ticket' element={<MyTicket />} />
              <Route path='/organization/calendar' element={<Calendar />} />
              <Route path='/organization/order' element={<Order />} />
              <Route path='/organization/review' element={<Reviews />} />
              <Route path='/organization/report' element={<Report />} />
              <Route path='/organization/help' element={<Help />} />
              <Route path='/organization/settings/profile' element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
