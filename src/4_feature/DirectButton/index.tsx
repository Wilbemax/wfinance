'use client'

import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import cx from 'classnames'
import { useRouter } from 'next/navigation'

import { setLoading } from '@/5_entities/app/model/slice'
import { setCurrentTheme } from '@/5_entities/theme/model/slice'
import { useAppSelector } from '@/6_shared/model/hooks'

import classes from './classes.module.scss'

const DirectButton = () => {
  const currentTheme = useAppSelector(setCurrentTheme)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleClick = (href: string) => {
    dispatch(setLoading())
    router.push(href)
  }

  return (
    <div className={cx('container')}>
      <div className={cx(classes.buttons)}>
        <Button
          type='primary'
          className={classes.btn}
          size='large'
          onClick={() => handleClick('/auth/sign-in')}
          style={{ width: '100%' }}
        >
          Начать прямо сейчас
        </Button>
        <Button
          type={currentTheme === 'dark' ? 'primary' : 'default'}
          className={classes.btn}
          size='large'
          style={{ background: '#cccccc', color: '#23272e', width: '100%' }}
          onClick={() => handleClick('/auth/login')}
        >
          Войти в аккаунт
        </Button>
      </div>
    </div>
  )
}

export { DirectButton }
