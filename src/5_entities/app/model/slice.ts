import { createSlice } from '@reduxjs/toolkit'

import type { appConditionsInitialState } from './type'

const initialState: appConditionsInitialState = {
  // пока это все нужные функции для приложения
  loadingPage: false,
}

export const appConditionsSlice = createSlice({
  name: 'appConditions',
  initialState,
  reducers: {
    setLoading: (state) => {
      // debugger
      state.loadingPage = true
      console.log('set loading')
    },
    removeLoading: (state) => {
      state.loadingPage = false
      console.log('remove loading')
    },
  },
  // заготовка на будущее
  // extraReducers: (builder) => {
  //   builder
  // },
})

export const { setLoading, removeLoading } = appConditionsSlice.actions
export default appConditionsSlice.reducer
