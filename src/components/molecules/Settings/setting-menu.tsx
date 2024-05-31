import { Button } from '@/components/atoms/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu';
import React from 'react';
import { ThemeMenu } from './theme-switcher';
import { LanguangeMenu } from './languange-switcher';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/atoms';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const SettingMenu = React.forwardRef<HTMLButtonElement, Props>(({ className, ...props }, ref) => {
  const t = useTranslations('Common');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'icon'} className={className} ref={ref} {...props}>
          <Icon name="Settings" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icon name="Palette" className="mr-2" size={13} />
            <span>{t('theme')}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <ThemeMenu />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icon name="Languages" className="mr-2" size={13} />
            <span>{t('languange')}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <LanguangeMenu />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

export default SettingMenu;
