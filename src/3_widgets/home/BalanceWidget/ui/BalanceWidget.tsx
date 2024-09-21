'use client'

import React, { useEffect, useState } from 'react'

import { Balance } from '@/4_feature/Home/Balance'
import { useFetchBalance } from '@/5_entities/user/lib/hooks/useFetchBalance'
import { useUser } from '@/5_entities/user/lib/hooks/useUser'
import type { Expense, Income } from '@/5_entities/user/model/type'

const BalanceWidget = () => {
  const { user } = useUser()
  const [balanceData, setBalanceData] = useState<{
    totalAmount: number
    incomes: Income[]
    expenses: Expense[]
    monthInString: string
  } | null>(null)

  useEffect(() => {
    const fetchBalance = async () => {
      if (user && user.balance) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const data = await useFetchBalance(user.balance)
        if (data) {
          setBalanceData(data) // Устанавливаем только если данные не undefined
        } else {
          setBalanceData(null) // Или можно оставить null
        }
      }
    }

    fetchBalance()
  }, [user])

  // Проверка наличия данных
  if (!balanceData || !user) {
    return null // Можно отобразить индикатор загрузки
  }

  const {
    totalAmount = 0,
    incomes = [],
    expenses = [],
    monthInString = 'январь',
  } = balanceData

  return (
    <Balance
      userName={user.userName}
      image={user.image}
      balance={totalAmount}
      expenses={expenses.length ? expenses[0].expense : 0} // Или другое значение
      income={incomes.length ? incomes[0].income : 0} // Или другое значение
      month={monthInString}
    />
  )
}

export { BalanceWidget }
