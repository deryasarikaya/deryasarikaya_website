import { describe, expect, it } from 'vitest';
import { equivalentRoute, routeFor, routes } from '../../src/data/routes';

describe('bilingual routes', () => {
  it('contains a German and English equivalent for every route', () => {
    for (const pair of Object.values(routes)) {
      expect(pair.de).toMatch(/^\/de\//);
      expect(pair.en).toMatch(/^\/en\//);
    }
  });

  it('maps the same case study across languages', () => {
    expect(equivalentRoute('/de/projekte/ai-start-map/', 'en')).toBe('/en/projects/ai-start-map/');
    expect(equivalentRoute('/en/cv', 'de')).toBe('/de/lebenslauf/');
    expect(routeFor('projectMoviWebApp', 'en')).toBe('/en/projects/moviwebapp/');
  });
});
