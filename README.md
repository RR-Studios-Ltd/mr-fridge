# Mr. Fridge – Static Website

A static, SEO-optimized Next.js website for **Mr. Fridge**, available in German (default) and English.

## Getting Started

```bash
npm install
npm run dev       # Development at http://localhost:3000
npm run build     # Static export to ./out
```

## Project Structure

```
mr-fridge/
├── app/
│   ├── globals.css            # Global styles & design system
│   ├── layout.tsx             # Root layout (fonts, meta)
│   ├── page.tsx               # Root redirect → /de
│   └── [locale]/
│       ├── layout.tsx         # Per-locale layout (header, footer, SEO meta)
│       ├── page.tsx           # Home page (hero section)
│       ├── faq/page.tsx       # FAQ placeholder
│       ├── features/page.tsx  # Features placeholder
│       └── contact/page.tsx   # Contact placeholder
├── components/
│   ├── Header.tsx             # Navigation + language switcher
│   ├── Footer.tsx             # Footer with legal links
│   ├── Hero.tsx               # Main hero section
│   └── ComingSoonBanner.tsx   # English "coming soon" banner
├── lib/
│   ├── de.ts                  # German dictionary
│   ├── en.ts                  # English dictionary
│   └── i18n.ts                # i18n utilities
└── public/images/             # Asset placeholders (replace with your files)
    ├── icon-pan.svg
    ├── icon-checklist.svg
    ├── mascot.svg
    ├── badge-appstore.svg
    └── badge-googleplay.svg
```


## Internationalization

- **German** (`/de`)
- **English** (`/en`)

Translations are managed via typed dictionaries in `lib/de.ts` and `lib/en.ts`. Adding a new locale requires:
1. Creating a new dictionary file in `lib/`
2. Adding the locale to the `locales` array in `lib/i18n.ts`
3. Importing the dictionary in `lib/i18n.ts`

## SEO Features

- Semantic HTML with proper heading hierarchy
- `<meta>` title & description per locale
- Open Graph tags per locale
- `hreflang` alternate links for DE/EN
- Accessible landmarks (`role="banner"`, `role="navigation"`, `role="contentinfo"`)
- `aria-label` attributes on interactive elements
- Screen-reader-only utility class (`.sr-only`)

## Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **CSS** (no external CSS framework — custom design system)
- **Google Fonts**: Pacifico, Playfair Display, Source Sans 3, Lilita One
