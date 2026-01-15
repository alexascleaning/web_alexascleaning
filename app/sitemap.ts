import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/services/residential-cleaning',
    '/services/commercial-cleaning',
    '/services/deep-cleaning',
    '/services/move-in-out-cleaning',
    '/services/post-construction',
    '/services/recurring-cleaning',
    '/areas-we-serve',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
