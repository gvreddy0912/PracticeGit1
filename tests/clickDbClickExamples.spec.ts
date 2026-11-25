import { test } from "@playwright/test";

test("Click and Double-Click Examples", async ({ page }) => {
  // await page.goto('https://staging.engineer.ai/home')

  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await page.getByRole("button", { name: "Add Element" }).dblclick();
});
