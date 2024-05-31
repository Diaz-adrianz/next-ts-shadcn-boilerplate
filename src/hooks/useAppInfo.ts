import { Setting } from '@/config';
import { Tlang } from '@/types';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';

const useAppInfo = () => {
  // languange
  const [lang, _setLang] = useState<Tlang>(() => {
    let locale = getCookie('lang') || Setting.defaultLanguage;
    if (!Setting.languageSupport.includes(locale as Tlang)) {
      locale = Setting.defaultLanguage;
    }
    return locale as Tlang;
  });

  const setLang = (val: Tlang) => {
    if (!Setting.languageSupport.includes(val)) return;
    setCookie('lang', val);
    _setLang(val);
  };

  return { lang, setLang };
};

export default useAppInfo;
