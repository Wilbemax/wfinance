import { UserI } from '@/6_shared/api/type'

export interface fetchUser {
  accessToken: string
  refreshToken: string
  user: UserI
}

export type fetchUserReject = number
