import { createSlice } from '@reduxjs/toolkit'

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

export const switchPassword = createSlice({
  name: 'switchPassword',
  initialState,
  reducers: {},
})
