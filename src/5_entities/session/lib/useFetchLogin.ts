import { useAppDispatch } from '@/6_shared/model/hooks'

import { Login } from '../model/service/login/loginAction'
import type { LoginPayloadI } from '../model/service/login/type'

export const useFetchLogin = ({ login, password }: LoginPayloadI) => {
  const dispatch = useAppDispatch()

  return () => dispatch(Login({ login, password }))
}
