import React from 'react'
import { Typography } from 'antd'
import { Plus } from 'lucide-react'

import type { PereMonth, UserBudgets } from '@/5_entities/user/model/type'
import { darkenColor } from '@/6_shared/lib/utils/darkenColor'
import { getRoundedPercent } from '@/6_shared/lib/utils/getRoundedPercent'
import { availableIcons } from '@/6_shared/lib/utils/iconPack'

import classes from './classes.module.scss'

type Props = {
  budgets: UserBudgets
  setIsSheetOpen: (arg0: boolean) => void
}

const Budgets = ({ budgets, setIsSheetOpen }: Props) => {
  return (
    <>
      <Typography.Title level={5}>Бюджеты</Typography.Title>
      <div className={classes.wrapper}>
        {budgets.budgets.map((budget) => {
          const data: PereMonth | undefined = budget.pereMonth.find(
            (item) =>
              item.month === new Date().getMonth() + 1 &&
              item.year === new Date().getFullYear()
          )
          if (!data) {
            return null
          }

          const dark = darkenColor(budget.color, 20)
          const perCent =
            100 - getRoundedPercent(data.totalAmount, data.maxExpense)

          return (
            <div className={classes.budgetWrapper} key={budget.name}>
              {/* Блок, который изменяет высоту в зависимости от процента */}
              <div
                className={classes.perCent}
                style={{
                  background: 'rgba(250, 250, 250, 0.4)',
                  height: `${perCent}%`,
                }}
              />

              {/* Основной блок для информации */}
              <div
                className={classes.budget}
                style={{ background: `${budget.color}` }}
              >
                <div className={classes.icon} style={{ background: dark }}>
                  {
                    availableIcons.find(
                      (availableIcon) => availableIcon.name === budget.icon
                    )?.icon
                  }
                </div>
                <div className={classes.text}>
                  <Typography.Title
                    level={5}
                    style={{ margin: 0, padding: 0, zIndex: 23, color: '#fff' }}
                  >
                    {data.totalAmount.toLocaleString('RU-ru')} ₽
                  </Typography.Title>

                  <Typography.Text style={{ lineHeight: 0, color: '#fff' }}>
                    {budget.name}
                  </Typography.Text>
                </div>
              </div>
            </div>
          )
        })}
        <button
          type='button'
          onClick={() => setIsSheetOpen(true)}
          className={classes.budgetWrapper}
        >
          {/* Основной блок для информации */}
          <div className={classes.cart}>
            <div className={classes.addIcon}>
              <Plus color='#fff' size={32} />
            </div>
          </div>
        </button>
      </div>
    </>
  )
}

export { Budgets }
