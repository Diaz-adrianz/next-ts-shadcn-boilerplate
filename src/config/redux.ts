import { configureStore } from '@reduxjs/toolkit';

export const reduxStore = () => {
  return configureStore({
    reducer: {},
    devTools: false,
  });
};

export type Tstore = ReturnType<typeof reduxStore>;
export type TstoreState = ReturnType<Tstore['getState']>;
export type TstoreDispatch = Tstore['dispatch'];
