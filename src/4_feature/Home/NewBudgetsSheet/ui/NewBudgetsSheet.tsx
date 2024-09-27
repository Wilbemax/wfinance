'use client'

import React from 'react'
import { Button } from 'antd'

import { availableIcons } from '@/6_shared/lib/utils/iconPack'
import { IconPicker } from '@/6_shared/ui/iconPicker'

import classes from './classes.module.scss'

type Props = {
  isIconPeckerOpen: boolean
  setIsPeckerOpen: () => void
  closePecker: () => void
  icon: React.JSX.Element | null // Изменено, чтобы соответствовать логике выбранной иконки
}

const NewBudgetsSheet = ({
  isIconPeckerOpen,
  setIsPeckerOpen,
  closePecker,
  icon,
}: Props) => {
  return (
    <div className={classes.wrapper}>
      <Button
        type='primary'
        onClick={setIsPeckerOpen} // Открыть пикер иконок
        className={classes.button}
      >
        {/* Отобразить выбранную иконку или текст, если иконка не выбрана */}
        {icon || 'Выберете Иконку'}
      </Button>
    </div>
  )
}

export { NewBudgetsSheet }
