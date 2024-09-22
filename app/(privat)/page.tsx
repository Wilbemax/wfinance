'use client'

import { HomePage } from '@/2_page/home'
import withAuth from '@/5_entities/user/lib/provider/UserProvider'

const Home = () => {
  return <HomePage />
}

export default withAuth(Home)
