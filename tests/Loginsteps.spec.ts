import { test, expect } from "@playwright/test";

test("Title verification", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
});

test("Succesfull login verification", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator("#login-button").click();
});

// test("Unsuccesfull login verification", async ({ page }) => {

//     await page.goto("https://www.saucedemo.com/");
//     await page.locator('[data-test="username"]').fill("standard_user_wrong");
//     await page.locator('[data-test="password"]').fill("wrong_password");
//     await page.locator("#login-button").click();
//     await expect(page.locator('[data-test="error"]')).toHaveText(
//       "Epic sadface: Username and password do not match any user in this service"
//     );

//});
