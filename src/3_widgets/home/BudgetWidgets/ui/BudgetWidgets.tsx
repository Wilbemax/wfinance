'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Button } from 'antd'

import { Budgets } from '@/4_feature/Home/Budgets'
import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { UserBudgets } from '@/5_entities/user/model/type'

import 'react-spring-bottom-sheet/dist/style.css'

const BudgetWidgets = () => {
  const { user } = useUser()
  const [budgets, setBudgets] = useState<UserBudgets | null>(null)

  const [open, setOpen] = useState(false)

  function onDismiss() {
    setOpen(false)
  }
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

  if (!budgets) {
    return null
  }

  return (
    <>
      <Budgets budgets={budgets} setIsDrawerOpen={setOpen} />
      <BottomSheet
        open={open}
        onDismiss={() => onDismiss()}
        snapPoints={({ minHeight, maxHeight }) => maxHeight - minHeight}
      >
        <p>
          Using onDismiss lets users close the sheet by swiping it down, tapping
          on the backdrop or by hitting esc on their keyboard.
        </p>

        <div className='bg-gray-200 block rounded-md h-10 w-full my-10' />
        <p>The height adjustment is done automatically, it just works™!</p>
        <div className='bg-gray-200 block rounded-md h-10 w-full my-10' />

        <Button className='w-full' onClick={() => onDismiss()}>
          Dismiss
        </Button>
      </BottomSheet>
    </>
  )
}

export { BudgetWidgets }
