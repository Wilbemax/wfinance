'use client'

import React, { useEffect, useState } from 'react'

import { NewBudgetSheet } from '@/3_widgets/budget/NewBudgetSheet'
import { Budgets } from '@/4_feature/Home/Budgets'
import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { UserBudgets } from '@/5_entities/user/model/type'

import 'react-spring-bottom-sheet/dist/style.css'

const BudgetWidgets = () => {
  const { user } = useUser()
  const [budgets, setBudgets] = useState<UserBudgets | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)
  useEffect(() => {
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

  if (!budgets) {
    return null
  }

  return (
    <>
      <Budgets budgets={budgets} setIsSheetOpen={setIsSheetOpen} />
      <NewBudgetSheet
        budgets={budgets}
        setIsSheetOpen={setIsSheetOpen}
        isSheetOpen={isSheetOpen}
        setBudgets={setBudgets}
      />
    </>
  )
}

export { BudgetWidgets }
