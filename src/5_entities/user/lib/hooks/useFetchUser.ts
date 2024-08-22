import { useAppDispatch } from '@/6_shared/model/hooks'

import { fetchUser } from '../../model/service/fetchUser/fetchUserAction'

export const useFetchUser = () => {
  const dispatch = useAppDispatch()

  return () => dispatch(fetchUser())
}
