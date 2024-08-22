import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { setError } from '@/5_entities/app/model/slice'
import PasswordRecoveryService from '@/5_entities/switchPassword/api/PasswordRecoveryService'

import type { SwitchPayloadI, SwitchRejectT, SwitchResponseT } from './type'

export const ThirdStep = createAsyncThunk<
  SwitchResponseT,
  SwitchPayloadI,
  { rejectValue: SwitchRejectT }
>(
  'auth/switch-password',
  async ({ activationLink, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await PasswordRecoveryService.switchPassword(
        activationLink,
        password
      )
      console.log(response)
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
