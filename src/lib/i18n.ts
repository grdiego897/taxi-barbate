import type { Language } from '../translations';

const SUPPORTED_LANGUAGES: Language[] = ['es', 'en', 'de'];

function getBaseSegments() {
  return import.meta.env.BASE_URL.split('/').filter(Boolean);
}

function getContentSegments(pathname: string) {
  const pathnameSegments = pathname.split('/').filter(Boolean);
  const baseSegments = getBaseSegments();

  return pathnameSegments.slice(baseSegments.length);
}

export function detectLanguageFromPath(pathname: string): Language {
  const [segment] = getContentSegments(pathname);

  if (segment && SUPPORTED_LANGUAGES.includes(segment as Language)) {
    return segment as Language;
  }

  return 'es';
}

export function getLanguagePath(language: Language, hash = '') {
  const baseSegments = getBaseSegments();
  const segments = [...baseSegments];

  if (language !== 'es') {
    segments.push(language);
  }

  const path = segments.length > 0 ? `/${segments.join('/')}/` : '/';

  return `${path}${hash}`;
}

export function getLocalizedPathname(pathname: string, language: Language) {
  const contentSegments = getContentSegments(pathname);
  const [, ...restSegments] = contentSegments;
  const nextSegments = language === 'es' ? restSegments : [language, ...restSegments];
  const baseSegments = getBaseSegments();
  const allSegments = [...baseSegments, ...nextSegments].filter(Boolean);

  return allSegments.length > 0 ? `/${allSegments.join('/')}/` : '/';
}
