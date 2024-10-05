// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-useless-escape */

'use client'

import React, { useState } from 'react'
import type { FormInstance } from 'antd'
import { Button, ColorPicker, Form, Input, InputNumber } from 'antd'
import type { AggregationColor } from 'antd/es/color-picker/color'
import { Ban } from 'lucide-react'

import { setCurrentTheme } from '@/5_entities/theme/model/slice'
import { availableIcons } from '@/6_shared/lib/utils/iconPack'
import { useAppSelector } from '@/6_shared/model/hooks'

import {
  newBudgetColorRule,
  newBudgetIconRule,
  newBudgetsMaxExpenseRule,
  newBudgetsSheetRule,
} from '../lib/newBudgetsSheet'

import { NewBudgetsSheetButton } from './NewBudgetsSheetButton'

import classes from './classes.module.scss'

type Props = {
  form: FormInstance<any>

  icon: string | null
  color: string

  // setIsIconPeckerOpen: (open: boolean) => void

  setColor: (hex: string) => void
  setMaxExpense: (val: number) => void
  setNewName: (val: string) => void
  setIcon: (val: string | null) => void

  openIconPecker: () => void
  setIsSheetOpen: (open: boolean) => void
  budgetsName: string[]

  onDismiss: () => void
  submit: () => void
}

const NewBudgetsForm = ({
  form,
  budgetsName,
  icon,
  color,

  openIconPecker,
  setColor,
  setMaxExpense,
  setNewName,

  onDismiss,
  submit,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = () => {
    try {
      setLoading(true)
      submit()
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  const currentTheme = useAppSelector(setCurrentTheme)

  const stringColor = (hex: AggregationColor) => hex.toHexString()

  const onColorChange = (hex: AggregationColor) => {
    setColor(stringColor(hex))
  }

  return (
    <div className={classes.wrapper}>
      <Form form={form}>
        <Form.Item
          label='Название бюджета'
          name='name'
          rules={newBudgetsSheetRule(budgetsName)}
        >
          <Input
            placeholder='Название бюджета'
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label='Максимальная трата в месяц'
          name='maxExpense'
          rules={newBudgetsMaxExpenseRule}
        >
          <InputNumber<number>
            style={{ width: '100%' }}
            defaultValue={0}
            formatter={(value) =>
              ` ${value}₽`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) =>
              value?.replace(/\₽\s?|(,*)/g, '') as unknown as number
            }
            onChange={(val) => setMaxExpense(val!)}
          />
        </Form.Item>

        <Form.Item
          name='icon'
          label='Выберите иконку'
          rules={newBudgetIconRule(icon)}
        >
          <div className={classes.iconWrap}>
            <div className={classes.icon}>
              {
                // Находим иконку в availableIcons
                availableIcons.find(
                  (availableIcon) => availableIcon.name === icon
                ) ? (
                  availableIcons.find(
                    (availableIcon) => availableIcon.name === icon
                  )?.icon
                ) : (
                  <Ban />
                )
              }
            </div>
            <Button
              type='primary'
              onClick={openIconPecker} // Открыть пикер иконок
              className={classes.button}
            >
              {/* Отобразить выбранную иконку или текст, если иконка не выбрана */}
              {icon ? 'Изменить иконку' : 'Выберете Иконку'}
            </Button>
          </div>
        </Form.Item>

        <Form.Item
          label='Выбеите цветовую схему'
          name='color'
          rules={newBudgetColorRule(color)}
        >
          <ColorPicker
            onChange={(col) => onColorChange(col)}
            defaultValue='#1677ff'
            size='large'
          />
        </Form.Item>

        <Form.Item noStyle>
          <NewBudgetsSheetButton
            loading={loading}
            onDismiss={onDismiss}
            submit={handleSubmit}
            currentTheme={currentTheme}
            form={form}
          />
        </Form.Item>
        <Form.Item noStyle />
      </Form>
    </div>
  )
}

export { NewBudgetsForm }
