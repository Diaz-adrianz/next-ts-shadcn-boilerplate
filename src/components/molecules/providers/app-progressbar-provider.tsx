'use client';
import { Setting } from '@/config';
import { AppProgressBar } from 'next-nprogress-bar';

const AppProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppProgressBar
        height={Setting.progressBarThickness}
        color={Setting.progressBarColor}
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default AppProgressBarProvider;
