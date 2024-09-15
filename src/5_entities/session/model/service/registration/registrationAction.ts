import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { setError } from '@/5_entities/app/model/slice'
import AuthenticationService from '@/5_entities/session/api/AuthenticationService'
import { setUser } from '@/5_entities/user/model/slice'

import type { AuthPayload, ErrorResponse } from './type'

export const registration = createAsyncThunk<
  { accessToken: string },
  AuthPayload,
  { rejectValue: ErrorResponse }
>('auth/registration', async (userData: AuthPayload, thunkAPI) => {
  try {
    const response = await AuthenticationService.registration(userData)
    localStorage.setItem('token', response.data.accessToken)
    thunkAPI.dispatch(setUser(response.data))

    return response.data
  } catch (e) {
    thunkAPI.dispatch(
      setError('Пожалуйста, попробуйте ещё раз, что-то пошло не так')
    )
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        errorMessage.message = e.response.data.message
      }

      // console.log(errorMessage)
      return thunkAPI.rejectWithValue(errorMessage)
    }

    return thunkAPI.rejectWithValue({
      status: 500,
      message: 'An unexpected error occurred',
    })
  }
})
