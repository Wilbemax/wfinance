import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

import loginExtraReducer from './service/login/loginExtraReducer'
import registrationExtraReducer from './service/registration/registrationExtraReducer'
import type { sessionInitialState } from './type'

const cookies = new Cookies()
const initialState: sessionInitialState = {
  refreshToken: cookies.get<string>('refreshToken'),
  loading: false,
  sessionError: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logOut: (state) => {
      state.refreshToken = undefined
      cookies.remove('refreshToken')
    },
    clearError: (state) => {
      state.sessionError = null
    },
  },
  extraReducers: (builder) => {
    loginExtraReducer(builder)
    registrationExtraReducer(builder)
  },
})
export const { logOut, clearError } = sessionSlice.actions
export default sessionSlice.reducer
