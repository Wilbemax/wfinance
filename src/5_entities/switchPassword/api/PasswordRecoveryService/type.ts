export interface ForgotRequestPayload {
  email: string
}

export type ForgotResponse<response = string> = response

export type ForgotError<error = number> = error

export interface ForgotCodeVerificationPayload {
  activationLink: string
  code: string
}

export type ForgotCodeVerificationResponse<response = string> = response

export type ForgotCodeVerificationError<error = number> = error

export interface ForgotPasswordSwitchPayload {
  activationLink: string
  password: string
}

export type ForgotPasswordSwitchResponse<response = string> = response

export type ForgotPasswordSwitchError<error = number> = error
