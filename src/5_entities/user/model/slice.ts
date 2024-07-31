import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

import { userInitialState } from './type'

const cookies = new Cookies()

const initialState: userInitialState = {
  refreshToke: cookies.get('refreshToken'),
  accessToken: localStorage.getItem('accessToken'),
  userLoading: false,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

//дописать функционал автоматического входа пользователя, перейти к реализации клиентской части
