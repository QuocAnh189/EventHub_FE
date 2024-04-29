/* eslint-disable react-hooks/exhaustive-deps */

// hooks
import { useAppSelector } from '@hooks/useRedux'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedLayout = ({ children }: any) => {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user.user)

  useLayoutEffect(() => {
    if (user === null) {
      navigate('/signin')
    }
  }, [user])

  console.log(user)

  return <div>{children}</div>
}

export default ProtectedLayout
