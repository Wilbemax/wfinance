'use client'

import type { ChangeEvent } from 'react'
import { useState } from 'react'
import { Form, Input } from 'antd'

import { SwitchButton } from '../../SwitchButton'
import { passwordConfirmRule, passwordRule } from '../lib/FormItemRules'

import classes from './ThirdStepForm.module.scss'

const ThirdStepForm = () => {
  const [password, setPassword] = useState<string>('')
  const [passwordStatus, setPasswordStatus] = useState<
    '' | 'success' | 'warning' | 'error' | 'validating' | undefined
  >('')
  const [form] = Form.useForm()

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
  return (
    <div className={classes.wrapper}>
      <Form name='switch-password' form={form}>
        <Form.Item
          name='password'
          label='Введите пароль'
          hasFeedback
          validateStatus={passwordStatus}
          rules={passwordRule}
        >
          <Input.Password
            onChange={handlePasswordChange}
            value={password}
            placeholder='Пароль'
          />
        </Form.Item>

        <Form.Item
          name='passwordConfirm'
          label='Подтвердите пароль'
          hasFeedback
          dependencies={['password']}
          rules={passwordConfirmRule}
        >
          <Input.Password placeholder='Подтвердить пароль' />
        </Form.Item>
      </Form>
      <SwitchButton form={form} password={password} />
    </div>
  )
}

export { ThirdStepForm }
