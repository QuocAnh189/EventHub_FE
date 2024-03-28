import { SidebarProvider } from '@contexts/sidebarContext'
import { Outlet, useLocation } from 'react-router-dom'

// import { LayoutProps } from 'models'

//component
import Sidebar from '@components/common/sidebar/Sidebar'
import AppBar from '@components/common/AppBar'
import ScrollToTop from '@components/common/ScrollToTop'
import { Bottom } from '@components/landing/Footer/Bottom'

// hooks
// import { useTheme } from '@contexts/themeContext'
import { useRef } from 'react'
import { useWindowSize } from 'react-use'

// GA
import ReactGA from 'react-ga4'

export const MainLayout = () => {
  const { width } = useWindowSize()
  const appRef = useRef(null)
  const path = useLocation().pathname
  const withSidebar = path !== '/login' && path !== '/404'

  // Google Analytics init
  const gaKey = import.meta.env.VITE_GA
  gaKey && ReactGA.initialize(gaKey)

  // useEffect(() => {
  //   appRef.current && appRef.current?.scrollTo(0, 0)
  // }, [])

  return (
    <SidebarProvider>
      <div className={`app ${!withSidebar ? 'fluid' : ''}`} ref={appRef}>
        <ScrollToTop />
        {withSidebar && <Sidebar />}
        <div className='app_content'>
          {width >= 1280 && withSidebar && <AppBar />}
          <Outlet />
          <Bottom />
        </div>
      </div>
    </SidebarProvider>
  )
}
