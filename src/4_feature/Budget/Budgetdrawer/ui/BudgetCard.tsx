import React from 'react'
import { Progress, Typography } from 'antd'

import type { BudgetItem, PereMonth } from '@/5_entities/user/model/type'
import { getDays } from '@/6_shared/lib/utils/getDays'
import { getRoundedPercent } from '@/6_shared/lib/utils/getRoundedPercent'
import { getMonthNameDefault } from '@/6_shared/lib/utils/useGetMonthDefault'

import classes from './classes.module.scss'

type Props = {
  contentDrawer: BudgetItem
  thisPerMonth: PereMonth
}

const BudgetCard = ({ contentDrawer, thisPerMonth }: Props) => {
  const { daysLeft, daysPassed } = getDays()

  return (
    <div className={classes.budget} style={{ background: contentDrawer.color }}>
      <div className={classes.topInf}>
        <div className={classes.amount}>
          <Typography.Title
            level={3}
            style={{ margin: 0, padding: 0, lineHeight: 1 }}
          >
            {thisPerMonth
              ? (
                  thisPerMonth.maxExpense - thisPerMonth.totalAmount
                ).toLocaleString('RU-ru')
              : contentDrawer.maxExpenses.toLocaleString('RU-ru')}{' '}
            ₽
          </Typography.Title>
          <Typography.Text>
            Осталось из{' '}
            {thisPerMonth
              ? thisPerMonth.maxExpense.toLocaleString('RU-ru')
              : contentDrawer.maxExpenses.toLocaleString('RU-ru')}
            ₽
          </Typography.Text>
        </div>
        <div className={classes.inDay}>
          <Typography.Text style={{ fontWeight: 500 }}>
            {thisPerMonth && daysLeft !== 0
              ? Math.round(thisPerMonth.totalAmount / daysLeft).toLocaleString(
                  'RU-ru'
                )
              : '0'}
            ₽
          </Typography.Text>
          <Typography.Text> / день</Typography.Text>
        </div>
      </div>
      <div className={classes.bottomInf}>
        <div className={classes.barInf}>
          <Typography.Text style={{ margin: 0, padding: 0, lineHeight: 1 }}>
            {getMonthNameDefault(thisPerMonth.month)}
          </Typography.Text>
          <div>
            <Typography.Text style={{ margin: 0, padding: 0, lineHeight: 1 }}>
              еще
            </Typography.Text>{' '}
            <Typography.Text
              strong
              style={{ margin: 0, padding: 0, lineHeight: 1 }}
            >
              {daysLeft}
            </Typography.Text>
            <Typography.Text style={{ margin: 0, padding: 0, lineHeight: 1 }}>
              {' '}
              дней
            </Typography.Text>
          </div>
        </div>
        <Progress
          strokeColor='#fff'
          percent={getRoundedPercent(daysPassed, daysLeft + daysPassed)}
          showInfo={false}
          style={{ margin: 0, padding: 0 }}
        />
      </div>
    </div>
  )
}
export { BudgetCard }
