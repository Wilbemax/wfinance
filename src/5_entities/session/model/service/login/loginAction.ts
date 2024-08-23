import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { setError } from '@/5_entities/app/model/slice'
import AuthenticationService from '@/5_entities/session/api/AuthenticationService'

import type { LoginPayloadI, LoginRejectI, LoginResponseI } from './type'

export const Login = createAsyncThunk<
  LoginResponseI,
  LoginPayloadI,
  { rejectValue: LoginRejectI }
>('auth/login', async ({ login, password }, { rejectWithValue, dispatch }) => {
  try {
    const response = await AuthenticationService.login(login, password)
    localStorage.setItem('token', response.data.accessToken)
    return response.data
  } catch (e) {
    // Используем dispatch для вызова setError
    dispatch(setError('Пожалуйста, попробуйте ещё раз, что-то пошло не так'))
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
