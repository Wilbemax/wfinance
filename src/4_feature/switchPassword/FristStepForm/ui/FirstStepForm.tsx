'use client'

import { useState } from 'react'
import { Form, Input } from 'antd'

import { SwitchButton } from '../../SwitchButton'
import { ForgotEmailRule } from '../lib/ForgotFormRule'

import classes from './ForgotForm.module.scss'

const FirstStepForm = () => {
  const [email, setEmail] = useState<string>('')
  const [form] = Form.useForm()

  return (
    <Form form={form} name='forgot-password' className={classes.input}>
      <Form.Item name='email' label='Ваша почта' rules={ForgotEmailRule}>
        <Input
          variant='outlined'
          placeholder='Ваша почта'
          size='large'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <div className={classes.button}>
        <SwitchButton form={form} email={email} />
      </div>
    </Form>
  )
}

export { FirstStepForm }
