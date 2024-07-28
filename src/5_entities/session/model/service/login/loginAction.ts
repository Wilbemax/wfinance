import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { LoginPayloadI, LoginRejectI, LoginResponseI } from './type'

import AuthenticationService from '@/5_entities/session/api/AuthenticationService'

export const login = createAsyncThunk<
  LoginResponseI,
  LoginPayloadI,
  { rejectValue: LoginRejectI }
>('auth/login', async ({ login, password }, { rejectWithValue }) => {
  try {
    const response = await AuthenticationService.login(login, password)
    localStorage.setItem('token', response.data.accessToken)
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return rejectWithValue({
        status: e.response?.status ?? 500,
        message: e.response?.data?.error || 'An error occurred',
      })
    }
    return rejectWithValue({
      status: 500,
      message: 'An unknown error occurred',
    })
  }
})
