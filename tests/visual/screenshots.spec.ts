import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { expect, test } from '@playwright/test';

const output = resolve(import.meta.dirname, '../../docs/screenshots');
const desktop: [string, string][] = [
  ['de-home', '/de/'],
  ['en-home', '/en/'],
  ['about', '/de/ueber-mich/'],
  ['projects', '/de/projekte/'],
  ['ai-start-map', '/de/projekte/ai-start-map/'],
  ['kompass', '/de/projekte/kompass/'],
  ['moviwebapp', '/de/projekte/moviwebapp/'],
  ['cv', '/en/cv/'],
];

test.beforeAll(async () => mkdir(output, { recursive: true }));

for (const [name, route] of desktop) {
  test(`desktop screenshot: ${name}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(route);
    await expect(page.locator('main h1')).toBeVisible();
    await page.screenshot({ path: resolve(output, `desktop-${name}.png`), fullPage: true });
  });
}

test('desktop screenshot: guide open', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/de/');
  await page.getByRole('button', { name: /Portfolio-Guide öffnen/i }).click();
  await page.screenshot({ path: resolve(output, 'desktop-guide-open.png'), fullPage: false });
});

for (const [name, route] of [
  ['home', '/de/'],
  ['projects', '/de/projekte/'],
  ['cv', '/en/cv/'],
] as const) {
  test(`mobile screenshot: ${name}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(route);
    await page.screenshot({ path: resolve(output, `mobile-${name}.png`), fullPage: true });
  });
}

test('mobile screenshot: menu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/de/');
  await page.getByRole('button', { name: /menü/i }).click();
  await page.waitForTimeout(250);
  await page.screenshot({ path: resolve(output, 'mobile-menu.png'), fullPage: false });
});

test('mobile screenshot: guide open', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/de/');
  await page.getByRole('button', { name: /Portfolio-Guide öffnen/i }).click();
  await page.screenshot({ path: resolve(output, 'mobile-guide-open.png'), fullPage: false });
});
