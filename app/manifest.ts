import type { MetadataRoute } from 'next';
import { asset } from '@/lib/paths';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mr. Fridge',
    short_name: 'Mr. Fridge',
    description: 'Mr. Fridge verwandelt deinen Vorrat in Rezepte, Essenspläne und Einkaufslisten.',
    start_url: asset('/de/'),
    display: 'standalone',
    background_color: '#fff2d9',
    theme_color: '#2D5016',
    icons: [
      { src: asset('/icons/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: asset('/icons/icon-512.png'), sizes: '512x512', type: 'image/png' },
    ],
  };
}
