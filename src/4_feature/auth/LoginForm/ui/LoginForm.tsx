import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Checkbox, Form, Input } from 'antd'
import type { FormInstance } from 'antd/es/form'
import Link from 'next/link'

import { ButtonForLogin } from '../../LoginButtons'
import { passwordRule } from '../../SignInForm/lib/FormItemRules'
import { loginRule } from '../lib/LoginFormItemReules'

import classes from './classes.module.scss'

type Props = {
  form: FormInstance<any>
  func: {
    setLogin: (event: string) => void
    setPassword: (event: string) => void
  }
  data: {
    login: string
    password: string
  }
}

const LoginForm = ({ form, func, data }: Props) => {
  return (
    <Form
      form={form}
      name='normal_login'
      className={classes.from}
      initialValues={{ remember: true }}
    >
      <Form.Item name='login' label='Логин' rules={loginRule}>
        <Input
          size='large'
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder=' Номер телефона / почта'
          onChange={(e) => func.setLogin(e.target.value)}
        />
      </Form.Item>
      <Form.Item name='password' label='Пароль' rules={passwordRule}>
        <Input.Password
          size='large'
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Пароль'
          onChange={(e) => func.setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item name='remember' valuePropName='checked' noStyle>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox defaultChecked>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>
      <Link className={classes.forgot} href='/switch-password'>
        Забыли пароль?
      </Link>

      <Form.Item name='submitButton' noStyle>
        <ButtonForLogin form={form} data={data} />
      </Form.Item>
      <Form.Item name='linkToReg' noStyle>
        <Link className={classes.forgot} href='/auth/sign-in'>
          {' '}
          Еще нет аккаунта?
        </Link>
      </Form.Item>
    </Form>
  )
}

export { LoginForm }
