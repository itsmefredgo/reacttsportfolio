import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentPages {
  currentPage: string
}

const initialState: CurrentPages = {
  currentPage: "home"
}

export const pageSlice = createSlice({
  name: 'pageChanger',
  initialState,
  reducers: {
    changeCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCurrentPage } = pageSlice.actions

export default pageSlice.reducer