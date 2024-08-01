import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

import fetchUserExtraReducer from './service/fetchUser/fetchUserExtraReducer'
import { userInitialState } from './type'

const cookies = new Cookies()

let accessToken = null
if (typeof window !== 'undefined') {
  accessToken = localStorage.getItem('accessToken')
}

const initialState: userInitialState = {
  refreshToke: cookies.get('refreshToken'),
  accessToken,
  userLoading: false,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    fetchUserExtraReducer(builder)
  },
})

export default userSlice.reducer

//дописать функционал автоматического входа пользователя, перейти к реализации клиентской части
