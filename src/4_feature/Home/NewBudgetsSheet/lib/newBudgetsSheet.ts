import type { Rule } from 'antd/es/form'

import { determineColorShade } from '@/6_shared/lib/utils/getHueName'

export const newBudgetsSheetRule = (budgetsName: string[] = []): Rule[] => [
  {
    required: true,
    message: 'Это поле обязательно',
  },
  {
    validator(_, value: string) {
      const isName = budgetsName.includes(value?.toLowerCase())
      if (isName) {
        return Promise.reject(new Error('Такой бюджет уже существует!'))
      }
      return Promise.resolve()
    },
  },
]
export const newBudgetsMaxExpenseRule: Rule[] = [
  {
    required: true,
    message: 'Это поле обязательно',
  },
  {
    validator(_, value: string) {
      if (Number(value) <= 0) {
        return Promise.reject(new Error('Траты не могут быть ниже нуля'))
      }
      return Promise.resolve()
    },
  },
]
export const newBudgetIconRule = (icon: string | null): Rule[] => [
  {
    validator() {
      if (!icon) {
        return Promise.reject(new Error('Иконка не выбрана'))
      }
      return Promise.resolve()
    },
  },
]

export const newBudgetColorRule = (color: string): Rule[] => [
  {
    validator() {
      switch (determineColorShade(color)) {
        case 'red':
          return Promise.reject(
            new Error('Красный цвет может скрыть интерфейс ')
          )
        case 'black':
          return Promise.reject(
            new Error('Черный цвет может скрыть интерфейс ')
          )
        case 'white':
          return Promise.reject(new Error('Белый цвет может скрыть интерфейс '))
        default:
          return Promise.resolve()
      }
    },
    warningOnly: true,
  },
]
