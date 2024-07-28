import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ThemeType } from './type'
import { RootState } from '@/1_app/appStore'

interface ThemeSliceInitialState {
  currentTheme: 'light' | 'dark'
}

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  return 'light'
}

const initialState: ThemeSliceInitialState = {
  currentTheme: getInitialTheme(),
}
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload
    },
  },
})

export const setCurrentTheme = (state: RootState) => state.theme.currentTheme
export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
