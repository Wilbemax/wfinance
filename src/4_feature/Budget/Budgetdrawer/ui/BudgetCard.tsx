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
          {thisPerMonth.maxExpense - thisPerMonth.totalAmount < 0 ? (
            <>
              <Typography.Title
                level={4}
                style={{ margin: 0, padding: 0, lineHeight: 1, color: '#fff' }}
              >
                Бюджет исчерпан
              </Typography.Title>
              <Typography.Text>Превышен на </Typography.Text>
              <Typography.Text type='danger'>
                <b>
                  {Math.abs(
                    thisPerMonth.maxExpense - thisPerMonth.totalAmount
                  ).toLocaleString('RU-ru')}{' '}
                  ₽
                </b>
              </Typography.Text>
            </>
          ) : (
            <>
              <Typography.Title
                level={3}
                style={{ margin: 0, padding: 0, lineHeight: 1, color: '#fff' }}
              >
                {thisPerMonth
                  ? (
                      thisPerMonth.maxExpense - thisPerMonth.totalAmount
                    ).toLocaleString('RU-ru')
                  : contentDrawer.maxExpenses.toLocaleString('RU-ru')}{' '}
                ₽
              </Typography.Title>
              <Typography.Text style={{ color: '#fff' }}>
                Осталось из{' '}
                {thisPerMonth
                  ? thisPerMonth.maxExpense.toLocaleString('RU-ru')
                  : contentDrawer.maxExpenses.toLocaleString('RU-ru')}
                ₽
              </Typography.Text>
            </>
          )}
        </div>
        <div className={classes.inDay}>
          <Typography.Text style={{ fontWeight: 500, color: '#fff' }}>
            {thisPerMonth && daysLeft !== 0
              ? Math.round(thisPerMonth.totalAmount / daysLeft).toLocaleString(
                  'RU-ru'
                )
              : '0'}
            ₽
          </Typography.Text>
          <Typography.Text style={{ color: '#fff' }}> / день</Typography.Text>
        </div>
      </div>
      <div className={classes.bottomInf}>
        <div className={classes.barInf}>
          <Typography.Text
            style={{ margin: 0, padding: 0, lineHeight: 1, color: '#fff' }}
          >
            {getMonthNameDefault(thisPerMonth.month)}
          </Typography.Text>
          <div>
            <Typography.Text
              style={{ margin: 0, padding: 0, lineHeight: 1, color: '#fff' }}
            >
              еще
            </Typography.Text>{' '}
            <Typography.Text
              strong
              style={{ margin: 0, padding: 0, lineHeight: 1, color: '#fff' }}
            >
              {daysLeft}
            </Typography.Text>
            <Typography.Text
              style={{ margin: 0, padding: 0, lineHeight: 1, color: '#fff' }}
            >
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
