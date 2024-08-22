'use client'

import { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import Lottie from 'lottie-react'
import { redirect } from 'next/navigation'

import duck from '@/6_shared/public/_039_SAFE_OUT.json'
import { Container } from '@/6_shared/ui/continer'

import classes from './SuccessSwitch.module.scss'

const SuccessSwitch = () => {
  const [countdown, setCountdown] = useState(5)

  const beck = () => {
    redirect('/auth/login')
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          beck()
          return prev
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Container>
      <div className={classes.wrapper}>
        <Lottie animationData={duck} loop style={{ width: 250 }} />
        <Typography.Title
          level={3}
          style={{ alignItems: 'center', margin: '2rem 0' }}
        >
          Пароль успешно сменен
        </Typography.Title>
        <div style={{ marginTop: '1rem' }}>
          <Button
            size='large'
            type='primary'
            style={{ width: '100%' }}
            onClick={beck}
          >
            Вернуться ко входу ({countdown}с.)
          </Button>
        </div>
      </div>
    </Container>
  )
}
export { SuccessSwitch }
