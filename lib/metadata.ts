import type { Metadata } from 'next';
import { locales, defaultLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { asset, siteUrl } from '@/lib/paths';

// Builds per-page metadata so every page has its own title, canonical URL and hreflang links
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = (l: Locale) => asset(`/${l}${path}/`);

  return {
    title,
    description,
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, url(l)])),
        'x-default': url(defaultLocale),
      },
    },
    openGraph: {
      title,
      description,
      url: url(locale),
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      siteName: 'Mr. Fridge',
      images: [{ url: asset('/images/og-image.jpg'), width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

// Shared by both root layouts
export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: asset('/icons/favicon.ico'),
    apple: asset('/icons/apple-touch-icon.png'),
  },
  manifest: asset('/manifest.webmanifest'),
};
