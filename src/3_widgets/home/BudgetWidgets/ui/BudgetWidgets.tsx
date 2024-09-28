'use client'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Form } from 'antd'
import axios from 'axios'

import { Budgets } from '@/4_feature/Home/Budgets'
import { NewBudgetsSheet, SheetHeader } from '@/4_feature/Home/NewBudgetsSheet'
import { setError } from '@/5_entities/app/model/slice'
import { useFetchBudgets } from '@/5_entities/user/lib/hooks/useFetchBudgets'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { UserBudgets } from '@/5_entities/user/model/type'
import $api from '@/6_shared/api'
import { IconPicker } from '@/6_shared/ui/iconPicker'

import 'react-spring-bottom-sheet/dist/style.css'

const BudgetWidgets = () => {
  const dispatch = useDispatch()
  const { user } = useUser()
  const [budgets, setBudgets] = useState<UserBudgets | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const [newName, setNewName] = useState<string>('')
  const [maxExpense, setMaxExpense] = useState<number>()
  const [icon, setIcon] = useState<string | null>(null)
  const [color, setColor] = useState<string>('#1677ff')

  const [open, setOpen] = useState(false)
  const [isIconPeckerOpen, setIsIconPeckerOpen] = useState<boolean>(false)

  const [form] = Form.useForm()

  const budgetsName = budgets?.budgets.map((budgets) =>
    budgets.name.toLowerCase()
  )

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

  const handleIconSelect = (selectedIcon: string) => {
    setIcon(selectedIcon) // Убедитесь, что здесь вы устанавливаете правильное значение
    form.setFieldsValue({ icon: selectedIcon }) // Обновление значения в форме
  }

  const onDismiss = () => {
    setNewName('')
    setMaxExpense(0)
    setColor('#1677ff')
    setOpen(false)
    setIcon(null)
  }

  if (!budgets) {
    return null
  }
  console.log(icon)

  const submit = async () => {
    try {
      setLoading(true)
      const budgetId = user?.budgets
      const res = await $api.post<UserBudgets>('/budgets', {
        budgetsId: budgetId,
        name: newName,
        maxExpenses: maxExpense,
        color,
        icon,
      })
      setBudgets({ budgets: res.data.budgets })
      onDismiss()
      setLoading(false)
    } catch (e) {
      onDismiss()
      dispatch(setError('Пожалуйста, попробуйте ещё раз, что-то пошло не так'))
    }
  }
  return (
    <>
      <Budgets budgets={budgets} setIsDrawerOpen={setOpen} />
      <BottomSheet
        open={open}
        onDismiss={() => onDismiss()}
        snapPoints={() => 570}
        header={<SheetHeader />}
      >
        <NewBudgetsSheet
          loading={loading}
          color={color}
          form={form}
          budgetsName={budgetsName}
          icon={icon}
          setColor={setColor}
          setNewName={setNewName}
          setMaxExpense={setMaxExpense}
          onDismiss={onDismiss}
          setIsPeckerOpen={openIconPecker}
          submit={submit}
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

export { BudgetWidgets }
