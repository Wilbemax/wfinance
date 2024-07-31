import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import { SwitchPasswordInitialState } from '../../type'

import { FirstStep } from './checkEmailAction'
import { checkEmailRejectT, checkEmailResponseT } from './type'

export default function checkEmailExtraReducer(
  builder: ActionReducerMapBuilder<SwitchPasswordInitialState>
) {
  builder
    .addCase(FirstStep.pending, (state) => {
      state.isLoading = true
    })
    .addCase(
      FirstStep.fulfilled,
      (state, action: PayloadAction<checkEmailResponseT>) => {
        state.isLoading = false
        state.activationLink = action.payload
        state.steps.step1 = true
      }
    )
    .addCase(
      FirstStep.rejected,
      (state, action: PayloadAction<checkEmailRejectT | undefined>) => {
        state.isLoading = false
        state.status = action.payload ?? undefined
      }
    )
}
