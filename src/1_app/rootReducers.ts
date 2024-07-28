import { themeSlice } from '@/5_entities/theme/model/slice'
import { combineReducers } from 'redux'

export const rootReducers = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
})
