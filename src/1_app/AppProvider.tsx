'use client'

import type { ReactNode } from 'react'
import React from 'react'
import { Provider } from 'react-redux'
import { AntdRegistry } from '@ant-design/nextjs-registry'

import ThemeProvider from '@/5_entities/theme/lib/ThemeProvider'

import { store } from './appStore'
import { LoadingProvider } from './LoadingProvider'
import NotificationProvider from './NotificationProvider'

type ProviderChildrenProps = {
  children: ReactNode
}
export const AppProvider = ({ children }: ProviderChildrenProps) => (
  <Provider store={store}>
    <AntdRegistry>
      <ThemeProvider>
        <NotificationProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </NotificationProvider>
      </ThemeProvider>
    </AntdRegistry>{' '}
  </Provider>
)
