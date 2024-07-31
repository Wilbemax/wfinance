import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {
  checkEmailPayloadI,
  checkEmailRejectT,
  checkEmailResponseT,
} from './type'

import PasswordRecoveryService from '@/5_entities/switchPassword/api/PasswordRecoveryService'

export const FirstStep = createAsyncThunk<
  checkEmailResponseT,
  checkEmailPayloadI,
  { rejectValue: checkEmailRejectT }
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
