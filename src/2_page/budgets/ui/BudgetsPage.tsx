'use client'

import type { Dispatch, SetStateAction } from 'react'
import React, { useLayoutEffect, useState } from 'react'
import { Badge, Button, Drawer, Typography } from 'antd'
import { Plus } from 'lucide-react'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { BudgetDrawer } from '@/3_widgets/budget/BudgetDrawer'
import { BudgetStatistic } from '@/3_widgets/budget/BudgetDrawer/ui/BugetsStatistic'
import { NewBudgetSheet } from '@/3_widgets/budget/NewBudgetSheet'
import { BudgetSwiper } from '@/4_feature/Budget/BudgetsSwiper'
import type { ThemeType } from '@/5_entities/theme/model/type'
import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { BudgetItem, UserBudgets } from '@/5_entities/user/model/type'
import { getRoundedPercent } from '@/6_shared/lib/utils/getRoundedPercent'
import { useAppSelector } from '@/6_shared/model/hooks'
import { Container } from '@/6_shared/ui/continer'

import classes from './classes.module.scss'

// type Props = {}

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

const BudgetsPage = () => {
  // const dispatch = useDispatch()
  const { user } = useUser()
  const [openDrawer, setOpenDrawer] = useState<string | false>(false)
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)
  const currentTheme = useAppSelector(
    (state) => state.theme.currentTheme
  ) as ThemeType

  // const { daysPassed, daysLeft } = getDays()
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
    return null
  })

  return (
    <div style={{ overflowX: 'hidden', position: 'relative' }}>
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
      <div className={classes.float}>
        <Button
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
          }}
          type='primary'
          className={classes.floatButton}
          onClick={() => setIsSheetOpen(true)}
        >
          <Plus size={20} />
        </Button>
      </div>

      <NewBudgetSheet
        budgets={budgets}
        setIsSheetOpen={setIsSheetOpen}
        isSheetOpen={isSheetOpen}
        setBudgets={setBudgets}
      />

      <Drawer
        // title='Подробная информация'
        footer={<CloseButton setDrawerClose={setOpenDrawer} />}
        size='large'
        closable={false}
        open={Boolean(openDrawer)}
        className={classes.drawer}
        style={{
          background: `${currentTheme === 'dark' ? '#0b1524' : '#f1faee'}`,
          padding: 0,
        }}
      >
        {contentDrawer && <BudgetDrawer contentDrawer={contentDrawer} />}
      </Drawer>
    </div>
  )
}
export { BudgetsPage }
