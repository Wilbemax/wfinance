import React from 'react'
import { Progress, Typography } from 'antd'
import { SwiperSlide } from 'swiper/react'

import type { BudgetItem } from '@/5_entities/user/model/type'
import { getRoundedPercent } from '@/6_shared/lib/utils/getRoundedPercent'
import { availableIcons } from '@/6_shared/lib/utils/iconPack'

import classes from './classes.module.scss'

type Props = {
  budget: BudgetItem
}

const BudgetSwiper = ({ budget }: Props) => {
  const perMonth = budget.pereMonth.find(
    (item) =>
      item.month === new Date().getMonth() + 1 &&
      item.year === new Date().getFullYear()
  )
  if (!perMonth) return null
  const budgetPercent = getRoundedPercent(
    perMonth.totalAmount,
    perMonth.maxExpense
  )
  console.log('budgetPercent', budgetPercent);
  
  return (
    <>
      <div className={classes.left}>
        <div className={classes.topInf}>
          <div className={classes.name}>
            <div className={classes.icon}>
              {availableIcons.find((icon) => icon.name === budget.icon)?.icon}
            </div>
            <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
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
          percent={budgetPercent}
          size={100}
          // strokeColor={colorBar}
          status={budgetPercent >= 100 ? 'exception' : 'normal'}
        />
      </div>
    </>
  )
}
export { BudgetSwiper }
