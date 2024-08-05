'use client'

import type { ReactNode } from 'react'
import { useLayoutEffect } from 'react'
import { ConfigProvider } from 'antd'

import { useAppDispatch, useAppSelector } from '@/6_shared/model/hooks'

import { changeTheme, setCurrentTheme } from '../model/slice'
import type { ThemeType } from '../model/type'

type ThemeProviderProps = {
  children: ReactNode
  theme?: ThemeType
}

const darkAntdTheme = {
  colorTextBase: '#fff',
  colorTextLightSolid: '#fff',
  colorBorder: '#cfecfa',
}

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const currentTheme = useAppSelector(setCurrentTheme)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme && theme !== currentTheme) {
        dispatch(changeTheme(theme))
      }
      document.documentElement.setAttribute('data-theme', currentTheme)
    }
  }, [currentTheme, dispatch, theme])

  return (
    <ConfigProvider
      theme={{ token: currentTheme === 'dark' ? darkAntdTheme : {} }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider
