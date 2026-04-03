import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <section className="contact" aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="contact__title">
        {dict.contact.title}
      </h1>
      <p className="contact__description">{dict.contact.description}</p>
      <div className="contact__card">
        <p className="contact__company">{dict.contact.company}</p>
        <p className="contact__email-row">
          <span className="contact__label">{dict.contact.emailLabel}:</span>
          <a
            href={`mailto:${dict.contact.email}`}
            className="contact__email-link"
          >
            {dict.contact.email}
          </a>
        </p>
      </div>
      <p className="contact__response-note">{dict.contact.responseNote}</p>
    </section>
  );
}
