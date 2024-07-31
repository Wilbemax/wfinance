import { createSlice } from '@reduxjs/toolkit'

import checkCodeExtraReducer from './service/checkCode/checkCodeExtraReducer'
import checkEmailExtraReducer from './service/checkEmail/checkEmailExtraReducer'
import switchPasswordExtraReducer from './service/switchPassword/switchPasswordExtraReducer'
import { SwitchPasswordInitialState } from './type'

const initialState: SwitchPasswordInitialState = {
  status: undefined,
  activationLink: '',
  steps: {
    step1: false,
    step2: false,
    step3: false,
  },
  isLoading: false,
}

export const switchPasswordSlice = createSlice({
  name: 'switchPassword',
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.status = undefined
    },
    clearSteps: (state) => {
      Object.assign(state.steps, {
        step1: false,
        step2: false,
        step3: false,
      })
    },
  },
  extraReducers: (builder) => {
    checkEmailExtraReducer(builder)
    checkCodeExtraReducer(builder)
    switchPasswordExtraReducer(builder)
  },
})

export const { clearStatus, clearSteps } = switchPasswordSlice.actions
export default switchPasswordSlice.reducer
