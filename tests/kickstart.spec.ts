import { chromium } from "@playwright/test";
import { test } from "@playwright/test";

test("kickstart", async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await page.goto("https://www.google.com");
  await page.getByLabel("Google apps").click();
  console.log("this is my first test script");
});

test("second test case", async ({ page }) => {
  console.log("this is second test script");
});
