import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { setError } from '@/5_entities/app/model/slice'
import PasswordRecoveryService from '@/5_entities/switchPassword/api/PasswordRecoveryService'

import type {
  CheckEmailPayloadI,
  CheckEmailRejectT,
  CheckEmailResponseT,
} from './type'

export const FirstStep = createAsyncThunk<
  CheckEmailResponseT,
  CheckEmailPayloadI,
  { rejectValue: CheckEmailRejectT }
>('auth/forgot', async ({ email }, { rejectWithValue, dispatch }) => {
  try {
    const response =
      await PasswordRecoveryService.checkEmailForSwitchPassword(email)
    return response.data
  } catch (e) {
    dispatch(setError('Пожалуйста, попробуйте ещё раз, что-то пошло не так'))

    if (axios.isAxiosError(e) && e.response?.status === 400) {
      return rejectWithValue(e.response.status)
    }
    return rejectWithValue(500)
  }
})
