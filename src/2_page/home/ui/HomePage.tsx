'use client '

import { Typography } from 'antd'
import { MoveDownRight, MoveUpRight } from 'lucide-react'
import Image from 'next/image'

import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import logo from '@/6_shared/public/95708730.jpeg'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

type Props = {}

const HomePage = (props: Props) => {
  const { user } = useUser()
  return (
    <Container>
      <Typography.Title level={4}>Баланс</Typography.Title>

      {/* cart */}

      <div className={classes.cart}>
        <div className={classes.topInf}>
          <div className={classes.typogr}>
            <Typography.Title level={2} style={{ margin: 0, padding: 0 }}>
              450 342 ₽
            </Typography.Title>
            <Typography.Text style={{ lineHeight: 0 }}>
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
              style={{ margin: 0, padding: 0 }}
            >
              58 900 ₽ <MoveDownRight size={16} />
            </Typography.Title>
            <Typography.Text style={{ lineHeight: 0 }}>
              Расходы в январе
            </Typography.Text>
          </div>
          <div className={classes.down}>
            <Typography.Title
              className={classes.text}
              level={5}
              style={{ margin: 0, padding: 0 }}
            >
              117 900 ₽ <MoveUpRight size={16} />
            </Typography.Title>
            <Typography.Text style={{ lineHeight: 0 }}>
              Доходы в январе
            </Typography.Text>
          </div>
        </div>
      </div>
    </Container>
  )
}

export { HomePage }
