import de from './de';
import en from './en';
import type { Dictionary } from './de';

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
