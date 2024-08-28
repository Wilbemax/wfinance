'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

import { setLoading } from '@/5_entities/app/model/slice'

import { useFetchUser } from '../hooks/useFetchUser'

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth: React.FC = (props) => {
    const dispatch = useDispatch()
    const fetchUser = useFetchUser()
    const router = useRouter()

    useEffect(() => {
      const checkAuth = async () => {
        dispatch(setLoading())
        try {
          const res = await fetchUser()
          if (res.payload === 500) throw new Error('Ошибка входа')
        } catch (error) {
          router.push('/welcome')
        }
      }

      const timer = setTimeout(() => {
        checkAuth()
      }, 0)

      return () => clearTimeout(timer)
    }, [dispatch, router, fetchUser])

    return <WrappedComponent {...props} />
  }

  return ComponentWithAuth
}

export default withAuth
