import { combineReducers } from 'redux'

import { appConditionsSlice } from '@/5_entities/app/model/slice'
import { sessionSlice } from '@/5_entities/session/model/slice'
import { switchPasswordSlice } from '@/5_entities/switchPassword/model/slice'
import { themeSlice } from '@/5_entities/theme/model/slice'
import { userSlice } from '@/5_entities/user/model/slice'

export const rootReducers = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [appConditionsSlice.name]: appConditionsSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [switchPasswordSlice.name]: switchPasswordSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
})
