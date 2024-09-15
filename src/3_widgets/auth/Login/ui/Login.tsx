'use client'

import { useState } from 'react'
import { Form } from 'antd'

import { LoginForm } from '@/4_feature/auth/LoginForm'

const LoginFormWidget = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const data = {
    login,
    password,
  }

  const [form] = Form.useForm()
  return <LoginForm form={form} data={data} func={{ setLogin, setPassword }} />
}
export { LoginFormWidget }
