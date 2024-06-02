import { createSlice } from '@reduxjs/toolkit';
import { getPost, postPost } from './extras';
import { Tpost } from '@/types';

export type TcommonState = {
  request_count: number;
  post: Tpost | null;
};

const initial: TcommonState = {
  request_count: 0,
  post: null,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: initial,
  reducers: {
    addRequestCount(state) {
      state.request_count += 1;
    },
    subRequestCount(state) {
      state.request_count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.post = null;
    });
    builder.addCase(postPost.pending, (state) => {
      state.post = null;
    });
    builder.addCase(getPost.fulfilled, (state, { payload, type }) => {
      state.post = payload;
      state.request_count += 1;
    });
    builder.addCase(postPost.fulfilled, (state, { payload, type }) => {
      state.post = payload;
      state.request_count += 1;
    });
  },
});

// actions
export const { addRequestCount, subRequestCount } = commonSlice.actions;
export { getPost, postPost };
