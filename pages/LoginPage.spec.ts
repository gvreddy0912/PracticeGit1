import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.usernameTextBox = page.locator("id=user-name");
    this.passwordTextBox = page.locator("id=password");
    this.loginButton = page.locator("id=login-button");
  }

  async opnenApplication() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.usernameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }
}
