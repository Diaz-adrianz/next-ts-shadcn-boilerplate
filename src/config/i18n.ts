import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { Setting } from './setting';

export default getRequestConfig(async () => {
  const locale = (cookies().get('lang') ?? Setting.defaultLanguage) as string;

  return {
    locale,
    messages: (await import(`../langs/${locale}.json`)).default,
  };
});
