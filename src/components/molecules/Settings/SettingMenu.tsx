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
import { Languages, Palette, Settings } from 'lucide-react';
import React from 'react';
import { ThemeMenu } from './ThemeSwitch';
import { LanguangeMenu } from './LanguangeSwitch';
import { useTranslations } from 'next-intl';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const SettingMenu = React.forwardRef<HTMLButtonElement, Props>(({ className, ...props }, ref) => {
  const t = useTranslations('Common');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'icon'} className={className} ref={ref} {...props}>
          <Settings size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
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
            <Languages className="mr-2 h-4 w-4" />
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
