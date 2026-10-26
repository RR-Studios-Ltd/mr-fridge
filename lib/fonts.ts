import { Albert_Sans, Titan_One } from 'next/font/google';

// Self-hosted at build time, so visitors' browsers never contact Google (GDPR)
export const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-albert-sans',
});

export const titanOne = Titan_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-titan-one',
});
