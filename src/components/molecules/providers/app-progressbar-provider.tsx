'use client';
import { AppProgressBar } from 'next-nprogress-bar';

const AppProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default AppProgressBarProvider;
