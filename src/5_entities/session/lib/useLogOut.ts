import { useDispatch } from 'react-redux'

import { logOut } from '../model/slice'

export const useLogOut = () => {
  const dispatch = useDispatch()

  return () => dispatch(logOut())
}
