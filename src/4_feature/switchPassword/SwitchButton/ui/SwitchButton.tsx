'use client'

import type { FormInstance } from 'antd'
import { Button } from 'antd'

import { useForgotPassword } from '@/5_entities/switchPassword/lib/useForgotPassword'
import { addShakeOnButton } from '@/6_shared/ui/ShakedButton'

interface Props {
  form?: FormInstance<any>
  email?: string
  code?: string
  password?: string
  submittabl?: boolean
}

const SwitchButton = ({ form, email, code, password, submittabl }: Props) => {
  const { submittable, isLoading, status, handleAction } = useForgotPassword({
    form,
    code,
    email,
    password,
    submittabl,
  })

  let canSend: boolean = submittable

  if (submittable === false && submittabl === true) {
    canSend = submittabl
  }
  // Логика определения текста кнопки
  let buttonText = 'Восстановить'
  if (isLoading) {
    buttonText = 'Проверяем'
  } else if (status === 400) {
    buttonText = 'Ошибка'
  }
  const button: HTMLElement | null = document?.getElementById('button')
  if (status === 400) {
    addShakeOnButton(button)
  }
  return (
    <div id='button' style={{ width: '100%' }}>
      <Button
        style={{ width: '100%' }}
        size='large'
        type='primary'
        disabled={!canSend}
        loading={isLoading}
        onClick={handleAction}
      >
        {buttonText}
      </Button>
    </div>
  )
}

export { SwitchButton }
