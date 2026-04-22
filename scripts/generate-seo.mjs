import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const fallbackSiteUrl = 'https://grdiego897.github.io/taxi-barbate';
const siteUrl = (process.env.VITE_SITE_URL || fallbackSiteUrl).replace(/\/$/, '');

const urls = ['/', '/en/', '/de/'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((url) => {
    const loc = url === '/' ? `${siteUrl}/` : `${siteUrl}${url}`;

    return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="de" href="${siteUrl}/de/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
  </url>`;
  })
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots, 'utf8');
