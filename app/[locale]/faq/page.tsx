import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { AccordionItem } from '@/components/Accordion';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return pageMetadata(locale as Locale, '/faq', `${dict.faq.title} | Mr. Fridge`, dict.faq.metaDescription);
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="faq" aria-labelledby="faq-heading">
        <h1 id="faq-heading" className="faq__title">
          {dict.faq.title}
        </h1>
        <div className="faq__list">
          {dict.faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
}
