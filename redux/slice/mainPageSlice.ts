import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainPageState {
      data: any;
      loading: boolean;
      error: string | null;
}

const initialState: MainPageState = {
      data: null,
      loading: false,
      error: null,
}

export const mainPageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
          fetchDataMainStart(state) {
            state.loading = true;
            state.error = null;
          },
          fetchDataMainSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data = action.payload;
          },
          fetchDataMainFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
          },
  },
})


export const { fetchDataMainStart, fetchDataMainSuccess, fetchDataMainFailure  } = mainPageSlice.actions

export default mainPageSlice.reducer