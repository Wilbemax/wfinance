import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

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
>('auth/forgot', async ({ email }, { rejectWithValue }) => {
  try {
    const response =
      await PasswordRecoveryService.checkEmailForSwitchPassword(email)
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 400) {
      return rejectWithValue(e.response.status)
    }
    return rejectWithValue(500)
  }
})
