import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import type { sessionInitialState } from '../../type'

import { registration } from './registrationAction'
import type { RegistrationReject } from './type'

export default function registrationExtraReducer(
  builder: ActionReducerMapBuilder<sessionInitialState>
) {
  builder
    .addCase(registration.pending, (state) => {
      state.loading = true
    })
    .addCase(registration.fulfilled, (state) => {
      state.loading = false
    })
    .addCase(
      registration.rejected,
      (state, action: PayloadAction<RegistrationReject | undefined>) => {
        state.loading = false
        state.sessionError = action.payload ?? null
      }
    )
}
