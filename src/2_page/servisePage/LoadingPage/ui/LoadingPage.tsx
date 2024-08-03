'use client'

import { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import duck_loading from '@/6_shared/public/chpic.su_-_AniDucks_039-ezgif.com-optimize.gif'

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
    <>
      <Image src={duck_loading} alt='Loading...' height={400} width={400} />
      {time > 8 ? (
        <Button type='primary' onClick={handleReload}>
          Перезагрузить страницу
        </Button>
      ) : (
        <Typography.Title level={3}>{text}</Typography.Title>
      )}
    </>
  )
}

export { LoadingPage }
