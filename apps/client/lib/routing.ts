export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export function linkToRandCategoryJoke(category: string) {
  return `/${category}`;
}

export function getFullUrl(path: string) {
  return `${baseUrl}${path}`;
}
