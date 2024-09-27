'use client'

import { useEffect, useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Button, Input, Typography } from 'antd'

import { Budgets } from '@/4_feature/Home/Budgets'
import { NewBudgetsSheet, SheetHeader } from '@/4_feature/Home/NewBudgetsSheet'
import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { UserBudgets } from '@/5_entities/user/model/type'
import { Container } from '@/6_shared/ui/continer'
import { IconPicker } from '@/6_shared/ui/iconPicker'

import 'react-spring-bottom-sheet/dist/style.css'

const BudgetWidgets = () => {
  const { user } = useUser()
  const [budgets, setBudgets] = useState<UserBudgets | null>(null)
  const [open, setOpen] = useState(false)
  const [isIconPeckerOpen, setIsIconPeckerOpen] = useState<boolean>(false)
  const [icon, setIcon] = useState<React.JSX.Element | null>(null)
  function onDismiss() {
    setOpen(false)
    setIcon(null)
  }

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

  const openIconPecker = () => {
    if (open) {
      setOpen(false)
      setIsIconPeckerOpen(true)
    }
  }
  const closeIconPecker = () => {
    if (isIconPeckerOpen) {
      setIsIconPeckerOpen(false)
      setOpen(true)
    }
  }

  if (!budgets) {
    return null
  }
  // debugger
  return (
    <>
      <Budgets budgets={budgets} setIsDrawerOpen={setOpen} />
      <BottomSheet
        open={open}
        onDismiss={() => onDismiss()}
        snapPoints={({ minHeight, maxHeight }) => maxHeight - minHeight}
        header={<SheetHeader />}
      >
        <NewBudgetsSheet
          icon={icon}
          setIsPeckerOpen={openIconPecker}
          closePecker={closeIconPecker}
          isIconPeckerOpen={isIconPeckerOpen}
        />
      </BottomSheet>
      <IconPicker
        setIcon={setIcon}
        onClose={closeIconPecker}
        open={isIconPeckerOpen}
      />
    </>
  )
}

export { BudgetWidgets }
