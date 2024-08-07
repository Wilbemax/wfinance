import { configureStore } from '@reduxjs/toolkit/react'

import { rootReducers } from './rootReducers'

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
