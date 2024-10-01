import React from 'react'
import { Progress, Typography } from 'antd'

import type { BudgetItem } from '@/5_entities/user/model/type'
import { getDays } from '@/6_shared/lib/utils/getDays'
import { getRoundedPercent } from '@/6_shared/lib/utils/getRoundedPercent'
import { availableIcons } from '@/6_shared/lib/utils/iconPack'
import { getMonthNameDefault } from '@/6_shared/lib/utils/useGetMonthDefault'

import classes from './classes.module.scss'

type Props = { contentDrawer: BudgetItem }

const BudgetDrawer = ({ contentDrawer }: Props) => {
  const entryMonth: number = new Date().getMonth() + 1
  const entryYear = new Date().getFullYear()
  const thisPerMonth = contentDrawer.pereMonth.find(
    (month) => month.month === entryMonth && month.year === entryYear
  )

  const { daysLeft, daysPassed } = getDays()
  console.log(daysLeft + daysPassed)

  return (
    <>
      <div className={classes.name}>
        <div
          className={classes.icon}
          style={{ background: contentDrawer.color }}
        >
          {
            availableIcons.find((icon) => icon.name === contentDrawer.icon)
              ?.icon
          }
        </div>
        <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
          {contentDrawer.name}
        </Typography.Title>
      </div>
      <div
        className={classes.budget}
        style={{ background: contentDrawer.color }}
      >
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
                ? (thisPerMonth.totalAmount / daysLeft).toLocaleString('RU-ru')
                : '0'}
              ₽
            </Typography.Text>
            <Typography.Text> / день</Typography.Text>
          </div>
        </div>
        <div className={classes.bottomInf}>
          <div className={classes.barInf}>
            <Typography.Text style={{ margin: 0, padding: 0, lineHeight: 1 }}>
              {getMonthNameDefault(entryMonth)}
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
    </>
  )
}

export { BudgetDrawer }
