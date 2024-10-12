'use client'

import type { ReactNode } from 'react'
import { useLayoutEffect, useState } from 'react'
import { ConfigProvider, theme } from 'antd'

import { useAppDispatch, useAppSelector } from '@/6_shared/model/hooks'

import { changeTheme } from '../model/slice'
import type { ThemeType } from '../model/type'

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [t, setT] = useState<'light' | 'dark'>('light') // Инициализация с начальным значением
  const currentTheme = useAppSelector(
    (state) => state.theme.currentTheme
  ) as ThemeType

  const dispatch = useAppDispatch()

  // Проверка и установка темы при монтировании компонента
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as ThemeType

      if (storedTheme && storedTheme !== currentTheme) {
        // Устанавливаем сохранённую тему
        dispatch(changeTheme(storedTheme))
      } else if (!storedTheme) {
        // Определяем системную тему, если темы нет в localStorage
        const systemPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
        const systemTheme = systemPrefersDark ? 'dark' : 'light'

        if (systemTheme !== currentTheme) {
          // Изменяем текущую тему на системную
          dispatch(changeTheme(systemTheme))
        }
      }
    }
  }, [currentTheme, dispatch])

  // Устанавливаем актуальную тему в localStorage и атрибут HTML
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const currentHtmlTheme =
        document.documentElement.getAttribute('data-theme')
      if (currentHtmlTheme !== currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme)
      }

      // Сохраняем тему в localStorage
      localStorage.setItem('theme', currentTheme)

      // Обновляем значение в t
      setT(currentTheme)
    }
  }, [currentTheme])

  return (
    <ConfigProvider
      theme={{
        algorithm: t === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#29abe2',
          colorError: '#e63946',
        },
        components: {
          Progress: {
            defaultColor: '#29abe2',
            colorError: '#e63946',
            circleTextColor: '#fff',
          },
          Drawer: {
            padding: 0,
            paddingLG: 0,
          },
          Segmented: {
            trackBg: t === 'dark' ? '#1d3557' : '#f5f5f5',
            itemSelectedBg: t === 'dark' ? '#457b9d' : '#fff',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider
