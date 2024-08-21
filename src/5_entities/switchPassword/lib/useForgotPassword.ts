import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { FormInstance } from 'antd'
import { Form } from 'antd'
import type { FormContextProps } from 'antd/es/form/context'

import { clearStatus } from '../model/slice'

import { useCheckCode, useCheckEmail, useCheckPassword } from './useSteps'
import { useSwitchPassword } from './useSwitchPassword'

interface Props {
  form?: FormInstance<any>
  email?: string
  code?: string
  password?: string
  submittabl?: boolean
}

export const useForgotPassword = ({
  form,
  email = '',
  code = '',
  password = '',
  submittabl = false,
}: Props) => {
  const dispatch = useDispatch()
  const { activationLink, isLoading, status, steps } = useSwitchPassword()
  const checkEmail = useCheckEmail(email)
  const checkCode = useCheckCode(activationLink, code)
  const checkPassword = useCheckPassword(activationLink, password)
  const [submittable, setSubmittable] = useState(submittabl)

  const watchedValues = form ? Form.useWatch<FormContextProps>([], form) : {}

  useEffect(() => {
    if (form) {
      if (steps.step1 === false || (steps.step1 && steps.step2)) {
        form
          .validateFields({ validateOnly: true })
          .then(() => setSubmittable(true))
          .catch(() => setSubmittable(false))
      } else if (steps.step1 && !steps.step2) {
        setSubmittable(true)
      }
    } else {
      setSubmittable(steps.step1 && steps.step2)
    }
  }, [form, steps.step1, steps.step2, watchedValues])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearStatus())
    }, 1500)
    return () => clearTimeout(timer)
  }, [dispatch, status])

  const handleAction = async () => {
    if (!steps.step1) {
      if (form) {
        await form.validateFields()
      }
      await checkEmail()
    } else if (steps.step1 && !steps.step2) {
      await checkCode()
    } else if (steps.step1 && steps.step2) {
      if (form) {
        await form.validateFields()
      }
      await checkPassword()
    }
  }

  return {
    submittable,
    isLoading,
    status,
    handleAction,
  }
}
