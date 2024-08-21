import type { Rule } from 'antd/es/form'

export const loginRule: Rule[] = [
  {
    validator: (_, value: string) => {
      const prefixes = ['+7', '+8', '7', '8', '+']

      if (prefixes.some((prefix) => value.startsWith(prefix))) {
        return Promise.reject(
          new Error('В данный момент вход по телефону недоступен')
        )
      }
      return Promise.resolve()
    },
    warningOnly: true,
  },
  {
    type: 'email',
    message: 'Вы ввели не коректную почту',
  },
  {
    required: true,
    message: 'Пожалуйста введите почту',
  },
]

export const passwordRule: Rule[] = [
  {
    validator: (_, value: string | undefined) => {
      if (value?.trim() === '' || value === undefined) {
        return Promise.reject(new Error('Введите пожалуйста пароль!'))
      }
      return Promise.resolve()
    },
  },
]
