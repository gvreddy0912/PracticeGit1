import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1794808499120');
  await page.getByRole('link', { name: 'Gmail' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sign into Gmail' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'Email or phone' }).click();
  await page1.getByRole('textbox', { name: 'Email or phone' }).fill('gvreddy127@gmail.com');
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByRole('link', { name: 'Try again' }).click();
});