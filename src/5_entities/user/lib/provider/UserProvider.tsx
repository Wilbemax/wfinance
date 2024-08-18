'use client'

import { useEffect } from 'react'
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

    useEffect(() => {
      const checkAuth = async () => {
        dispatch(setLoading()) // Инициализация состояния загрузки при монтировании компонента

        if (!token) {
          router.push('/welcome')
          dispatch(removeLoading()) // Снятие состояния загрузки после редиректа
          return
        }

        try {
          await fetchUser()
        } catch (error) {
          router.push('/welcome')
        } finally {
          dispatch(removeLoading()) // Снятие состояния загрузки в любом случае
        }
      }

      checkAuth().catch((error) => {
        console.error('Ошибка при проверке аутентификации:', error)
        dispatch(removeLoading()) // Снятие состояния загрузки при возникновении ошибки
      })
    }, [token, dispatch, router, fetchUser])

    if (!token) {
      return null
    }

    return <WrappedComponent {...props} />
  }

  return ComponentWithAuth
}

export default withAuth
