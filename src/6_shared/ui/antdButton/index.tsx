'use client'
//тяжело сделать этот компонент мульти задачным сдишком много бизнес задач которые распиплины по всему проеку 
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { FormInstance } from 'antd'
import { Form } from 'antd'

import { useFetchLogin, useLogin } from '@/entites/auth/login/hooks/useLogin'
import { clearLoginError } from '@/entites/auth/login/slice/loginSlice'
import type { LoginPayloadI } from '@/entites/auth/login/types/login.type'
import { addShakeOnButton } from '@/shared/lib/utils/ShakedButton'
import DefaultButton from '@/shared/ui/default/DefaultButton/DefaultButton'

import classes from './buttonForLogin.module.scss'

interface SubmitButtonProps<DataType> {
  form: FormInstance
  data: DataType
  loading: boolean
  error?: {
    message: string
    status: number
  }
  asyncUse: (data: DataType) => void
}

// Исправлено объявление компонента
const SubmitButton = <DataType,>({
  form,
  data,
  loading,
  error,
  asyncUse,
}: SubmitButtonProps<DataType>) => {
  const dispatch = useDispatch()

  const [submittable, setSubmittable] = useState<boolean>(false)

  // Следим за всеми значениями формы
  const values = Form.useWatch<>([], form)

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])

  const signIn = async () => {
    try {
      await form.validateFields()
      const res = await
      console.log(res)
    } catch (error) {
      console.log('Validation failed:', error)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(clearLoginError())
    }, 1500)

    return () => clearTimeout(timeOut)
  }, [dispatch, loginError])

  useEffect(() => {
    const button: HTMLElement | null = document.getElementById('button')
    if (loginError && button) {
      addShakeOnButton(button)
    }
  }, [loginError])

  return (
    <div id='button' className={classes.button}>
      {isLoginButtonLoading ? (
        <DefaultButton loading size='large' type='primary' disabled>
          Проверяем
        </DefaultButton>
      ) : loginError ? (
        <DefaultButton size='large' danger type='primary'>
          Ошибка входа
        </DefaultButton>
      ) : (
        <DefaultButton
          type='primary'
          size='large'
          action={signIn}
          disabled={!submittable}
        >
          Войти
        </DefaultButton>
      )}
    </div>
  )
}

export default SubmitButton
