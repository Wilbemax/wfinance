'use client'

import type { ReactNode } from 'react'
import { useLayoutEffect } from 'react'
import { ConfigProvider, theme } from 'antd'

import { useAppDispatch, useAppSelector } from '@/6_shared/model/hooks'

import { changeTheme } from '../model/slice'
import type { ThemeType } from '../model/type'

type ThemeProviderProps = {
  children: ReactNode
  themes?: ThemeType
}

const ThemeProvider = ({ children, themes }: ThemeProviderProps) => {
  const currentTheme = useAppSelector(
    (state) => state.theme.currentTheme
  ) as ThemeType
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as ThemeType

      if (storedTheme && storedTheme !== currentTheme) {
        dispatch(changeTheme(storedTheme))
      } else if (themes && themes !== currentTheme) {
        dispatch(changeTheme(themes))
      }

      document.documentElement.setAttribute('data-theme', currentTheme)
      localStorage.setItem('theme', currentTheme)
    }
  }, [currentTheme, dispatch, themes])

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'dark'
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider
