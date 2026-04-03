import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  if (!locales.includes(locale)) return {};

  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: '/de',
        en: '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      siteName: 'Mr. Fridge',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="page-wrapper" lang={locale}>
      <Header dict={dict} locale={locale} />
      <main className="page-main">{children}</main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
