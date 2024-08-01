import { UserI } from '@/6_shared/api/type'

export interface fetchUserT {
  accessToken: string
  refreshToken: string
  user: UserI
}

export type fetchUserReject = number
