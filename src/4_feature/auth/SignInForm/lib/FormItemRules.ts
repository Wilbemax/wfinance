import type { Rule } from 'antd/es/form'

export const userNameRule = [
  {
    required: true,
    message: 'Пожалуйста не пропускайте этот шаг',
    whitespace: true,
  },
]
export const emailRule: Rule[] = [
  {
    type: 'email',
    message: 'Это не очень похоже на почту',
  },
  {
    required: true,
    message: 'Введите пожалуйста почту',
  },
]
export const phoneRule: Rule[] = [
  {
    required: true,
    message: 'Пожалуйста, введите номер телефона!',
  },
]

export const passwordRule: Rule[] = [
  {
    required: true,
    message: 'Введите пароль',
  },
  {
    validator: (_, value: string) => {
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return Promise.reject(
          new Error('Пароль может содержать только латинские буквы и цифры.')
        )
      }
      if (value.length < 8) {
        return Promise.reject(
          new Error('Пароль должен содержать не менее 8 символов.')
        )
      }

      if (!/\d/.test(value)) {
        return Promise.reject(
          new Error('Пароль должен содержать хотя бы одну цифру.')
        )
      }
      if (!/[a-z]/.test(value)) {
        return Promise.reject(
          new Error('Пароль должен содержать хотя бы одну строчную букву.')
        )
      }
      if (!/[A-Z]/.test(value)) {
        return Promise.reject(
          new Error('Пароль должен содержать хотя бы одну заглавную букву.')
        )
      }
      return Promise.resolve('')
    },
    warningOnly: true,
  },
]

export const passwordConfirmRule: Rule[] = [
  {
    required: true,
    message: 'Пожалйста напишите еще раз ваш пароль',
  },
  ({ getFieldValue }) => ({
    validator(_, value: string) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve()
      }
      return Promise.reject(new Error('Похоже, что пароли не совпадают'))
    },
  }),
]

export const agreementRule: Rule[] = [
  {
    validator: (_, value: boolean) =>
      value
        ? Promise.resolve()
        : Promise.reject(new Error('Соглашение должно быть принято')),
  },
]
