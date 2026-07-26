import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../..');

describe('approved assets and CV handling', () => {
  it('ships the unchanged English CV and optimized social card', () => {
    expect(existsSync(resolve(root, 'public/cv/Derya_Sarikaya_CV_EN.pdf'))).toBe(true);
    expect(existsSync(resolve(root, 'public/images/social/derya-sarikaya-og.webp'))).toBe(true);
  });

  it('does not create or link a German PDF', () => {
    expect(existsSync(resolve(root, 'public/cv/Derya_Sarikaya_CV_DE.pdf'))).toBe(false);
    const cvPage = readFileSync(resolve(root, 'src/components/pages/CvPage.astro'), 'utf8');
    expect(cvPage).toContain('!de &&');
  });

  it('does not reference disallowed tablet or comic assets', () => {
    const files = ['src', 'public/robots.txt', 'public/site.webmanifest'];
    const source = files
      .map((file) =>
        existsSync(resolve(root, file)) && file.endsWith('.txt')
          ? readFileSync(resolve(root, file), 'utf8')
          : '',
      )
      .join('\n');
    expect(source.toLowerCase()).not.toContain('derya.jpeg');
  });
});
