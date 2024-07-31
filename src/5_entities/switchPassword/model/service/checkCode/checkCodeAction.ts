import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { CodePayloadI, CodeRejectT, CodeResponseT } from './type'

import PasswordRecoveryService from '@/5_entities/switchPassword/api/PasswordRecoveryService'

export const SecondStep = createAsyncThunk<
  CodeResponseT,
  CodePayloadI,
  { rejectValue: CodeRejectT }
>('auth/code', async ({ activationLink, code }, { rejectWithValue }) => {
  try {
    const response = await PasswordRecoveryService.checkActivationCode(
      activationLink,
      code
    )

    return response.data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 400) {
        return rejectWithValue(e.response.status)
      }
    }
    return rejectWithValue(500)
  }
})
