import { expect, test } from '@playwright/test';

test('root redirects and both localized homepages load', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/de\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ich baue');
  await page.goto('/en/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('I build');
});

test('language switch preserves the equivalent route', async ({ page }) => {
  await page.goto('/de/projekte/kompass/');
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/projects\/kompass\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('all main internal navigation routes resolve', async ({ page }) => {
  for (const route of [
    '/de/',
    '/de/ueber-mich/',
    '/de/projekte/',
    '/de/lebenslauf/',
    '/de/kontakt/',
    '/en/',
    '/en/about/',
    '/en/projects/',
    '/en/cv/',
    '/en/contact/',
  ]) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBe(true);
    await expect(page.locator('main h1')).toHaveCount(1);
  }
});

test('mobile menu is accessible and does not overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/de/');
  await page.getByRole('button', { name: /menü/i }).click();
  await expect(page.getByRole('link', { name: 'Über mich', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});

test('terminal and reduced-motion fallback remain readable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/en/');
  await expect(page.locator('[data-terminal]')).toContainText('building_useful_ai');
  await expect(page.locator('[data-terminal]')).toContainText('Useful AI for real workflows');
});

test('guide opens and local fallback answers a starter question', async ({ page }) => {
  await page.route('**/api/chat', (route) => route.fulfill({ status: 503, body: '{}' }));
  await page.goto('/en/');
  await page.getByRole('button', { name: 'Open Portfolio Guide' }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: /backend experience/i }).click();
  await expect(dialog).toContainText('FastAPI');
});

test('CV download is English-only and contains no phone in HTML', async ({ page }) => {
  await page.goto('/en/cv/');
  await expect(page.getByRole('link', { name: /Download CV as PDF/i })).toHaveAttribute(
    'href',
    '/cv/Derya_Sarikaya_CV_EN.pdf',
  );
  const pdf = await page.request.get('/cv/Derya_Sarikaya_CV_EN.pdf');
  expect(pdf.ok()).toBe(true);
  await page.goto('/de/lebenslauf/');
  await expect(page.getByRole('link', { name: /PDF/i })).toHaveCount(0);
  expect(await page.locator('body').innerText()).not.toMatch(/(?:\+49|\b01\d{8,})/);
});

test('project pages and truthful MoviWeb demo link work', async ({ page }) => {
  for (const route of [
    '/en/projects/ai-start-map/',
    '/en/projects/kompass/',
    '/en/projects/moviwebapp/',
  ]) {
    await page.goto(route);
    await expect(page.locator('article.case-study h1')).toBeVisible();
  }
  await expect(page.getByRole('link', { name: /Live demo/i })).toHaveAttribute(
    'href',
    'https://moviwebapp-1lej.onrender.com',
  );
});

test('contact preview is honest and legal drafts are noindex', async ({ page }) => {
  await page.goto('/en/contact/');
  await expect(page.getByText(/not active in this preview/i)).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn', exact: true })).toBeVisible();
  for (const route of ['/de/impressum/', '/de/datenschutz/', '/en/legal-notice/', '/en/privacy/']) {
    await page.goto(route);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow',
    );
  }
});

test('keyboard focus is visible and banned imagery is absent', async ({ page }) => {
  await page.goto('/de/');
  await page.keyboard.press('Tab');
  const outline = await page
    .locator(':focus')
    .evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(outline).not.toBe('none');
  const html = (await page.locator('html').innerHTML()).toLowerCase();
  expect(html).not.toContain('derya.jpeg');
  expect(html).not.toContain('tablet');
  expect(html).not.toContain('comic');
});
