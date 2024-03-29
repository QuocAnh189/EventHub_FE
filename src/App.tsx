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
const SignIn = lazy(() => import('@pages/Signin'))
const SignUp = lazy(() => import('@pages/Signup'))
const Home = lazy(() => import('@pages/Home'))
const Profile = lazy(() => import('@pages/Profile'))
const Events = lazy(() => import('@pages/Event'))

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
            <Route path='/home' element={<MainLayout />}>
              <Route path='/home/' element={<Home />} />
              <Route path='/home/profile' element={<Profile />} />
              <Route path='/home/event' element={<Events />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
