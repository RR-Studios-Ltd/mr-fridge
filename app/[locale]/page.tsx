import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import Hero from '@/components/Hero';

interface Props {
  params: Promise<{ locale: string }>;
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
