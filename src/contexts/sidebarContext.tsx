//hook
import { ReactNode, useState, createContext, useContext, useEffect } from 'react'
import { useScrollLock } from '@hooks/useScrollLock'
import { useLocation } from 'react-router-dom'

const SidebarContext = createContext<any>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const setIsLocked = useScrollLock()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    if (open) {
      setIsLocked(true)
    } else {
      setIsLocked(false)
    }

    return () => {
      setIsLocked(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => useContext(SidebarContext)
