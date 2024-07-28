import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

import loginExtraReducer from './service/login/loginExtraReducer'
import registrationExtraReducer from './service/registration/registrationExtraReducer'
import { sessionInitialState } from './type'

const cookies = new Cookies()
const initialState: sessionInitialState = {
  refreshToken: cookies.get('refreshToken'),
  loading: false,
  sessionError: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logOut: (state: sessionInitialState) => {
      state.refreshToken = undefined
      cookies.remove('refreshToken')
    },
  },
  extraReducers: (builder) => {
    loginExtraReducer(builder)
    registrationExtraReducer(builder)
  },
})
export const { logOut } = sessionSlice.actions
export default sessionSlice.reducer
