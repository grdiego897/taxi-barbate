import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const fallbackSiteUrl = 'https://grdiego897.github.io/taxi-barbate';
const siteUrl = (process.env.VITE_SITE_URL || fallbackSiteUrl).replace(/\/$/, '');

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots, 'utf8');
