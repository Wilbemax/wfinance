import type { AxiosResponse } from 'axios'

import $api from '@/6_shared/api/index'

import PasswordService from '../PasswordSession'

import type { ForgotCodeVerificationResponse, ForgotResponse } from './type'

export default class PasswordRecoveryService {
  static async checkEmailForSwitchPassword(
    email: string
  ): Promise<AxiosResponse<ForgotResponse>> {
    return $api.post('/f', { email })
  }

  static async checkActivationCode(
    activationLink: string,
    code: string
  ): Promise<AxiosResponse<ForgotCodeVerificationResponse>> {
    return $api.get(`/activation-code/${activationLink}+${code}`)
  }

  static async switchPassword(activationLink: string, password: string) {
    const hashedPassword = PasswordService.hashPassword(password)
    return $api.post(`/f/${activationLink}`, { password: hashedPassword })
  }
}
