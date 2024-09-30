'use client'

import type { Dispatch, SetStateAction } from 'react'
import React, { useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { ProgressProps } from 'antd'
import { Button, Drawer, Progress, Typography } from 'antd'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { BudgetItem, UserBudgets } from '@/5_entities/user/model/type'
import { getDays } from '@/6_shared/lib/utils/getDays'
import { availableIcons } from '@/6_shared/lib/utils/iconPack'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

type Props = {}

type CloseButtonProps = {
  setDrawerClose: Dispatch<SetStateAction<string | false>>
}

export const CloseButton = ({
  setDrawerClose,
}: CloseButtonProps): JSX.Element => (
  <Button
    type='primary'
    size='large'
    style={{ width: '100%', margin: '1rem 0' }}
    onClick={() => setDrawerClose(false)}
  >
    Закрыть
  </Button>
)

const BudgetsPage = (props: Props) => {
  const dispatch = useDispatch()
  const { user } = useUser()
  const [openDrawer, setOpenDrawer] = useState<string | false>(false)

  const { daysPassed, daysLeft } = getDays()
  const [budgets, setBudgets] = useState<UserBudgets | null>(null)

  const contentDrawer: BudgetItem | undefined = openDrawer
    ? budgets?.budgets.find((budget) => budget.name === openDrawer)
    : undefined
  // const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  useLayoutEffect(() => {
    const fetchBudgets = async () => {
      if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const res = await useFetchBudgets(user.budgets)
        if (res) {
          setBudgets(res)
        } else {
          setBudgets(null)
        }
      }
    }
    fetchBudgets()
  }, [user])
  console.log(daysLeft, daysPassed)

  const colorBar: ProgressProps['strokeColor'] = {
    '0%': '#01c850',
    '50%': '#ffbb33',
    '100%': '#fe4443',
  }

  const onClose = () => {
    setOpenDrawer(false)
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Container>
        <Typography.Title level={3} style={{ margin: 0, padding: 0 }}>
          Бюджеты
        </Typography.Title>
        <div className={classes.swiper}>
          <Swiper
            effect='cards'
            grabCursor
            modules={[EffectCards]}
            style={{ margin: 0, padding: 0 }}
            // onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
          >
            {budgets &&
              budgets.budgets.map((budget) => (
                <SwiperSlide
                  onClick={() => setOpenDrawer(budget.name)}
                  className={classes.budget}
                  style={{ background: budget.color }}
                >
                  <div className={classes.left}>
                    <div className={classes.topInf}>
                      <div className={classes.name}>
                        <div className={classes.icon}>
                          {
                            availableIcons.find(
                              (icon) => icon.name === budget.icon
                            )?.icon
                          }
                        </div>
                        <Typography.Title
                          level={4}
                          style={{ margin: 0, padding: 0 }}
                        >
                          {budget.name}
                        </Typography.Title>
                      </div>
                    </div>

                    <Typography.Text>
                      {budget.maxExpenses - budget.totalAmount < 0
                        ? `Лимит уже превышен`
                        : `Можно потратить: ${(budget.maxExpenses - budget.totalAmount).toLocaleString('RU-ru')} ₽`}
                    </Typography.Text>
                  </div>
                  <div className={classes.right}>
                    <Progress
                      type='dashboard'
                      percent={Math.round(
                        (budget.totalAmount / budget.maxExpenses) * 100
                      )}
                      size={100}
                      // strokeColor={colorBar}
                      status={
                        Math.round(
                          (budget.totalAmount / budget.maxExpenses) * 100
                        ) >= 100
                          ? 'exception'
                          : 'normal'
                      }
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>

      <Drawer
        title='Подробная информация'
        footer={<CloseButton setDrawerClose={setOpenDrawer} />}
        closable={false}
        open={Boolean(openDrawer)}
      >
        <Typography.Title level={3} style={{ margin: 0, padding: 0 }}>
          {contentDrawer?.name}
        </Typography.Title>
      </Drawer>
    </div>
  )
}
export { BudgetsPage }
