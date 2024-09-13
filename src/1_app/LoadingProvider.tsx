'use client'

import { type ReactNode, useEffect, useState } from 'react'

import { LoadingPage } from '@/2_page/servisePage/LoadingPage'
import { useAppState } from '@/5_entities/app/lib/useAppState'

type LoadingChildrenProps = {
  children: ReactNode
}

export const LoadingProvider = ({ children }: LoadingChildrenProps) => {
  const { loadingPage } = useAppState()

  const [isLoading, setIsLoading] = useState<boolean>(loadingPage)

  useEffect(() => {
    setIsLoading(loadingPage)
  }, [loadingPage])

  if (isLoading) {
    return <LoadingPage />
  }

  return <>{children}</>
}
