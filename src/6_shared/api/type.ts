export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserI
}

export interface UserI {
  userName: string
  phone: string
  email: string
  activationLink: string
  isActivation: boolean
  image: string
  purchases: string
  balance: string
  budgets: string
}
