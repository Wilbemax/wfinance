// types.ts
export interface RegistrationReject {
  status: number
  message: string
}

export interface InitialSignInState {
  isButtonLoading: boolean
  signInError: RegistrationReject | null
}

export interface RegistrationPayload {
  userName: string
  email: string
  phone: string
  password: string
}

export interface AuthPayload {
  email: string
  password: string
  userName: string
  phone: string
}

export interface ErrorResponse {
  status: number
  message: string
}
