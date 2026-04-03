import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mr. Fridge - Dein Küchen-Assistent',
  description:
    'Mr. Fridge verwandelt deinen Vorrat in Rezepte, Essenspläne und Einkaufslisten.',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        {/* Google Fonts: Pacifico (logo), Playfair Display (headings), Source Sans 3 (body), Lilita One (bubble) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Titan+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
