'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { FormInstance } from 'antd'
import { Button, Form } from 'antd'
import type { FormContextProps } from 'antd/es/form/context'
import { useRouter } from 'next/navigation'

import { useFetchLogin } from '@/5_entities/session/lib/useFetchLogin'
import { useSession } from '@/5_entities/session/lib/useSession'
import type { LoginPayloadI } from '@/5_entities/session/model/service/login/type'
import { clearError } from '@/5_entities/session/model/slice'
import { addShakeOnButton } from '@/6_shared/ui/ShakedButton'

import classes from './buttonForLogin.module.scss'

interface SubmitButtonProps {
  form: FormInstance
  data: LoginPayloadI
}

const ButtonForLogin: React.FC<SubmitButtonProps> = ({ form, data }) => {
  const { loading, sessionError } = useSession()
  const asyncLogin = useFetchLogin(data)
  const dispatch = useDispatch()
  const router = useRouter()

  const [submittable, setSubmittable] = useState<boolean>(false)

  // Watch all values
  const values = Form.useWatch<FormContextProps>([], form)

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])

  const signIn = async () => {
    try {
      await form.validateFields()
      const res = await asyncLogin()
      router.push('/')
      console.log(res)
    } catch (error) {
      console.log('Validation failed:', error)
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(clearError())
    }, 1500)

    return () => clearTimeout(timeOut)
  }, [dispatch, sessionError])

  // нужно сделать так, но при жтом варианте когда обновляешь странцу импуты перестают быть черными

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && sessionError) {
  //     const button = document.getElementById('button')
  //     addShakeOnButton(button)
  //   }
  // }, [sessionError])
  // тоже пропадают стили
  // let button: HTMLElement | null = null
  // useEffect(() => {
  //   button = document?.getElementById('button')
  // }, [])

  const button: HTMLElement | null = document?.getElementById('button')
  if (sessionError) {
    addShakeOnButton(button)
  }

  let buttonContent
  if (loading) {
    buttonContent = (
      <Button
        style={{ width: '100%' }}
        loading
        size='large'
        type='primary'
        disabled
      >
        Проверяем
      </Button>
    )
  } else if (sessionError) {
    buttonContent = (
      <Button style={{ width: '100%' }} size='large' danger type='primary'>
        Ошибка входа
      </Button>
    )
  } else {
    buttonContent = (
      <Button
        style={{ width: '100%' }}
        type='primary'
        size='large'
        onClick={signIn}
        disabled={!submittable}
      >
        Войти
      </Button>
    )
  }

  return (
    <div id='button' className={classes.button}>
      {buttonContent}
    </div>
  )
}

export { ButtonForLogin }
