export type SessionInitialState = {
  refreshToken?: string | undefined
  loading: boolean
  sessionError: RejectSession | null
}

type RejectSession = {
  status: number
  message: string
}
