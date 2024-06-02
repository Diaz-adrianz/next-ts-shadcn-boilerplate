import { commonSlice } from '@/store/common';
import { configureStore } from '@reduxjs/toolkit';

export const reduxStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
  devTools: false,
});

export type Tstore = typeof reduxStore;
export type TstoreState = ReturnType<Tstore['getState']>;
export type TstoreDispatch = Tstore['dispatch'];
