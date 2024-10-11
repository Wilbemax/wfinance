'use client'

// TODO made it no client component

import { BudgetsPage } from '@/2_page/budgets'
import withAuth from '@/5_entities/user/lib/provider/UserProvider'

const Budgets = () => {
  return <BudgetsPage />
}
export default withAuth(Budgets)
