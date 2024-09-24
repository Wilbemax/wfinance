'use client '

import { Typography } from 'antd'
import { MoveDownRight, MoveUpRight, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'

import { BalanceWidget } from '@/3_widgets/home/BalanceWidget'
import { BudgetWidgets } from '@/3_widgets/home/BudgetWidgets'
import { Balance } from '@/4_feature/Home/Balance'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import logo2 from '@/6_shared/public/_5ka.gif'
import logo from '@/6_shared/public/95708730.jpeg'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

type Props = {}

/// вынести в шадер

const HomePage = (props: Props) => {
  const { user } = useUser()
  console.log(user)

  return (
    <Container>
      <Typography.Title level={3}>Баланс</Typography.Title>

      {/* cart */}

      <BalanceWidget />
      {/* баджы про бюджет */}
      
      <BudgetWidgets />

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
