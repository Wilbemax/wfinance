import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import type { SwitchPasswordInitialState } from '../../type'

import { ThirdStep } from './switchPasswordAction'
import type { SwitchRejectT } from './type'

export default function switchPasswordExtraReducer(
  builder: ActionReducerMapBuilder<SwitchPasswordInitialState>
) {
  builder
    .addCase(ThirdStep.pending, (state) => {
      state.isLoading = true
    })
    .addCase(ThirdStep.fulfilled, (state) => {
      state.isLoading = false
      state.steps.step1 = true
      state.steps.step2 = true
      state.steps.step3 = true
    })
    .addCase(
      ThirdStep.rejected,
      (state, action: PayloadAction<SwitchRejectT | undefined>) => {
        state.isLoading = false
        state.status = action.payload
      }
    )
}
