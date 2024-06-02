'use client';
import { reduxStore, Tstore } from '@/config';
import { useRef } from 'react';
import { Provider } from 'react-redux';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<Tstore>();
  if (!storeRef.current) {
    storeRef.current = reduxStore;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
