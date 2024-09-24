import { useLayoutEffect, useState } from 'react'
import { Typography } from 'antd'
import { Plus, ShoppingBasket, SquarePlus } from 'lucide-react'
import Link from 'next/link'

import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { UserBudgets } from '@/5_entities/user/model/type'
import { darkenColor } from '@/6_shared/lib/utils/darkenColor'

import classes from './classes.module.scss'

type Props = {}

const BudgetWidgets = (props: Props) => {
  const { user } = useUser()
  const [budgets, setBudgets] = useState<UserBudgets | null>(null)

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
  console.log(budgets)

  if (!budgets) {
    return null
  }

  return (
    <>
      <Typography.Title level={5}>Бюджеты</Typography.Title>
      <div className={classes.wrapper}>
        {budgets.budgets.map((budget) => {
          const dark = darkenColor(budget.color, 20)
          const perCent = 100 - (budget.totalAmount / budget.maxExpenses) * 100

          return (
            <div className={classes.budgetWrapper}>
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
                  <ShoppingBasket color='#fff' size={20} />
                </div>
                <div>
                  <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
                    {budget.totalAmount}₽
                  </Typography.Title>
                  <Typography.Text style={{ lineHeight: 0 }}>
                    {budget.name}
                  </Typography.Text>
                </div>
              </div>
            </div>
          )
        })}
        <Link href='/budgets' className={classes.budgetWrapper}>
          {/* Основной блок для информации */}
          <div className={classes.budget} style={{ background: `#7f7f7f` }}>
            <div
              className={classes.icon}
              style={{ background: 'rgba(76, 76, 76, 0.5)' }}
            >
              <Plus color='#fff' size={20} />
            </div>
            <div>
              <Typography.Text style={{ lineHeight: 0 }}>
                Добавить новый
              </Typography.Text>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export { BudgetWidgets }
