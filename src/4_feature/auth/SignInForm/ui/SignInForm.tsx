import type { ChangeEvent } from 'react'
import React from 'react'
import type { FormInstance } from 'antd'
import { AutoComplete, Checkbox, Form, Input } from 'antd'
import type { DefaultOptionType } from 'antd/es/cascader'
import Link from 'next/link'

import { ButtonForSignIn } from '../../SigninButtons'
import {
  agreementRule,
  emailRule,
  passwordConfirmRule,
  passwordRule,
  phoneRule,
  userNameRule,
} from '../lib/FormItemRules'

import classes from './classes.module.css'

interface SignInFormProps {
  form: FormInstance<any>
  passwordStatus: '' | 'success' | 'warning' | 'error' | 'validating'
  value: {
    userName: string
    email: string
    phone: string
    password: string
  }
  emailOptions: DefaultOptionType[]
  func: {
    onEmailChange: (value: string) => void
    setEmail: (email: string) => void
    setUserName: (email: string) => void
    setPhone: (email: string) => void
    handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
  }
}

const SignInForm = ({
  form,
  passwordStatus,
  value,
  emailOptions,
  func,
}: SignInFormProps) => {
  return (
    <Form
      form={form}
      name='registration'
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name='userName'
        label='Ваше имя'
        tooltip='Ваше имя в приложении'
        rules={userNameRule}
      >
        <Input
          onChange={(e) => func.setUserName(e.target.value)}
          value={value.userName}
          placeholder='Имя'
        />
      </Form.Item>
      <Form.Item name='email' label='Ваша почта' rules={emailRule}>
        <AutoComplete
          options={emailOptions}
          onChange={func.onEmailChange}
          onSelect={(data: string) => func.setEmail(data)}
        >
          <Input
            value={value.email}
            type='email'
            onChange={(e) => func.setEmail(e.target.value)}
            placeholder='email@exemple.com'
          />
        </AutoComplete>
      </Form.Item>
      <Form.Item name='phone' label='Номер телефона' rules={phoneRule}>
        <Input
          value={value.phone}
          onChange={(e) => func.setPhone(e.target.value)}
          placeholder='+7 (999) 999 99-99'
        />
      </Form.Item>
      <Form.Item
        name='password'
        label='Введите пароль'
        hasFeedback
        validateStatus={passwordStatus}
        rules={passwordRule}
      >
        <Input.Password
          onChange={func.handlePasswordChange}
          value={value.password}
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
      <Form.Item name='agreement' valuePropName='checked' rules={agreementRule}>
        <Checkbox>
          Я прочитал(-а){' '}
          <a
            href='https://yandex.ru/legal/rules/'
            target='_blank'
            rel='noreferrer'
          >
            соглашение и правила
          </a>
        </Checkbox>
      </Form.Item>
      <Form.Item name='button' noStyle>
        <ButtonForSignIn form={form} data={value} />
      </Form.Item>
      <Form.Item name='linkToReg' noStyle>
        <Link className={classes.link} href='/auth/login'>
          {' '}
          Уже есть аккаунт?
        </Link>
      </Form.Item>
    </Form>
  )
}

export { SignInForm }
