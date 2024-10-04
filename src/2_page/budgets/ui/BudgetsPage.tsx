'use client'

import type { Dispatch, SetStateAction } from 'react'
import React, { useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { ProgressProps } from 'antd'
import { Badge, Button, Drawer, Progress, Typography } from 'antd'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { BudgetDrawer } from '@/3_widgets/budget/BudgetDrawer'
import { BudgetStatistic } from '@/3_widgets/budget/BudgetDrawer/ui/BugetsStatistic'
import { BudgetSwiper } from '@/4_feature/Budget/BudgetsSwiper'
import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { BudgetItem, UserBudgets } from '@/5_entities/user/model/type'
import { getDays } from '@/6_shared/lib/utils/getDays'
import { getRoundedPercent } from '@/6_shared/lib/utils/getRoundedPercent'
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

  const data: (
    | {
        name: string
        percent: number
        color: string
      }
    | undefined
  )[] = budgets?.budgets.map((budget) => {
    const perMonth = budget.pereMonth.find(
      (item) =>
        item.month === new Date().getMonth() + 1 &&
        item.year === new Date().getFullYear()
    )

    if (perMonth) {
      return {
        name: budget.name,
        percent: getRoundedPercent(perMonth.totalAmount, perMonth.maxExpense),
        color: budget.color,
      }
    }
  })

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className={classes.bg} />
      <Container>
        <Typography.Title
          level={3}
          style={{ margin: 0, padding: 0, color: '#fff' }}
        >
          Бюджеты
        </Typography.Title>
        <div className={classes.statistic}>
          <div className={classes.names}>
            {data?.map((budget) => {
              if (budget) {
                return (
                  <Typography.Text
                    delete={budget.percent >= 100}
                    type={budget.percent >= 100 ? 'danger' : undefined}

                    style={{
                      display: 'flex',
                      fontSize: 15,
                      fontWeight: 400,
                      color: `${budget.percent >= 100 ? undefined : '#fff'}`,
                    }}
                    key={budget.name}
                  >
                    <Badge
                      size='default'
                      color={budget.color}
                      style={{ marginRight: 10 }}
                    />{' '}
                    {budget.name}
                  </Typography.Text>
                )
              }
              return null
            })}
          </div>
          <div>{budgets && <BudgetStatistic budget={budgets} />}</div>
        </div>
        <Typography.Title level={5} style={{ margin: '.5rem 0', padding: 0 }}>
          Посмотрите подробнее
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
                  key={budget.name}
                  onClick={() => setOpenDrawer(budget.name)}
                  className={classes.budget}
                  style={{ background: budget.color }}
                >
                  <BudgetSwiper budget={budget} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>

      <Drawer
        // title='Подробная информация'
        footer={<CloseButton setDrawerClose={setOpenDrawer} />}
        size='large'
        closable={false}
        open={Boolean(openDrawer)}
        style={{ background: '#23272e', padding: 0 }}
      >
        {contentDrawer && <BudgetDrawer contentDrawer={contentDrawer} />}
      </Drawer>
    </div>
  )
}
export { BudgetsPage }
