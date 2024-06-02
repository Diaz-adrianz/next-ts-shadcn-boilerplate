'use client';

import { Button } from '@/components/atoms/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu';
import { Setting } from '@/config';
import { Themes } from '@/constant';
import { Tlang, TTheme } from '@/types';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeMenu = () => {
  const lang: Tlang = (document.querySelector('html')?.lang ?? 'en') as Tlang;
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenuRadioGroup
      value={theme ?? Setting.defaultTheme}
      onValueChange={(val) => {
        setTheme(val);
      }}
    >
      {Themes.filter((c) => Setting.themeSupport.includes(c.value as TTheme)).map((c, i) => (
        <DropdownMenuRadioItem key={i} value={c.value.toString()}>
          {c.label[lang]}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
};

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const ThemeSwitch = React.forwardRef<HTMLButtonElement, Props>(({ className, ...props }, ref) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className} ref={ref} {...props}>
          Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ThemeMenu />
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

ThemeSwitch.displayName = 'ThemeSwitch';

export { ThemeSwitch, ThemeMenu };
