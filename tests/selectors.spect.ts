import {test} from '@playwright/test';

test('selctors Xpath', async ({ page }) => {
    
await page.goto('https://www.saucedemo.com');
await page.locator('//input[@name="user-name"]').fill('standard_user');  //Xpath selector
await page.locator('input#password]').fill('secret_sauce');   //css selector
await page.locator(`.submit-button`).click();  //css selector

});