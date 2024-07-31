import { createSlice } from '@reduxjs/toolkit'

import { appConditionsInitialState } from './type'

const initialState: appConditionsInitialState = {
  //пока это все нужные функции для приложения
  loadingPage: false,
}

export const appConditionsSlice = createSlice({
  name: 'appConditions',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loadingPage = !state.loadingPage
    },
  },
  // заготовка на будущее
  // extraReducers: (builder) => {
  //   builder
  // },
})

export const { toggleLoading } = appConditionsSlice.actions
export default appConditionsSlice.reducer
