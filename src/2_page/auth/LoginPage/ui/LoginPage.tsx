'use client'

import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from 'antd'
import { useRouter } from 'next/navigation'

import { LoginFormWidget } from '@/3_widgets/auth/Login'
import { removeLoading } from '@/5_entities/app/model/slice'
import { useFetchUser } from '@/5_entities/user/lib/hooks/useFetchUser'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  const fetchUser = useFetchUser()
  const router = useRouter()

  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetchUser()

        if (res.payload === 500) throw new Error('Ошибка входа')
        router.push('/')
      } catch (error) {
        console.log(error)
      }
    }

    const timer = setTimeout(() => {
      checkAuth()
    }, 0)

    return () => clearTimeout(timer)
  }, [dispatch, router])

  useEffect(() => {
    dispatch(removeLoading())
  }, [dispatch])

  return (
    <Container>
      <div className={classes.wrapper}>
        <Typography.Title className={classes.logo}>Wfinance</Typography.Title>
        <LoginFormWidget />
      </div>
    </Container>
  )
}
export { LoginPage }
