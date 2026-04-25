import en from './en';
import es from './es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export type LocaleDictionary = typeof en;

const dictionaries: Record<Locale, LocaleDictionary> = {
  en,
  es
};

export const defaultLocale: Locale = 'en';

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const getDictionary = (locale: string): LocaleDictionary => {
  if (isLocale(locale)) {
    return dictionaries[locale];
  }

  return dictionaries[defaultLocale];
};

export const localizedPath = (locale: Locale, path = ''): string => {
  if (!path || path === '/') {
    return `/${locale}`;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalizedPath}`;
};

export const replaceLocaleInPath = (path: string, locale: Locale): string => {
  const cleanPath = path || '/';
  const parts = cleanPath.split('/').filter(Boolean);

  if (parts.length === 0) {
    return `/${locale}`;
  }

  if (isLocale(parts[0])) {
    parts[0] = locale;
    return `/${parts.join('/')}`;
  }

  return `/${locale}/${parts.join('/')}`;
};
