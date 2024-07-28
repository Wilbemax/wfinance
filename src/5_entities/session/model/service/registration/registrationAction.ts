import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { AuthPayload, ErrorResponse } from './type'

import AuthenticationService from '@/5_entities/session/api/AuthenticationService'

export const registration = createAsyncThunk<
  { accessToken: string },
  AuthPayload,
  { rejectValue: ErrorResponse }
>('auth/registration', async (userData: AuthPayload, thunkAPI) => {
  try {
    const response = await AuthenticationService.registration(userData)
    localStorage.setItem('token', response.data.accessToken)
    // thunkAPI.dispatch(setUser(response))

    return response.data
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const errorMessage: ErrorResponse = {
        status: e.response?.status || 500,
        message: 'Something went wrong',
      }

      if (typeof e.response?.data === 'string') {
        const html = e.response.data
        const match = html.match(/Error: ([^<]+)/)
        if (match && match[1]) {
          errorMessage.message = match[1].trim()
        }
      } else if (e.response?.data?.message) {
        errorMessage.message = e.response.data.message
      }

      console.log(errorMessage)
      return thunkAPI.rejectWithValue(errorMessage)
    }

    return thunkAPI.rejectWithValue({
      status: 500,
      message: 'An unexpected error occurred',
    })
  }
})
