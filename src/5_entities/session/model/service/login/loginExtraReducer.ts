import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import type { SessionInitialState } from '../../type'

import { Login } from './loginAction'
import type { LoginRejectI } from './type'

export default function loginExtraReducer(
  builder: ActionReducerMapBuilder<SessionInitialState>
) {
  builder
    .addCase(Login.pending, (state) => {
      state.loading = true
    })
    .addCase(Login.fulfilled, (state) => {
      state.loading = false
    })
    .addCase(
      Login.rejected,
      (state, action: PayloadAction<LoginRejectI | undefined>) => {
        state.loading = false
        state.sessionError = action.payload ?? null
      }
    )
}
