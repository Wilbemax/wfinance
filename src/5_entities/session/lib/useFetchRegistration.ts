import { useAppDispatch } from '@/6_shared/model/hooks'

import { registration } from '../model/service/registration/registrationAction'
import type { RegistrationPayload } from '../model/service/registration/type'

export const useFetchRegistration = ({
  email,
  password,
  phone,
  userName,
}: RegistrationPayload) => {
  const dispatch = useAppDispatch()

  return () => dispatch(registration({ email, password, phone, userName }))
}
