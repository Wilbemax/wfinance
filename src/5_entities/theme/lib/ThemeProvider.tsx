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
      console.log(storedTheme, currentTheme)

      // Проверяем, нужно ли менять тему
      if (storedTheme && storedTheme !== currentTheme) {
        localStorage.setItem('theme', storedTheme)
      } else if (!storedTheme) {
        // Если темы нет в localStorage, используем системную тему
        const systemPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
        const systemTheme = systemPrefersDark ? 'dark' : 'light'
        console.log(systemTheme);

        // Проверяем, нужно ли обновлять тему
        if (systemTheme !== currentTheme) {
          dispatch(changeTheme(systemTheme))
        }
      }
    }
  }, [currentTheme, dispatch])

  // Избегаем ненужных обновлений атрибутов и localStorage
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // Устанавливаем атрибут data-theme только если он действительно изменился
      const currentHtmlTheme =
        document.documentElement.getAttribute('data-theme')
      if (currentHtmlTheme !== currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme)
      }
      localStorage.setItem('theme', currentTheme)
    }
  }, [currentTheme])

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
