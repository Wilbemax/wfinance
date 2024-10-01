import axios from 'axios'

import { API_URL } from '@/6_shared/api/config'
import { getMonthName } from '@/6_shared/lib/utils/useGetMonth'

import type { BalanceResponse } from '../../model/type'

export const useFetchBalance = async (balanceId: string) => {
  try {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const res = await axios.get<BalanceResponse>(
      `${API_URL}/balance/${balanceId}`,
      {
        withCredentials: true,
      }
    )
    const incomes = res.data.incomes.filter(
      (item) => item.month === month && item.year === year
    )
    const expenses = res.data.expenses.filter(
      (item) => item.month === month && item.year === year
    )

    const monthInString = getMonthName(month)

    return {
      totalAmount: res.data.totalAmount,
      incomes,
      expenses,
      monthInString,
    }
  } catch (error) {
    console.error('Error fetching balance:', error)
  }
}
