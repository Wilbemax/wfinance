import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { fetchUserReject, fetchUserT } from './type'
import { API_URL } from '@/6_shared/api/config'


const api = API_URL

export const fetchUser = createAsyncThunk<
  fetchUserT,
  void,
  { rejectValue: fetchUserReject }
>('auth/fetch', async (_, { rejectWithValue }) => {
  // debugger
  try {
    const response = await axios.get<fetchUserT>(`${api}/refresh`, {
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
