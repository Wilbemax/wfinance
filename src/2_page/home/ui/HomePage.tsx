'use client '

import { Typography } from 'antd'
import { MoveDownRight, MoveUpRight, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'

import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import logo2 from '@/6_shared/public/_5ka.gif'
import logo from '@/6_shared/public/95708730.jpeg'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'
import { Balance } from '@/4_feature/Home/Balance'
import { BalanceWidget } from '@/3_widgets/home/BalanceWidget'

type Props = {}

///вынести в шадер
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
  console.log(user);

  const dark = darkenColor('#5ddc88', 20)
  return (
    <Container>
      <Typography.Title level={3}>Баланс</Typography.Title>

      {/* cart */}

      <BalanceWidget />
      {/* баджы про бюджет */}

      <Typography.Title level={5}>Бюджеты</Typography.Title>
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

      {/* лист покупок по дням  */}
      <div className={classes.list}>
        <div className={classes.date}>
          <Typography.Title
            level={5}
            style={{ margin: 0, padding: 0, textWrap: 'nowrap' }}
          >
            14 января, понедельник
          </Typography.Title>
          <div className={classes.border} />
        </div>
        <Container>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                3 493 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
          <div className={classes.listItem}>
            <div className={classes.shop}>
              <Image
                className={classes.shopLogo}
                src={logo2}
                alt='logo'
                width={100}
                height={100}
              />
              <div className={classes.shopInfo}>
                <div>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, lineHeight: 0.9 }}
                  >
                    Пятерочка
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text
                    style={{ color: '#a2a1a4', lineHeight: 0.9 }}
                  >
                    Продукты{' '}
                  </Typography.Text>
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <Typography.Title level={5} style={{ margin: 0, padding: 0 }}>
                4 233 ₽{' '}
              </Typography.Title>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  )
}

export { HomePage }
