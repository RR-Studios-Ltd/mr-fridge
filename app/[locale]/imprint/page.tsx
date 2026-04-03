import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <section className="imprint" aria-labelledby="imprint-heading">
      <h1 id="imprint-heading" className="imprint__title">
        {dict.imprint.title}
      </h1>

      <div className="imprint__block">
        <h2 className="imprint__subtitle">{dict.imprint.providerTitle}</h2>
        <p className="imprint__text">{dict.imprint.company}</p>
        <p className="imprint__text imprint__text--pre">{dict.imprint.address}</p>
      </div>

      <div className="imprint__block">
        <p className="imprint__text">
          <span className="imprint__label">{dict.imprint.directorLabel}:</span>{' '}
          {dict.imprint.director}
        </p>
      </div>

      <div className="imprint__block">
        <h2 className="imprint__subtitle">{dict.imprint.registerLabel}</h2>
        <p className="imprint__text imprint__text--pre">{dict.imprint.register}</p>
      </div>

      <div className="imprint__block">
        <h2 className="imprint__subtitle">{dict.imprint.contactTitle}</h2>
        <p className="imprint__text">
          <span className="imprint__label">{dict.imprint.emailLabel}:</span>{' '}
          <a href={`mailto:${dict.imprint.email}`} className="imprint__link">
            {dict.imprint.email}
          </a>
        </p>
        <p className="imprint__text">
          <span className="imprint__label">{dict.imprint.phoneLabel}:</span>{' '}
          <a href={`tel:${dict.imprint.phone.replace(/\s/g, '')}`} className="imprint__link">
            {dict.imprint.phone}
          </a>
        </p>
      </div>
      
      <div className="imprint__block">
        <h2 className="imprint__subtitle">{dict.imprint.euRepTitle}</h2>
        <p className="imprint__text">{dict.imprint.euRepName}</p>
        <p className="imprint__text">
          <span className="imprint__label">{dict.imprint.euRepEmailLabel}:</span>{' '}
          <a href={`mailto:${dict.imprint.euRepEmail}`} className="imprint__link">
            {dict.imprint.euRepEmail}
          </a>
        </p>
      </div>

      <div className="imprint__block">
        <h2 className="imprint__subtitle">{dict.imprint.disclaimerTitle}</h2>
        <p className="imprint__text">{dict.imprint.disclaimerContent}</p>
      </div>

      <div className="imprint__block">
        <h2 className="imprint__subtitle">{dict.imprint.odrTitle}</h2>
        <p className="imprint__text">
          {dict.imprint.odrText}{' '}
          <a
            href="https://consumer-redress.ec.europa.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="imprint__link"
          >
            {dict.imprint.odrLinkText}
          </a>
        </p>
      </div>
    </section>
  );
}
