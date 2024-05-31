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
import { Countries } from '@/constant';
import { useAppInfo } from '@/hooks';
import { Tlang } from '@/types';
import { getCookie, setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const LanguangeMenu = () => {
  const router = useRouter();
  const { lang, setLang } = useAppInfo();

  const setLanguange = (val: string) => {
    setLang(val as Tlang);
    router.refresh();
  };

  return (
    <DropdownMenuRadioGroup value={lang} onValueChange={setLanguange}>
      {Countries.filter((c) => Setting.languageSupport.includes(c.value as Tlang)).map((c, i) => (
        <DropdownMenuRadioItem key={i} value={c.value.toString()}>
          {c.label[lang]}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
};

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const LanguangeSwitch = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => {
    const t = useTranslations('Common');

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={className} ref={ref} {...props}>
            {t('languange')}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <LanguangeMenu />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);

export { LanguangeSwitch, LanguangeMenu };
