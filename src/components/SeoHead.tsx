import { useEffect } from 'react';
import { EMAIL_ADDRESS, PHONE_DISPLAY, SERVICE_AREAS, SITE_NAME, getSiteUrl } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';
import { getLanguagePath } from '../lib/i18n';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attrs).forEach(([key, value]) => tag!.setAttribute(key, value));
}

function upsertLink(id: string, rel: string, href: string, hreflang?: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[data-seo-id="${id}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.dataset.seoId = id;
    document.head.appendChild(tag);
  }

  tag.rel = rel;
  tag.href = href;

  if (hreflang) {
    tag.hreflang = hreflang;
  } else {
    tag.removeAttribute('hreflang');
  }
}

export default function SeoHead() {
  const { language, t } = useLanguage();

  useEffect(() => {
    const siteUrl = getSiteUrl();
    const canonicalPath = getLanguagePath(language);
    const canonicalUrl = canonicalPath === '/' ? `${siteUrl}/` : `${siteUrl}${canonicalPath}`;

    document.title = t.seo.title;
    document.documentElement.lang = language;

    upsertMeta('meta[name="description"]', { name: 'description', content: t.seo.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: t.seo.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: t.seo.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: t.seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: t.seo.description });

    upsertLink('canonical', 'canonical', canonicalUrl);
    upsertLink('alternate-es', 'alternate', `${siteUrl}/`, 'es');
    upsertLink('alternate-en', 'alternate', `${siteUrl}/en/`, 'en');
    upsertLink('alternate-de', 'alternate', `${siteUrl}/de/`, 'de');
    upsertLink('alternate-default', 'alternate', `${siteUrl}/`, 'x-default');

    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-id="structured-data"]');

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoId = 'structured-data';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: SITE_NAME,
      description: t.seo.description,
      telephone: PHONE_DISPLAY,
      email: EMAIL_ADDRESS,
      url: canonicalUrl,
      areaServed: SERVICE_AREAS.map((name) => ({
        '@type': 'City',
        name,
      })),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barbate',
        postalCode: '11160',
        addressRegion: 'Cadiz',
        addressCountry: 'ES',
      },
      priceRange: 'EUR',
      availableLanguage: ['Spanish', 'English', 'German'],
      paymentAccepted: ['Cash', 'Card', 'Bizum', 'Google Pay', 'Apple Pay'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Taxi services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local taxi rides' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airport transfers' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Station transfers' } },
        ],
      },
    });
  }, [language, t]);

  return null;
}
