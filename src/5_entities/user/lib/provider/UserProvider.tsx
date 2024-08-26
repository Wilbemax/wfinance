'use client'

import { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Cookies from 'universal-cookie'

import { removeLoading, setLoading } from '@/5_entities/app/model/slice'

import { useFetchUser } from '../hooks/useFetchUser'

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth: React.FC = (props) => {
    const dispatch = useDispatch()
    const cookies = new Cookies()
    const fetchUser = useFetchUser()
    const token = cookies.get<string>('refreshToken')
    const router = useRouter()

    useLayoutEffect(() => {
      const checkAuth = async () => {
        dispatch(setLoading()) // Инициализация состояния загрузки при монтировании компонент

        try {
          const res = await fetchUser()
          if (res.payload === 500) throw new Error('Ошибка входа')
        } catch (error) {
          router.push('/welcome')
        }
      }

      checkAuth()
    }, [dispatch, router, fetchUser])


    return <WrappedComponent {...props} />
  }

  return ComponentWithAuth
}

export default withAuth
