import type { AxiosResponse } from 'axios'

import $api from '@/6_shared/api/index'
import type { AuthResponse } from '@/6_shared/api/type'

import PasswordService from '../PasswordSession'

import type { AuthPayload } from './type'

export default class AuthenticationService {
  static async registration(
    userData: AuthPayload
  ): Promise<AxiosResponse<AuthResponse>> {
    const hashedPassword = PasswordService.hashPassword(userData.password)
    return $api.post(`/registration`, { ...userData, password: hashedPassword })
  }

  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    const hashedPassword = PasswordService.hashPassword(password)
    return $api.post('/login', { login, password: hashedPassword })
  }
}
