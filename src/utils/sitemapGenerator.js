import fs from 'fs';
import path from 'path';
import siteConfig from '../config/siteConfig.js';

export function generateSitemap(routes) {
    const siteUrl = siteConfig.siteUrl;
    const today = new Date().toISOString().split('T')[0];

    // Priority mapping rule
    const getPriority = (route) => {
        if (route === '/') return '1.0';
        if (route.startsWith('/services') && route.split('/').length === 3) return '0.9';
        if (route.startsWith('/accounting-service-in-')) return '0.8';
        if (route.startsWith('/resources')) return '0.8';
        if (route === '/about' || route === '/contact' || route === '/services') return '0.8';
        return '0.7';
    };

    const getChangeFreq = (route) => {
        if (route === '/') return 'weekly';
        if (route.startsWith('/resources')) return 'weekly';
        return 'monthly';
    };

    const xmlUrls = routes
        .filter(r => r && !r.includes('bengaluru') && !r.includes('mangalore')) // Exclude redirect routes
        .map(route => {
            const loc = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
            const priority = getPriority(route);
            const changefreq = getChangeFreq(route);
            return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
        })
        .join('\n');

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;

    return sitemapContent;
}

export default generateSitemap;
