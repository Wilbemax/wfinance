'use client '

import { Typography } from 'antd'
import { MoveDownRight, MoveUpRight, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'

import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import logo from '@/6_shared/public/95708730.jpeg'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

type Props = {}
const darkenColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) - amt
  const G = ((num >> 8) & 0x00ff) - amt
  const B = (num & 0x0000ff) - amt
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`
}
const HomePage = (props: Props) => {
  const { user } = useUser()
  const dark = darkenColor('#5ddc88', 20)
  return (
    <Container>
      <Typography.Title level={3}>Баланс</Typography.Title>

      {/* cart */}

      <div className={classes.cart}>
        <div className={classes.topInf}>
          <div className={classes.typogr}>
            <Typography.Title
              level={2}
              style={{ margin: 0, padding: 0, color: '#fff' }}
            >
              450 342 ₽
            </Typography.Title>
            <Typography.Text style={{ lineHeight: 0, color: '#fff' }}>
              {user?.userName}, ваш баланс на сегодня
            </Typography.Text>
          </div>
          <div className={classes.userAvatar}>
            <Image
              className={classes.avatar}
              src={logo}
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
              style={{ margin: 0, padding: 0, color: '#fff' }}
            >
              58 900 ₽ <MoveDownRight size={16} />
            </Typography.Title>
            <Typography.Text style={{ lineHeight: 0, color: '#fff' }}>
              Расходы в январе
            </Typography.Text>
          </div>
          <div className={classes.down}>
            <Typography.Title
              className={classes.text}
              level={5}
              style={{ margin: 0, padding: 0, color: '#fff' }}
            >
              117 900 ₽ <MoveUpRight size={16} />
            </Typography.Title>
            <Typography.Text style={{ lineHeight: 0, color: '#fff' }}>
              Доходы в январе
            </Typography.Text>
          </div>
        </div>
      </div>

      {/* баджы про бюджет */}

      <Typography.Title level={4}>Бюджеты</Typography.Title>
      <div className={classes.budgetWrapper}>
        {/* Блок, который изменяет высоту в зависимости от процента */}
        <div
          className={classes.perCent}
          style={{
            background: 'rgba(250, 250, 250, 0.4)',
            height: `${50}%`,
          }}
        />

        {/* Основной блок для информации */}
        <div className={classes.budget} style={{ background: '#5adb85' }}>
          <div className={classes.icon} style={{ background: dark }}>
            <ShoppingBasket color='#fff' size={20} />
          </div>
          <div>
            <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
              24 234 ₽
            </Typography.Title>
            <Typography.Text style={{ lineHeight: 0 }}>
              Продукты
            </Typography.Text>
          </div>
        </div>
      </div>
    </Container>
  )
}

export { HomePage }
