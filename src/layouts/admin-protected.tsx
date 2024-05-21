/* eslint-disable react-hooks/exhaustive-deps */

// hooks
import { useAppSelector } from '@hooks/useRedux'
import { useLayoutEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminProtectedLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  useLayoutEffect(() => {
    if (user === null || !user.roles.includes('ADMIN')) {
      navigate('/signin')
    }
  }, [user])

  return <div>{children}</div>
}

export default AdminProtectedLayout
