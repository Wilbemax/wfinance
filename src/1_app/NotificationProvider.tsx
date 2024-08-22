'use client'

import type { PropsWithChildren } from 'react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { message } from 'antd'

import { useAppState } from '@/5_entities/app/lib/useAppState'
import { setError } from '@/5_entities/app/model/slice'

const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [messageApi, contextHolder] = message.useMessage()
  const { error } = useAppState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (error !== '') {
      messageApi.open({
        type: 'error',
        content: error,
      })

      // Очистка ошибки через 3 секунды
      const timer = setTimeout(() => {
        dispatch(setError('')) // Очищаем сообщение об ошибке
      }, 3000)

      // Очистка таймера при размонтировании компонента или изменении error
      return () => clearTimeout(timer)
    }
  }, [dispatch, error, messageApi])

  return (
    <>
      {contextHolder}
      {children}
    </>
  )
}

export default NotificationProvider
