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

function App() {
  return (
    <>
      <ThemeStyles />
      <Suspense fallback={<Loader />}>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
        </div>
      </Suspense>
    </>
  )
}

export default App
