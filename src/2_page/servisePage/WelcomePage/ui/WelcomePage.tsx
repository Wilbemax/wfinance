'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypewriter } from 'react-simple-typewriter'
import { Typography } from 'antd'
import Lottie from 'lottie-react'

import { DirectButton } from '@/4_feature/DirectButton'
import { removeLoading } from '@/5_entities/app/model/slice'
import duck from '@/6_shared/public/_056_ADDCARD_OUT.json'

import classes from './page.module.scss'

const WelcomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(removeLoading())
  }, [dispatch])

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const [text] = useTypewriter({
    words: [
      'Копи',
      'Откладывай',
      'Отслеживай',
      'Начни сейчас',
      'Регистрируйся ',
    ],
    typeSpeed: 70,
  })
  return (
    <main className={classes.wrapper}>
      <div className={classes.introduction}>
        <div className={classes.text}>
          <Typography style={{ fontSize: '32px' }}>Wfinance</Typography>
          <div style={{ height: 37 }}>
            <Typography style={{ fontSize: '24px' }}>{text}</Typography>
          </div>
        </div>
        <Lottie animationData={duck} loop style={{ width: 250 }} />
      </div>
      <DirectButton />
    </main>
  )
}
export { WelcomePage }
