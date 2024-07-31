import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import { sessionInitialState } from '../../type'

import { Login } from './loginAction'
import { LoginRejectI } from './type'

export default function loginExtraReducer(
  builder: ActionReducerMapBuilder<sessionInitialState>
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
