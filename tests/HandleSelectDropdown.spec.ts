import { test } from "@playwright/test";

test("Handle select dropdown", async ({ page }) => {
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  await page.locator("#testingDropdown").selectOption("Performance");
});



test("Handle multi slect dropdown", async ({ page }) => {

    await page.goto("https://demoqa.com/select-menu");
    await page.locator("#cars").selectOption(["volvo", "audi"]);

});