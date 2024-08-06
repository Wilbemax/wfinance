'use client'

import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import cx from 'classnames'
import Link from 'next/link'

import { setLoading } from '@/5_entities/app/model/slice'
import { setCurrentTheme } from '@/5_entities/theme/model/slice'
import { useAppSelector } from '@/6_shared/model/hooks'

import classes from './classes.module.scss'

const DirectButton = () => {
  const currentTheme = useAppSelector(setCurrentTheme)
  const dispatch = useDispatch()

  const loading = () => dispatch(setLoading())
  return (
    <div className={cx('container')}>
      <div className={cx(classes.buttons)}>
        <Link href='/auth/sign-in' onClick={loading} style={{ width: '100%' }}>
          <Button type='primary' className={classes.btn} size='large'>
            {' '}
            Начать прямо сейчас{' '}
          </Button>
        </Link>
        <Link href='/auth/login' onClick={loading} style={{ width: '100%' }}>
          <Button
            type={currentTheme === 'dark' ? 'primary' : 'default'}
            className={classes.btn}
            size='large'
            style={{ background: '#cccccc', color: '#23272e' }}
          >
            {' '}
            Войти в аккаунт{' '}
          </Button>{' '}
        </Link>
      </div>
    </div>
  )
}

export { DirectButton }
