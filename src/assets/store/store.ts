import { configureStore } from '@reduxjs/toolkit'
import languageSlice from '../slices/languageSlice'
import pageSlice from '../slices/pageSlice'
import viewWorksOrderSlice from '../slices/viewWorksOrderSlice'

export const store = configureStore({
  reducer: {
    pageChanger: pageSlice,
    languageChanger: languageSlice,
    viewWorkOrderChanger: viewWorksOrderSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch