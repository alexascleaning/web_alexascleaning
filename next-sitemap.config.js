module.exports = {
  siteUrl: process.env.SITE_URL || 'https://alexascleaning.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/privacy-policy', '/terms-of-service'],
  // Custom transform function to set priorities
  transform: async (config, path) => {
    // Top priority for home
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // High priority for main services and blog
    if (path.startsWith('/services') || path.startsWith('/blog')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // Default for everything else
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://alexascleaning.com'}/sitemap.xml`,
    ],
  },
}
