import { Setting } from '@/config';

export type Tlang = (typeof Setting.languageSupport)[number];

export type TTheme = (typeof Setting.themeSupport)[number];

export type Tption = {
  name?: Partial<Record<Tlang, string>>;
  label: Partial<Record<Tlang, string>>;
  value: string | number;
};

// example
export type Tpost = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};
