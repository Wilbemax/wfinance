import React from 'react'
import { Typography } from 'antd'

import { BudgetCard } from '@/4_feature/Budget/Budgetdrawer'
import type { BudgetItem } from '@/5_entities/user/model/type'
import { availableIcons } from '@/6_shared/lib/utils/iconPack'

import BudgetStatistic from './BugetsStatistic'

import classes from './classes.module.scss'

type Props = { contentDrawer: BudgetItem }

const BudgetDrawer = ({ contentDrawer }: Props) => {
  const entryMonth: number = new Date().getMonth() + 1
  const entryYear = new Date().getFullYear()
  const thisPerMonth = contentDrawer.pereMonth.find(
    (month) => month.month === entryMonth && month.year === entryYear
  )

  return (
    <>
      <div className={classes.name}>
        <div
          className={classes.icon}
          style={{ background: contentDrawer.color, color: '#fff' }}
        >
          {
            availableIcons.find((icon) => icon.name === contentDrawer.icon)
              ?.icon
          }
        </div>
        <Typography.Title
          level={4}
          style={{ margin: 0, padding: 0, color: '#fff' }}
        >
          {contentDrawer.name}
        </Typography.Title>
      </div>
      {thisPerMonth && (
        <BudgetCard contentDrawer={contentDrawer} thisPerMonth={thisPerMonth} />
      )}
    </>
  )
}

export { BudgetDrawer }
