'use client'

// я не знаю куда его впихнуть
import type { ReactNode } from 'react'

import { LoadingPage } from '@/2_page/servisePage/LoadingPage'
import { useAppState } from '@/5_entities/app/lib/useAppState'

type LoadingChildrenProps = {
  children: ReactNode
}

export const LoadingProvider = ({ children }: LoadingChildrenProps) => {
  const { loadingPage } = useAppState()

  if (loadingPage) {
    return <LoadingPage />
  }
  return <div>{children}</div>
}
