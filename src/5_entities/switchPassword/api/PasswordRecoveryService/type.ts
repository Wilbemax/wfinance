export interface ForgotRequestPayload {
  email: string
}

export type ForgotResponse<Response = string> = Response

export type ForgotError<Error = number> = Error

export interface ForgotCodeVerificationPayload {
  activationLink: string
  code: string
}

export type ForgotCodeVerificationResponse<Response = string> = Response

export type ForgotCodeVerificationError<Error = number> = Error

export interface ForgotPasswordSwitchPayload {
  activationLink: string
  password: string
}

export type ForgotPasswordSwitchResponse<Response = string> = Response

export type ForgotPasswordSwitchError<Error = number> = Error
