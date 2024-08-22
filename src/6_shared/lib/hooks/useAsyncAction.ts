import type { Action, AsyncThunk, ThunkDispatch } from '@reduxjs/toolkit'

import { useAppDispatch } from '@/6_shared/model/hooks'

interface ThunkApiConfig {
  rejectValue: unknown
  state?: unknown
  dispatch?: ThunkDispatch<unknown, unknown, Action>
  extra?: unknown
  serializedErrorType?: unknown
  pendingMeta?: unknown
  fulfilledMeta?: unknown
  rejectedMeta?: unknown
}

const useAsyncAction = <T, P>(action: AsyncThunk<T, P, ThunkApiConfig>) => {
  const dispatch = useAppDispatch()

  return (params: P) => dispatch(action(params))
}

export default useAsyncAction
