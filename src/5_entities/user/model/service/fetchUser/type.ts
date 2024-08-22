import type { UserI } from '@/6_shared/api/type'

export interface FetchUserT {
  accessToken: string
  refreshToken: string
  user: UserI
}

export type FetchUserReject = number
