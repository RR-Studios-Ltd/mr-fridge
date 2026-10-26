import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return pageMetadata(locale as Locale, '', dict.meta.title, dict.meta.description);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Hero dict={dict} locale={locale as Locale} />
    </>
  );
}
