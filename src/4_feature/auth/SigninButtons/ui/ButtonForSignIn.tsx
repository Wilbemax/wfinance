'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { FormInstance } from 'antd'
import { Button, Form } from 'antd'
import type { FormContextProps } from 'antd/es/form/context'

import { useFetchRegistration } from '@/5_entities/session/lib/useFetchRegistration'
import { useSession } from '@/5_entities/session/lib/useSession'
import type { RegistrationPayload } from '@/5_entities/session/model/service/registration/type'
import { clearError } from '@/5_entities/session/model/slice'
import { addShakeOnButton } from '@/6_shared/ui/ShakedButton'

interface SubmitButtonProps {
  form: FormInstance
  data: RegistrationPayload
}

const ButtonForSignIn: React.FC<SubmitButtonProps> = ({ form, data }) => {
  const { loading, sessionError } = useSession()
  const [submittable, setSubmittable] = useState<boolean>(false)
  const values = Form.useWatch<FormContextProps>([], form)

  const awaitSignIn = useFetchRegistration(data)
  const dispatch = useDispatch()

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])

  const signIn = async () => {
    try {
      await form.validateFields()
      const res = await awaitSignIn()
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
        Ошибка регистрации
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
        Зарегистрироваться
      </Button>
    )
  }

  return (
    <div id='button' style={{ width: '100%' }}>
      {buttonContent}
    </div>
  )
}

export { ButtonForSignIn }
