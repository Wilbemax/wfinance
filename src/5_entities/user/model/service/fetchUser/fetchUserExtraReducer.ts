import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'

import type { UserInitialState } from '../../type'

import { fetchUser } from './fetchUserAction'
import type {
  FetchUserT,
  //  fetchUserReject
} from './type'

export default function fetchUserExtraReducer(
  builder: ActionReducerMapBuilder<UserInitialState>
) {
  builder
    .addCase(fetchUser.pending, (state) => {
      state.userLoading = true
    })
    .addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<FetchUserT>) => {
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
        // по хорошему обработку всех ошибок складывать в одно место, например записывать в состояние приложения,что бы потом брать от туда логи или сыпать нотификейшены

        state.userLoading = false
      }
    )
}
