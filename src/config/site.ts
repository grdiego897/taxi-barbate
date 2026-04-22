export const SITE_NAME = 'Taxi Barbate - Diego Gallardo';
export const PHONE_NUMBER = '+34696742513';
export const PHONE_DISPLAY = '+34 696 742 513';
export const EMAIL_ADDRESS = 'diegotaxi11@gmail.com';
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace('+', '')}`;
export const DEFAULT_SITE_URL = 'https://grdiego897.github.io/taxi-barbate';
export const SERVICE_AREAS = [
  'Barbate',
  'Zahara de los Atunes',
  'Canos de Meca',
  'Zahora',
] as const;

export function getSiteUrl() {
  if (typeof window !== 'undefined') {
    const { origin } = window.location;

    if (origin && !origin.includes('localhost') && !origin.includes('127.0.0.1')) {
      return origin.replace(/\/$/, '');
    }
  }

  return DEFAULT_SITE_URL;
}
