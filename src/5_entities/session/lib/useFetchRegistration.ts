import { registration } from '../model/service/registration/registrationAction'
import { RegistrationPayload } from '../model/service/registration/type'

import { useAppDispatch } from '@/6_shared/model/hooks'

export const useFetchRegistration = ({
  email,
  password,
  phone,
  userName,
}: RegistrationPayload) => {
  const dispatch = useAppDispatch()

  return () => dispatch(registration({ email, password, phone, userName }))
}
