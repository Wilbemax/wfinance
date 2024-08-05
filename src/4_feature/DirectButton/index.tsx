'use client'

import { Button } from 'antd'
import Link from 'next/link'

import classes from './classes.module.scss'

const DirectButton = () => {
  return (
    <div className={classes.buttons}>
      <Link href='/auth/sign-in' style={{ width: '100%' }}>
        <Button type='primary' size='large'>
          {' '}
          Начать прямо сейчас{' '}
        </Button>
      </Link>
      <Link href='/auth/login' style={{ width: '100%' }}>
        <Button type='default' size='large'>
          {' '}
          Войти в аккаунт{' '}
        </Button>{' '}
      </Link>
    </div>
  )
}

export { DirectButton }
