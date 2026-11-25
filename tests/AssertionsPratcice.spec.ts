import { test, expect } from "@playwright/test";
// import expect = require('@playwright/test');

test("Assertion Practice", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);
  await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
  //   await expect(page.locator('[data-test="login-button"]')).toBeDisabled();
  await expect(page.locator('[data-test="login-button"]')).toHaveText("Login");

  await expect(page.locator('[data-test="login-button"]')).toHaveAttribute(
    "name",
    "login-button",
  );

  await expect(page.locator('[data-test="login-button"]')).toHaveId(
    "login-button",
  );

  await expect(page).toHaveURL("https://www.saucedemo.com/");

  await expect(page).toHaveTitle("Swag Labs");

  //Non - retrying assertions
  expect(5).toBe(5);

  expect(page).not.toHaveTitle("Swag Labs1");
});
