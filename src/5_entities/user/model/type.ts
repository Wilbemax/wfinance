import type { UserI } from '@/6_shared/api/type'

export interface UserInitialState {
  refreshToke: string | undefined
  accessToken: string | null
  userLoading: boolean
  user: UserI | null
}

export interface Expense {
  year: number
  month: number
  expense: number
  _id: string
}

export interface Income {
  year: number
  month: number
  income: number
  _id: string
}

export interface BalanceResponse {
  _id: string
  totalAmount: number
  expenses: Expense[]
  incomes: Income[]
  __v: number
}
