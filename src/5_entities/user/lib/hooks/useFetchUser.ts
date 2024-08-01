import { fetchUser } from '../../model/service/fetchUser/fetchUserAction'

import { useAppDispatch } from '@/6_shared/model/hooks'

export const useFetchUser = () => {
  const dispatch = useAppDispatch()

  return () => dispatch(fetchUser())
}
