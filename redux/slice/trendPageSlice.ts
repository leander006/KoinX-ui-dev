import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TrendPageState {
      data: any;
      loading: boolean;
      error: string | null;
}

const initialState: TrendPageState = {
      data: null,
      loading: false,
      error: null,
}

export const trendPageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      fetchDataStart(state) {
            state.loading = true;
            state.error = null;
          },
          fetchDataSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data = action.payload;
          },
          fetchDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
          },
  },
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure  } = trendPageSlice.actions

export default trendPageSlice.reducer