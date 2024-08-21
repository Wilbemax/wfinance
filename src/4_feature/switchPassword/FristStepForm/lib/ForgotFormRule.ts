import type { Rule } from 'antd/es/form'

export const ForgotEmailRule: Rule[] = [
  {
    type: 'email',
    message: 'Это не очень похоже на почту',
  },
  {
    required: true,
    message: 'Введите пожалуйста почту',
  },
]
