'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { asset } from '@/lib/paths';
import { usePathname } from 'next/navigation';
import type { Dictionary } from '@/lib/de';
import type { Locale } from '@/lib/i18n';

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

const languages: { code: Locale; label: string }[] = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
];

export default function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header" role="banner">
      <Link href={`/${locale}`} className="header__logo-link" aria-label="Mr. Fridge Home">
        <Image
          src={asset('/images/logo.png')}
          alt="Mr. Fridge"
          width={220}
          height={60}
          className="header__logo-img"
          priority
        />
        <span className="header__logo-tagline">{dict.hero.tagline}</span>
      </Link>

      <nav className="header__nav" role="navigation" aria-label="Main navigation">
        <Link href={`/${locale}/faq`} className="header__nav-link">
          {dict.nav.faq}
        </Link>
        <Link href={`/${locale}/contact`} className="header__nav-link">
          {dict.nav.contact}
        </Link>

        {/* Language dropdown */}
        <div className="lang-dropdown" ref={dropdownRef}>
          <button
            className="lang-switcher"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-label="Select language"
          >
            {locale.toUpperCase()}
            <span
              className={`lang-switcher__chevron ${open ? 'lang-switcher__chevron--open' : ''}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>

          {open && (
            <ul className="lang-dropdown__menu" role="listbox">
              {languages.map((lang) => (
                <li key={lang.code} role="option" aria-selected={lang.code === locale}>
                  <Link
                    href={pathname.replace(`/${locale}`, `/${lang.code}`)}
                    className={`lang-dropdown__item ${lang.code === locale ? 'lang-dropdown__item--active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {lang.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
