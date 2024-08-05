'use client'

import { type ReactNode, useEffect, useState } from 'react'

import { LoadingPage } from '@/2_page/servisePage/LoadingPage'
import { useAppState } from '@/5_entities/app/lib/useAppState'

type LoadingChildrenProps = {
  children: ReactNode
}

export const LoadingProvider = ({ children }: LoadingChildrenProps) => {
  const { loadingPage } = useAppState()

  const [showLoading, setShowLoading] = useState<boolean>(false)

  useEffect(() => {
    if (loadingPage) {
      setShowLoading(true)
    } else {
      setShowLoading(false)
    }
  }, [loadingPage])

  return (
    <>
      {showLoading && <LoadingPage />}
      {children}
    </>
  )
}
