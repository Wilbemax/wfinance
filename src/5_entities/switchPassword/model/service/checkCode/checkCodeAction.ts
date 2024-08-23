import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { setError } from '@/5_entities/app/model/slice'
import PasswordRecoveryService from '@/5_entities/switchPassword/api/PasswordRecoveryService'

import type { CodePayloadI, CodeRejectT, CodeResponseT } from './type'

export const SecondStep = createAsyncThunk<
  CodeResponseT,
  CodePayloadI,
  { rejectValue: CodeRejectT }
>(
  'auth/code',
  async ({ activationLink, code }, { rejectWithValue, dispatch }) => {
    try {
      const response = await PasswordRecoveryService.checkActivationCode(
        activationLink,
        code
      )

      return response.data
    } catch (e) {
      dispatch(setError('Пожалуйста, попробуйте ещё раз, что-то пошло не так'))
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 400) {
          return rejectWithValue(e.response.status)
        }
      }
      return rejectWithValue(500)
    }
  }
)
