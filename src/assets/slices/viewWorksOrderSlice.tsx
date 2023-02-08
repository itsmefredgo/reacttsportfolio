import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentWorksORder {
  currentOrder: string
}

const initialState: CurrentWorksORder = {
    currentOrder: "status"
}

export const viewWorksOrderSlice = createSlice({
  name: 'viewWorksOrderChanger',
  initialState,
  reducers: {
    changeViewWorksOrder: (state, action: PayloadAction<string>) => {
      state.currentOrder = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeViewWorksOrder } = viewWorksOrderSlice.actions

export default viewWorksOrderSlice.reducer