export interface UserI {
  userName: string
  phone: string
  email: string
  activationLink: string
  isActivation: boolean
}

export interface UserInitialState {
  refreshToke: string | undefined
  accessToken: string | null
  userLoading: boolean
  user: UserI | null
}
