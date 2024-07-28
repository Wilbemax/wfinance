'use client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from './appStore'
import ThemeProvider from '@/5_entities/theme/lib/ThemeProvider'

type providerChildrenProps = {
  children: ReactNode
}
export const AppProvider = ({ children }: providerChildrenProps) => (
  <Provider store={store}>
    <ThemeProvider>{children}</ThemeProvider>
  </Provider>
)
