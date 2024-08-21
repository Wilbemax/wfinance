'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from 'antd'

import { LoginFormWidget } from '@/3_widgets/auth/Login'
import { removeLoading } from '@/5_entities/app/model/slice'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

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
