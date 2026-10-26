export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const siteUrl = 'https://www.rr-studios.co';

// next/image and metadata don't apply basePath to static paths, so prefix them manually
export function asset(path: string): string {
  return `${basePath}${path}`;
}
