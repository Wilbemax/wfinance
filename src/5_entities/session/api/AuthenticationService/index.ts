import { AxiosResponse } from 'axios'

import PasswordService from '../PasswordSession'

import { AuthPayload } from './type'

import $api from '@/6_shared/api/index'
import { AuthResponse } from '@/6_shared/api/type'

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
