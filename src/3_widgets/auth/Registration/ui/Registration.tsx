'use client'

import type { ChangeEvent } from 'react'
import React, { useState } from 'react'
import { Form } from 'antd'

import { SignInForm } from '@/4_feature/auth/SignInForm/ui/SignInForm'

const FormWidget = () => {
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordStatus, setPasswordStatus] = useState<
    '' | 'success' | 'warning' | 'error' | 'validating'
  >('')

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([])

  const data = {
    userName,
    email,
    phone,
    password,
  }

  // баг с бесконечным комплитом строки
  const onEmailChange = (value: string) => {
    console.log(value.endsWith('@'))
    const domain = ['@gmail.com', '@mail.ru', '@yandex.ru']

    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(domain.map((domain) => `${value}${domain}`))
    }
  }

  const emailOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }))
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setPassword(value)

    if (
      !/^[a-zA-Z0-9]+$/.test(value) ||
      value.length < 8 ||
      !/\d/.test(value) ||
      !/[a-z]/.test(value) ||
      !/[A-Z]/.test(value)
    ) {
      setPasswordStatus('warning')
    } else {
      setPasswordStatus('success')
    }
  }

  const [form] = Form.useForm()

  return (
    <SignInForm
      form={form}
      passwordStatus={passwordStatus}
      value={data}
      emailOptions={emailOptions}
      func={{
        onEmailChange,
        setEmail,
        setUserName,
        setPhone,
        handlePasswordChange,
      }}
    />
  )
}

export { FormWidget }
