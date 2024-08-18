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
  colorBgBase: '#141414',
  componentBackground: '#1f1f1f',
  headingColor: '#fff',
  textColor: '#fff',
  textColorSecondary: '#b3b3b3',
  iconColor: '#fff',
  buttonBg: '#333',
  buttonColor: '#fff',
  modalMaskBg: 'rgba(0, 0, 0, 0.65)',
  menuBg: '#1f1f1f',
  menuColor: '#fff',
  menuItemActiveBg: '#333',
  menuItemSelectedBg: '#444',
  cardBg: '#1f1f1f',
  cardColor: '#fff',
  cardHeadColor: '#fff',
  tableBg: '#1f1f1f',
  tableColor: '#fff',
  tableHeaderBg: '#333',
  tableHeaderColor: '#fff',
  tableStripedBg: '#2a2a2a',
  tableRowHoverBg: '#3a3a3a',
  tableSelectedRowBg: '#444',
  tableSelectedRowHoverBg: '#555',
  colorBorderFocus: '#a0cfff',
  colorShadowFocus: '0 0 0 2px rgba(24, 144, 255, 0.2)',
  colorBorderHover: '#7eb9f7',
  colorText: '#fff',
  colorBgContainer: '#1f1f1f',
  colorBgContainerFocus: '#1f1f1f',
  colorBgContainerHover: '#2a2a2a',
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
