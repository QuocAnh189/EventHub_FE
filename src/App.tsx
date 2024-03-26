// utils
import { lazy, Suspense } from 'react'

// styles
import '@styles/index.scss'
import 'react-toastify/dist/ReactToastify.min.css'
import ThemeStyles from '@styles/theme'

//route
import { Routes, Route } from 'react-router-dom'

// components
import { Loader } from '@components/common'

// pages
const Landing = lazy(() => import('@pages/Landing'))
const SignIn = lazy(() => import('@pages/Signin'))
const SignUp = lazy(() => import('@pages/Signup'))

function App() {
  return (
    <>
      <ThemeStyles />
      <Suspense fallback={<Loader />}>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </Suspense>
    </>
  )
}

export default App
