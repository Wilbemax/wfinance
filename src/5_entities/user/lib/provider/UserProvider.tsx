'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Cookies from 'universal-cookie'

import { setLoading } from '@/5_entities/app/model/slice'

import { useFetchUser } from '../hooks/useFetchUser'

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth: React.FC = (props) => {
    const dispatch = useDispatch()
    const cookies = new Cookies()
    const fetchUser = useFetchUser()
    const token = cookies.get('refreshToken')
    const router = useRouter()

    useEffect(() => {
      const checkAuth = async () => {
        if (!token) {
          dispatch(setLoading())
          router.push('/welcome')
          return
        }

        try {
          await fetchUser()
        } catch (error) {
          dispatch(setLoading())
          router.push('/welcome')
        }
      }

       checkAuth()
    }, [token, dispatch, router, fetchUser])

    if (!token) {
      dispatch(setLoading())
      return null
    }

    return <WrappedComponent {...props} />
  }

  return ComponentWithAuth
}

export default withAuth
