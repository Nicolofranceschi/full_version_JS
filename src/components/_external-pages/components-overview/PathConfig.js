import { paramCase } from 'change-case';

// ----------------------------------------------------------------------

export const FOUNDATION_LIST = ['SOA', 'ISO 14001', 'ISO 450010', 'Rating legalità', 'Whitelist', 'ISO 9001'].map(
  (item) => ({
    name: item,
    href: `/cert/${item}.pdf`,
    icon: `/cert/${item}.png`
  })
);

export const EXTRA_LIST = [
  'Chart',
  'Map',
  'Editor',
  'Copy to clipboard',
  'Upload',
  'Carousel',
  'Multi language',
  'Animate',
  'Mega Menu',
  'Form Validation'
].map((item) => ({
  name: item,
  href: `/cert/${paramCase(item)}.pdf`,
  icon: `/cert/${paramCase(item)}.png`
}));

export const MATERIAL_LIST = [
  'Camion Iveco',
  'Ruspa takeuchi',
  'Rullo',
  'Rusba bobcat',
  'Pialla a freddo',
  'Ruspa volvo',
  'Finitrice cingolata',
  'Furgone'
].map((item) => ({
  name: item,
  href: `/mez/${item}.png`,
  icon: `/mez/${item}.png`
}));
