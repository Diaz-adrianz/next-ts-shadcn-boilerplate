import { Setting } from '@/config';

export type Tlang = (typeof Setting.languageSupport)[number];

export type TMonth = {
  name?: Partial<Record<Tlang, string>>;
  label: Partial<Record<Tlang, string>>;
  value: string | number;
};

export type TTheme = TMonth;

export type TDay = TMonth;
