import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import type { SwitchPasswordInitialState } from '../../type'

import { FirstStep } from './checkEmailAction'
import type { CheckEmailRejectT, CheckEmailResponseT } from './type'

export default function checkEmailExtraReducer(
  builder: ActionReducerMapBuilder<SwitchPasswordInitialState>
) {
  builder
    .addCase(FirstStep.pending, (state) => {
      state.isLoading = true
    })
    .addCase(
      FirstStep.fulfilled,
      (state, action: PayloadAction<CheckEmailResponseT>) => {
        state.isLoading = false
        state.activationLink = action.payload
        state.steps.step1 = true
      }
    )
    .addCase(
      FirstStep.rejected,
      (state, action: PayloadAction<CheckEmailRejectT | undefined>) => {
        state.isLoading = false
        state.status = action.payload ?? undefined
      }
    )
}
