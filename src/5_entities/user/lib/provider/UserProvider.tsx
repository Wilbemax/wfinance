'use client'
import { useRouter } from 'next/navigation'
// это ультилита предназначена для перенаправления пользователя, с защищенных роутов на страницу, разрешенную им

import { useEffect } from 'react'
import Cookies from 'universal-cookie'
import { useFetchUser } from '../hooks/useFetchUser'

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth: React.FC = (props) => {
    const cookies = new Cookies()
    const fetchUser = useFetchUser()
    const token = cookies.get('refreshToken')
    const router = useRouter()
    useEffect(() => {
      if (!token) {
        router.push('/welcome')
        return
      }
      fetchUser()
      if (typeof fetchUser === 'number') {
        router.push('/welcome')
      }


    }, [token])
    if (!token) {
      return <>Loading...</>
    }
    return <WrappedComponent {...props} />
  }
  return ComponentWithAuth
}
export default withAuth
