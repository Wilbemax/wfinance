import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { fetchUser, fetchUserReject } from './type'

debugger
const api = process.env.API_URL

export const fetchAuth = createAsyncThunk<
  fetchUser,
  void,
  { rejectValue: fetchUserReject }
>('auth/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<fetchUser>(`${api}/refresh`, {
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
