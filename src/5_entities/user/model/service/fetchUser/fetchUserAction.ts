import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '@/6_shared/api/config'

import type { FetchUserReject, FetchUserT } from './type'

const api = API_URL

export const fetchUser = createAsyncThunk<
  FetchUserT,
  void,
  { rejectValue: FetchUserReject }
>('auth/fetch', async (_, { rejectWithValue }) => {
  // debugger
  try {
    const response = await axios.get<FetchUserT>(`${api}/refresh`, {
      withCredentials: true,
    })
    localStorage.setItem('token', response.data.accessToken)
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 400) {
      return rejectWithValue(e.response.status)
    }
    return rejectWithValue(500)
  }
})
