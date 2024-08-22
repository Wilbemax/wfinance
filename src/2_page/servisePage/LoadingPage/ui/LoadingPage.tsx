'use client'

import { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import cx from 'classnames'
import Lottie from 'lottie-react'
import { useRouter } from 'next/navigation'

import duck from '@/6_shared/public/_097_SCISSORS.json'

import classes from './style.module.scss'

const LoadingPage = () => {
  const [time, setTime] = useState<number>(0)
  const [text, setText] = useState<string>('Грузим данные')
  const router = useRouter()

  const handleReload = () => {
    if (router) {
      router.refresh()
    }
  }
  useEffect(() => {
    setText('Грузим данные')
  }, [])

  useEffect(() => {
    const sec = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(sec)
  }, [])

  useEffect(() => {
    if (time > 5) {
      setText('Мы очень стараемся')
    }
  }, [time])

  return (
    <main className={cx(classes.center, 'container')}>
      <div className={cx(classes.wrapper)}>
        <Lottie animationData={duck} loop style={{ width: 250 }} />
        {time > 8 ? (
          <Button
            type='primary'
            size='large'
            className={classes.button}
            onClick={handleReload}
          >
            Перезагрузить страницу
          </Button>
        ) : (
          <Typography.Text className={classes.text}>{text}</Typography.Text>
        )}
      </div>
    </main>
  )
}

export { LoadingPage }
