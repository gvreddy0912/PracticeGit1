import { test } from "@playwright/test";

test("practice of Locator Method", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator('//input[@name="user-name"]').fill("standard_user"); //Xpath selector
  await page.locator("input#password").fill("secret_sauce"); //css selector
  await page.locator(`.submit-button`).click(); //css selector
  await page.locator("text=Sauce Labs Backpack").click(); //text selector
});

test("practice of Locator Method with options", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page
    .locator(".form_group", { has: page.locator("input#user-name") })
    .click(); //has
  await page
    .locator(".form_group", { has: page.locator("input#user-name") })
    .pressSequentially("standard_user");

  await page
    .locator(".form_group", { hasNot: page.locator("input#user-name") })
    .click(); //hasNot
  await page
    .locator(".form_group", { hasNot: page.locator("input#user-name") })
    .pressSequentially("secret_sauce");

  await page.locator("#login-button").click();

  // await page.locator('//a', {hasText: 'Sauce Labs Backpack'}).click();  //hasText
  await page.locator(".inventory_item_name", { hasNotText: /Sauce.*/ }).click();
});

test("practice of getBy methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/login");
  await page.getByLabel("Email").fill("gvreddy127@gmail.com");

  await page.getByPlaceholder('Search store').fill("computer");
  await page.getByRole("button", { name: "Search" }).click();
  
});
