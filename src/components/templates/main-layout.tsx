'use client';

import { Button } from '../atoms/button';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Setting } from '@/config';
import { SettingMenu } from '../molecules';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen w-screen">
      <div className="flex items-center gap-3 bg-stone-100 px-6 py-2 dark:bg-stone-900">
        <Image
          src={theme == 'light' ? '/images/logo-colored.svg' : '/images/logo-white.svg'}
          alt="Chocoding.in logo"
          width={20}
          height={20}
        />
        <p className="text-large me-auto">{Setting.author.displayName}</p>

        <Button asChild variant={'link'} size={'fit'}>
          <a href={Setting.author.github} target="_blank">
            Github
          </a>
        </Button>
        <Button asChild variant={'link'} size={'fit'}>
          <a href={Setting.author.insta} target="_blank">
            Insta
          </a>
        </Button>
        <SettingMenu />
      </div>
      {props.children}
    </main>
  );
};

export default MainLayout;
