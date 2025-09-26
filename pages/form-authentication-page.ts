import { expect, Page, Locator } from "@playwright/test";
export class FormAuthenticationPage {
  usernameFieldLocator: Locator;
  passwordFieldLocator: Locator;
  loginButtonLocator: Locator;

  constructor(page: Page) {
    this.usernameFieldLocator = page.getByRole("textbox", { name: "Username" });
    this.passwordFieldLocator = page.getByRole("textbox", { name: "Password" });
    this.loginButtonLocator = page.getByRole("button", { name: " Login" });
  }
  async login(username: string, password: string): Promise<void> {
    await this.usernameFieldLocator.fill(username);
    await this.passwordFieldLocator.fill(password);
    await this.loginButtonLocator.click();
  }
}
