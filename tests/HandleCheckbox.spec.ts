import { test, expect } from "@playwright/test";

test("Handle Checkboxes", async ({ page }) => {
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  await page.locator('.Automation').check();
  await expect(page.locator('.Automation')).toBeChecked();

  await page.locator('.Performance').uncheck();
  await expect(page.locator('.Performance')).not.toBeChecked();

  if(await page.locator('.Automation').isChecked()) {
    // Do something
    page.locator('.Automation').uncheck();
  }
});
