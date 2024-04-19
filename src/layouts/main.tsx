import { Outlet, useLocation } from 'react-router-dom'
import { SidebarProvider } from '@contexts/sidebarContext'

//component
import Sidebar from '@components/sidebar/Sidebar'
import AppBar from '@components/AppBar'
import ScrollToTop from '@components/ScrollToTop'
import { Bottom } from '@components/Bottom'

// hooks
import { useRef, useEffect } from 'react'
import { useWindowSize } from 'react-use'

// GA
import ReactGA from 'react-ga4'

const MainLayout = () => {
  const { width } = useWindowSize()
  const appRef = useRef<any>(null)
  const path = useLocation().pathname
  const withSidebar = path !== '/login' && path !== '/404'

  const gaKey = import.meta.env.VITE_GA
  gaKey && ReactGA.initialize(gaKey)

  useEffect(() => {
    appRef.current && appRef.current?.scrollTo(0, 0)
  }, [])

  return (
    <SidebarProvider>
      <div className={`app ${!withSidebar ? 'fluid' : ''}`} ref={appRef}>
        <ScrollToTop />
        {withSidebar && <Sidebar />}
        <div className='app_content'>
          {width >= 1280 && withSidebar && <AppBar />}
          <div className='main'>
            <Outlet />
          </div>
          <Bottom />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default MainLayout
