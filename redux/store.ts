import { configureStore } from '@reduxjs/toolkit'
import mainPageSlice from './slice/mainPageSlice'
import trendPageSlice from './slice/trendPageSlice'

export const store = configureStore({
  reducer: {
    mainPagedata:mainPageSlice,
    trendPageData:trendPageSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch