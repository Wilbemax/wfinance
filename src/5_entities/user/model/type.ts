export interface UserI {
  userName: string
  phone: string
  email: string
  activationLink: string
  isActivation: boolean
}

export interface userInitialState {
  refreshToke: string | undefined
  accessToken: string | null
  userLoading: boolean
  user: UserI | null
}
