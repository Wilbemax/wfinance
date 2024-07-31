import { Login } from '../model/service/login/loginAction'
import { LoginPayloadI } from '../model/service/login/type'

import { useAppDispatch } from '@/6_shared/model/hooks'

export const useFetchLogin = ({ login, password }: LoginPayloadI) => {
  const dispatch = useAppDispatch()

  return () => dispatch(Login({ login, password }))
}
