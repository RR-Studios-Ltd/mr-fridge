import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { locales, getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { albertSans, titanOne } from '@/lib/fonts';
import { siteMetadata } from '@/lib/metadata';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = siteMetadata;

// Root layout per locale, so <html lang> matches the page language
export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${albertSans.variable} ${titanOne.variable}`}>
      <body>
        <div className="page-wrapper">
          <Header dict={dict} locale={locale} />
          <main className="page-main">{children}</main>
          <Footer dict={dict} locale={locale} />
        </div>
      </body>
    </html>
  );
}
