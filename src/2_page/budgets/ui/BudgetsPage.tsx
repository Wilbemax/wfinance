'use client'

import React, { useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Typography } from 'antd'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { UserBudgets } from '@/5_entities/user/model/type'
import { getDays } from '@/6_shared/lib/utils/getDays'
import { availableIcons } from '@/6_shared/lib/utils/iconPack'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

type Props = {}

const BudgetsPage = (props: Props) => {
  const dispatch = useDispatch()
  const { user } = useUser()

  const { daysPassed, daysLeft } = getDays()
  const [budgets, setBudgets] = useState<UserBudgets | null>(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
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

  return (
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
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        >
          {budgets &&
            budgets.budgets.map((budget) => (
              <SwiperSlide
                className={classes.budget}
                style={{ background: budget.color }}
              >
                <div className={classes.topInf}>
                  <div className={classes.name}>
                    <div className={classes.icon}>
                      {
                        availableIcons.find((icon) => icon.name === budget.icon)
                          ?.icon
                      }
                    </div>
                    <Typography.Title
                      level={4}
                      style={{ margin: 0, padding: 0 }}
                    >
                      {budget.name}
                    </Typography.Title>
                  </div>
                  <div className={classes.spend}>
                    <Typography.Text>
                      Потрачено:{' '}
                      {Math.round(
                        (budget.totalAmount / budget.maxExpenses) * 100
                      )}
                      %
                    </Typography.Text>
                  </div>
                </div>

                <Typography.Title level={5}>
                  Можно потратить:{' '}
                  {(budget.maxExpenses - budget.totalAmount).toLocaleString(
                    'RU-ru'
                  )}{' '}
                  ₽
                </Typography.Title>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Container>
  )
}
export { BudgetsPage }
