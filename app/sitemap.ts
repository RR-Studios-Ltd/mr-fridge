import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { asset, siteUrl } from '@/lib/paths';

export const dynamic = 'force-static';

const pages = ['', '/faq', '/contact', '/imprint'];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (locale: string, page: string) => `${siteUrl}${asset(`/${locale}${page}/`)}`;

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: url(locale, page),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, url(l, page)])),
      },
    })),
  );
}
