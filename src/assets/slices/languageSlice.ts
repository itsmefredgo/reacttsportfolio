import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentLanguage {
  currentLanguage: string
}

const initialState: CurrentLanguage = {
  currentLanguage: "english"
}

export const languageSlice = createSlice({
  name: 'languageChanger',
  initialState,
  reducers: {
    changeCurrentLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCurrentLanguage } = languageSlice.actions

export default languageSlice.reducer