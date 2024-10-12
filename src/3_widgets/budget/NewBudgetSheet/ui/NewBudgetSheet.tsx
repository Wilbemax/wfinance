'use client'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BottomSheet } from 'react-spring-bottom-sheet'
import Form from 'antd/es/form'

import { NewBudgetsForm, SheetHeader } from '@/4_feature/Home/NewBudgetsSheet'
import { setError } from '@/5_entities/app/model/slice'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { UserBudgets } from '@/5_entities/user/model/type'
import $api from '@/6_shared/api'
import { IconPicker } from '@/6_shared/ui/iconPicker'

type Props = {
  isSheetOpen: boolean
  budgets: UserBudgets | null
  setIsSheetOpen: (isSheetOpen: boolean) => void
  setBudgets: (budgets: UserBudgets) => void
}

const NewBudgetSheet = ({
  isSheetOpen,
  budgets,
  setBudgets,
  setIsSheetOpen,
}: Props) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const { user } = useUser()

  const [newName, setNewName] = useState<string>('')
  const [maxExpense, setMaxExpense] = useState<number>()
  const [icon, setIcon] = useState<string | null>(null)
  const [color, setColor] = useState<string>('#1677ff')

  const [isIconPeckerOpen, setIsIconPeckerOpen] = useState<boolean>(false)

  const budgetsName = budgets?.budgets.map((budgets) =>
    budgets.name.toLowerCase()
  )

  const onDismiss = () => {
    form.resetFields()

    setNewName('')
    setMaxExpense(0)
    setColor('#1677ff')
    setIsSheetOpen(false)
    setIcon(null)
  }

  const submit = async () => {
    try {
      const budgetId = user?.budgets
      const res = await $api.post<UserBudgets>('/budgets', {
        budgetsId: budgetId,
        name: newName,
        maxExpenses: maxExpense,
        color,
        icon,
      })
      onDismiss()
      setBudgets({ budgets: res.data.budgets })
    } catch (e) {
      onDismiss()
      dispatch(setError('Пожалуйста, попробуйте ещё раз, что-то пошло не так'))
    }
  }

  const handleIconSelect = (selectedIcon: string) => {
    setIcon(selectedIcon)
    form.setFieldsValue({ icon: selectedIcon })
  }

  const openIconPecker = () => {
    if (isSheetOpen) {
      setIsSheetOpen(false)
      setIsIconPeckerOpen(true)
    }
  }
  const closeIconPecker = () => {
    if (isIconPeckerOpen) {
      setIsIconPeckerOpen(false)
      setIsSheetOpen(true)
    }
  }
  return (
    <>
      <BottomSheet
        open={isSheetOpen}
        onDismiss={() => onDismiss()}
        snapPoints={() => 570}
        header={<SheetHeader />}
      >
        <NewBudgetsForm
          openIconPecker={openIconPecker}
          setColor={setColor}
          setNewName={setNewName}
          setMaxExpense={setMaxExpense}
          setIcon={setIcon}
          form={form}
          setIsSheetOpen={setIsSheetOpen}
          onDismiss={onDismiss}
          submit={submit}
          icon={icon}
          color={color}
          budgetsName={budgetsName ?? []}
        />
      </BottomSheet>
      <IconPicker
        setIcon={handleIconSelect}
        onClose={closeIconPecker}
        open={isIconPeckerOpen}
      />
    </>
  )
}

export { NewBudgetSheet }
