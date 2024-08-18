'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from 'antd'

import { FormWidget } from '@/3_widgets/auth/Registration'
import { SignInForm } from '@/4_feature/auth/SignInForm/ui/SignInForm'
import { removeLoading } from '@/5_entities/app/model/slice'
import { Container } from '@/6_shared/ui/continer'

const SignInPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(removeLoading()) // Снятие состояния загрузки после загрузки страницы
  }, [dispatch])

  return (
    <Container>
      <Typography.Title
        level={3}
        style={{ padding: '2rem', textAlign: 'center' }}
      >
        Wfinance регистрация
      </Typography.Title>
      <FormWidget />
    </Container>
  )
}

export default SignInPage
