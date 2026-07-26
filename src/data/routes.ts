import type { Language, RouteKey } from './types';

export const SITE_URL = 'https://deryasarikaya.ai';

export const routes: Record<RouteKey, Record<Language, string>> = {
  home: { de: '/de/', en: '/en/' },
  about: { de: '/de/ueber-mich/', en: '/en/about/' },
  projects: { de: '/de/projekte/', en: '/en/projects/' },
  projectAiStartMap: {
    de: '/de/projekte/ai-start-map/',
    en: '/en/projects/ai-start-map/',
  },
  projectKompass: { de: '/de/projekte/kompass/', en: '/en/projects/kompass/' },
  projectMoviWebApp: {
    de: '/de/projekte/moviwebapp/',
    en: '/en/projects/moviwebapp/',
  },
  cv: { de: '/de/lebenslauf/', en: '/en/cv/' },
  contact: { de: '/de/kontakt/', en: '/en/contact/' },
  legal: { de: '/de/impressum/', en: '/en/legal-notice/' },
  privacy: { de: '/de/datenschutz/', en: '/en/privacy/' },
};

export function routeFor(key: RouteKey, lang: Language): string {
  return routes[key][lang];
}

export function equivalentRoute(pathname: string, target: Language): string {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const match = Object.values(routes).find(
    (pair) => pair.de === normalized || pair.en === normalized,
  );
  return match?.[target] ?? routes.home[target];
}

export function routeKeyFor(pathname: string): RouteKey {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const entry = Object.entries(routes).find(
    ([, pair]) => pair.de === normalized || pair.en === normalized,
  );
  return (entry?.[0] as RouteKey | undefined) ?? 'home';
}
