import axios from 'axios'

import { API_URL } from '@/6_shared/api/config'

import type { UserBudgets } from '../../model/type'

export const useFetchBudgets = async (budgetsId: string) => {
  try {
    const res = await axios.get<UserBudgets>(
      `${API_URL}/budgets/${budgetsId}`,
      {
        withCredentials: true,
      }
    )
    return res.data
  } catch (e) {
    console.error('Error fetching budgets', e)
  }
}
