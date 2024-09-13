/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

import { removeLoading, setLoading } from '@/5_entities/app/model/slice'

import { useFetchUser } from '../hooks/useFetchUser'
import { useUser } from '../hooks/useUser'

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth: React.FC = (props) => {
    const user = useUser()
    const token = user.refreshToke
    const dispatch = useDispatch()
    const fetchUser = useFetchUser()
    const router = useRouter()

    useLayoutEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await fetchUser()
          dispatch(setLoading())
          if (res) dispatch(removeLoading())
          if (res.payload === 500) throw new Error('Ошибка входа')
        } catch (error) {
          router.push('/welcome')
        }
      }

      if (token) {
        return
      }

      const timer = setTimeout(() => {
        checkAuth()
      }, 0)

      return () => clearTimeout(timer)
    }, [dispatch, router, token])

    if (user.user !== null) {
      return <WrappedComponent {...props} />
    }
    return null
  }

  return ComponentWithAuth
}

export default withAuth
