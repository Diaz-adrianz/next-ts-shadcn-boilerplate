import { getCookie, setCookie } from 'cookies-next';

type TstorageType = 'local' | 'session' | 'cookie';

const Storage = {
  get<T>(typ: TstorageType, key: string, fallback?: T): T | null {
    let data = null;
    if (typ == 'local') data = window.localStorage.getItem(key);
    if (typ == 'session') data = window.sessionStorage.getItem(key);
    if (typ == 'cookie') data = getCookie(key);

    if (data) {
      try {
        data = JSON.parse(data);
      } catch {
        null;
      }
    }
    return data ? (data as T) : fallback ?? null;
  },
  set<T>(typ: TstorageType, key: string, data: T): T | null {
    try {
      if (typ == 'local') window.localStorage.setItem(key, JSON.stringify(data));
      if (typ == 'session') window.sessionStorage.setItem(key, JSON.stringify(data));
      if (typ == 'cookie') setCookie(key, JSON.stringify(data));
      return data;
    } catch {
      return null;
    }
  },
};

export { Storage };
