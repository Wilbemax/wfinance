export interface LoginRejectI {
  status: number
  message: string
}

export interface LoginStateI {
  isLoginButtonLoading: boolean
  loginError: LoginRejectI | null
}

export interface LoginPayloadI {
  login: string
  password: string
}

export interface LoginResponseI {
  accessToken: string
}
