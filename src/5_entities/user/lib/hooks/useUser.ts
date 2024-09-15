import { useAppSelector } from '@/6_shared/model/hooks'

export function useUser() {
  return useAppSelector((state) => state.user)
}
