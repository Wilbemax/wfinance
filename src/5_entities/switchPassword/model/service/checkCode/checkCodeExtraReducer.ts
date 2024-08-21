import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import type { SwitchPasswordInitialState } from '../../type'

import { SecondStep } from './checkCodeAction'
import type { CodeRejectT } from './type'

export default function checkCodeExtraReducer(
  builder: ActionReducerMapBuilder<SwitchPasswordInitialState>
) {
  builder
    .addCase(SecondStep.pending, (state) => {
      state.isLoading = true
    })
    .addCase(SecondStep.fulfilled, (state) => {
      state.isLoading = false
      state.steps.step1 = true
      state.steps.step2 = true
    })
    .addCase(
      SecondStep.rejected,
      (state, action: PayloadAction<CodeRejectT | undefined>) => {
        state.isLoading = false
        state.status = action.payload
      }
    )
}
