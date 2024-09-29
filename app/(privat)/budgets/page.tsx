'use client'

import { BudgetsPage } from '@/2_page/budgets'
import withAuth from '@/5_entities/user/lib/provider/UserProvider'

type Props = {}

const Budgets = (props: Props) => {
  return <BudgetsPage />
}
export default withAuth(Budgets)
