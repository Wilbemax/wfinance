import { SecondStep } from '@/5_entities/switchPassword/model/service/checkCode/checkCodeAction'
import { FirstStep } from '@/5_entities/switchPassword/model/service/checkEmail/checkEmailAction'
import { ThirdStep } from '@/5_entities/switchPassword/model/service/switchPassword/switchPasswordAction'
import { useAppDispatch } from '@/6_shared/model/hooks'

export const useCheckPassword = (activationLink: string, password: string) => {
  const dispatch = useAppDispatch()

  return () => dispatch(ThirdStep({ activationLink, password }))
}

export const useCheckCode = (activationLink: string, code: string) => {
  const dispatch = useAppDispatch()

  return () => dispatch(SecondStep({ activationLink, code }))
}

export const useCheckEmail = (email: string) => {
  const dispatch = useAppDispatch()

  return () => dispatch(FirstStep({ email }))
}
