import { test } from "@playwright/test";

test("Fill method practice", async ({ page }) => {
  await page.goto("https://www.google.com/");
await page.locator('#ti6dpd').pressSequentially("Playwright", { delay: 1000 });
await page.locator('#ti6dpd').press('ArrowDown+ArrowDown+ArrowDown+Enter');
await page.locator('#ti6dpd').press('Backspace');

});
