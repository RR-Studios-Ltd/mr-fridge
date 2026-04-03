import Image from 'next/image';
import type { Dictionary } from '@/lib/de';
import type { Locale } from '@/lib/i18n';

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict, locale }: HeroProps) {
  const isEnglish = locale === 'en';

  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Left side – dark green background with cream two-pillar shape */}
      <div className="hero__visual">
        <div className="hero__pillar"></div>

        <div className="hero__visual-content">
          <Image
            src="/images/import_recipes.png"
            alt=""
            width={80}
            height={80}
            className="hero__floating-icon hero__floating-icon--checklist"
            aria-hidden="true"
          />
          <Image
            src="/images/photo_add.png"
            alt=""
            width={80}
            height={80}
            className="hero__floating-icon hero__floating-icon--phone"
            aria-hidden="true"
          />
          <Image
            src="/images/recipes.png"
            alt=""
            width={90}
            height={90}
            className="hero__floating-icon hero__floating-icon--pan"
            aria-hidden="true"
          />

          <p className="hero__bubble-text">{dict.hero.bubble}</p>

          <div className="hero__download">
            {isEnglish ? (
              <p className="hero__coming-soon-text">English version coming soon!</p>
            ) : (
              <>
                <p className="hero__cta-label">{dict.hero.cta}</p>
              </>
            )}
          </div>
        </div>

        {/* Mascot at the boundary */}
        <Image
          src="/images/mr_fridge.png"
          alt="Mr. Fridge mascot – a friendly fridge character wearing a chef hat"
          width={240}
          height={320}
          className="hero__mascot"
          priority
        />
      </div>

      {/* Right side – light background, dark text, centered */}
      <div className="hero__content">
        <h1 id="hero-heading" className="hero__heading">
          {dict.hero.heading}
        </h1>
        <p className="hero__description">{dict.hero.description}</p>
        <p className="hero__sub-description">{dict.hero.subDescription}</p>
      </div>
    </section>
  );
}
