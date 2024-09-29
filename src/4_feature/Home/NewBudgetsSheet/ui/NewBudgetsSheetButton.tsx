'use client'

import { useEffect, useState } from 'react'
import { Button, Form, type FormInstance } from 'antd'
import type { FormContextProps } from 'antd/es/form/context'

import classes from './classes.module.scss'

type Props = {
  form: FormInstance<any>
  currentTheme: string
  onDismiss: () => void
  submit: () => void
  loading: boolean
}

const NewBudgetsSheetButton = ({
  loading,
  form,
  currentTheme,
  onDismiss,
  submit,
}: Props) => {
  const [submittable, setSubmittable] = useState<boolean>(false)

  // Watch all values
  const values = Form.useWatch<FormContextProps>([], form)
  console.log(values)

  useEffect(() => {
    form
      .validateFields()
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
    console.log('dfasdf')
  }, [form])

  return (
    <div className={classes.btnWrapper}>
      <Button
        size='large'
        type='primary'
        disabled={!submittable}
        loading={loading}
        onClick={submit}
      >
        Создать бюджет
      </Button>
      <Button
        size='large'
        type={currentTheme === 'dark' ? 'primary' : 'default'}
        style={{ background: '#cccccc', color: '#23272e', width: '100%' }}
        onClick={onDismiss}
      >
        Отмена
      </Button>
    </div>
  )
}
export { NewBudgetsSheetButton }
