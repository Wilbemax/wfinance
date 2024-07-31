import { useAppSelector } from '@/6_shared/model/hooks'

export const useSwitchPassword = () =>
  useAppSelector((state) => state.switchPassword)
