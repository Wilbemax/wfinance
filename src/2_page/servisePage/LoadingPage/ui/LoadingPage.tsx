import { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import duck_loading from '@/6_shared/public/chpic.su_-_AniDucks_039-ezgif.com-optimize.gif'

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
        <Image
          className={classes.duck}
          src={duck_loading}
          alt='Loading...'
          height={250}
          width={250}
        />
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
