import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { Setting } from './setting';
import { getCookie } from 'cookies-next';

export default getRequestConfig(async () => {
  const locale = (headers().get('x-lang') || Setting.defaultLanguage) as string;

  return {
    locale,
    messages: (await import(`../langs/${locale}.json`)).default,
  };
});
