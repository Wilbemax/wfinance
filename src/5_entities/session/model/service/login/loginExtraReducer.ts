import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import { sessionInitialState } from '../../type'

import { login } from './loginAction'
import { LoginRejectI } from './type'

export default function loginExtraReducer(
  builder: ActionReducerMapBuilder<sessionInitialState>
) {
  builder
    .addCase(login.pending, (state) => {
      state.loading = true
    })
    .addCase(login.fulfilled, (state) => {
      state.loading = false
    })
    .addCase(
      login.rejected,
      (state, action: PayloadAction<LoginRejectI | undefined>) => {
        state.loading = false
        state.sessionError = action.payload ?? null
      }
    )
}
