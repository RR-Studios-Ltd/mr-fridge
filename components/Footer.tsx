import Link from 'next/link';
import type { Dictionary } from '@/lib/de';
import type { Locale } from '@/lib/i18n';

const privacyUrl: Record<Locale, string> = {
  de: '/de/datenschutz/',
  en: '/privacy/',
};

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <span>
        © {year} RR Studios Ltd. {dict.footer.rights}
      </span>
      <div className="footer__links">
        {/* Shared RR Studios privacy policy on the main site, outside this app's basePath */}
        <a href={privacyUrl[locale]} className="footer__link">
          {dict.footer.privacy}
        </a>
        <Link href={`/${locale}/imprint`} className="footer__link">
          {dict.footer.imprint}
        </Link>
      </div>
    </footer>
  );
}
