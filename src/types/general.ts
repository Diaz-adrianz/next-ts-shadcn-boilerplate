import { Setting } from '@/config';

export type Tlang = (typeof Setting.languageSupport)[number];

export type TTheme = (typeof Setting.themeSupport)[number];

export type TOption = {
  name?: Partial<Record<Tlang, string>>;
  label: Partial<Record<Tlang, string>>;
  value: string | number;
};
