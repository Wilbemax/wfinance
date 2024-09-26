import React from 'react'
import { Typography } from 'antd'
import {
  MoveDownRight,
  MoveUpRight,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import Image from 'next/image'

import classes from './classes.module.scss'

interface BalanceProps {
  userName: string
  balance: number
  image: string
  expenses: number
  income: number
  month: string
}

const Balance = ({
  userName,
  balance,
  image,
  expenses,
  income,
  month,
}: BalanceProps) => {
  return (
    <div className={classes.cart}>
      <div className={classes.topInf}>
        <div className={classes.typogr}>
          <Typography.Title
            level={2}
            style={{ margin: 0, padding: 0, color: '#fff' }}
          >
            {balance.toLocaleString('ru-RU')} ₽
          </Typography.Title>
          <Typography.Text
            style={{
              lineHeight: 1,
              color: '#fff',

              maxWidth: 200,
              display: 'block',
            }}
          >
            {userName}, ваш баланс на сегодня
          </Typography.Text>
        </div>
        <div className={classes.userAvatar}>
          <Image
            className={classes.avatar}
            src={image}
            alt='User avatar'
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className={classes.downInf}>
        <div className={classes.up}>
          <Typography.Title
            className={classes.text}
            level={5}
            style={{ margin: 0, padding: 0, color: '#fff', gap: '.5rem' }}
          >
            {expenses.toLocaleString('ru-RU')} ₽ <MoveDownRight size={16} st />
          </Typography.Title>
          <Typography.Text style={{ lineHeight: 0, color: '#fff' }}>
            Расходы в {month}
          </Typography.Text>
        </div>
        <div className={classes.down}>
          <Typography.Title
            className={classes.text}
            level={5}
            style={{ margin: 0, padding: 0, color: '#fff', gap: '.5rem' }}
          >
            {income.toLocaleString('ru-RU')}₽ <MoveUpRight size={16} />
          </Typography.Title>
          <Typography.Text style={{ lineHeight: 0, color: '#fff' }}>
            Доходы в {month}
          </Typography.Text>
        </div>
      </div>
    </div>
  )
}

export { Balance }
