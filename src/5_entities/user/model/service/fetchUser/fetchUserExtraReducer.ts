import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import { userInitialState } from '../../type'

import { fetchUser } from './fetchUserAction'
import {
  fetchUserT,
  //  fetchUserReject
} from './type'

export default function fetchUserExtraReducer(
  builder: ActionReducerMapBuilder<userInitialState>
) {
  builder
    .addCase(fetchUser.pending, (state) => {
      state.userLoading = true
    })
    .addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<fetchUserT>) => {
        state.accessToken = action.payload.accessToken
        state.refreshToke = action.payload.refreshToken
        state.user = { ...action.payload.user }
      }
    )
    .addCase(
      fetchUser.rejected,
      (
        state
        // action: PayloadAction<fetchUserReject | undefined>
      ) => {
        // eslint-disable-next-line max-len
        //по хорошему обработку всех ошибок складывать в одно место, например записывать в состояние приложения,что бы потом брать от туда логи или сыпать нотификейшены

        state.userLoading = false
      }
    )
}
