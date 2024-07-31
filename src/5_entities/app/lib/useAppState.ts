import { useAppSelector } from '@/6_shared/model/hooks'

export const useAppState = () => useAppSelector((state) => state.appConditions)
