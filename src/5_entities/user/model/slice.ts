import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

import type { AuthResponse } from '@/6_shared/api/type'

import fetchUserExtraReducer from './service/fetchUser/fetchUserExtraReducer'
import type { UserInitialState } from './type'

const cookies = new Cookies()

let accessToken = null
if (typeof window !== 'undefined') {
  accessToken = localStorage.getItem('accessToken')
}

const initialState: UserInitialState = {
  refreshToke: cookies.get<string>('refreshToken'),
  accessToken,
  userLoading: false,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload.user
    },
  },
  extraReducers(builder) {
    fetchUserExtraReducer(builder)
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
