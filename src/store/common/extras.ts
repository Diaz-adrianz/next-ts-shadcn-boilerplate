import { toast } from '@/components/atoms/use-toast';
import { axiosApi } from '@/lib';
import { Tpost } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

// example
export const getPost = createAsyncThunk<Tpost | null>(
  'common/getPost',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const id = Math.floor(Math.random() * (100 - 0) + 0);
      const res = await axiosApi.get<Tpost>('/posts/' + id);

      toast({
        title: 'Success (check console)',
        variant: 'default',
        description: `Get a post with title ${res.data.title}`,
      });

      fulfillWithValue(res.data);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      return null;
    }
  },
);

export const postPost = createAsyncThunk<Tpost, Tpost>(
  'common/postPost',
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await axiosApi.post<Tpost>('/posts', payload, {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });

      if (res.status == 200)
        toast({
          title: 'Success (check console)',
          variant: 'default',
          description: `You post a post with title ${res.data.title}`,
        });

      fulfillWithValue(res.data);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      return {};
    }
  },
);
