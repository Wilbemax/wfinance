'use client'

import { ReactNode, useEffect } from 'react'
import { ThemeType } from '../model/type'
import { useAppDispatch, useAppSelector } from '@/6_shared/model/hooks'
import { changeTheme, setCurrentTheme } from '../model/slice'
import { ConfigProvider } from 'antd'

type ThemeProviderProps = {
  children: ReactNode
  theme?: ThemeType
}
//настройки для темной темы
const darkAntdTheme = {
  colorPrimary: 'green',
  colorTextBase: 'red',
  colorTextLightSolid: 'red',
  colorBgBase: '#333',
  colorBorder: 'red',
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const currentTheme = useAppSelector(setCurrentTheme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (theme && theme !== currentTheme) {
      dispatch(changeTheme(theme))
      return
    }
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme, dispatch, theme])
  return (
    <ConfigProvider
      theme={{
        token: currentTheme === 'dark' ? darkAntdTheme : {},
      }}
    >
      {children}
    </ConfigProvider>
  )
}
