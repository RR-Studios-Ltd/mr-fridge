import type { Metadata } from 'next';
import { defaultLocale } from '@/lib/i18n';
import { asset } from '@/lib/paths';

const target = asset(`/${defaultLocale}/`);

export const metadata: Metadata = {
  alternates: { canonical: target },
  robots: { index: false, follow: true },
};

// Static hosting can't send a server redirect, so redirect with a meta refresh instead
export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p>
        <a href={target}>Mr. Fridge</a>
      </p>
    </>
  );
}
