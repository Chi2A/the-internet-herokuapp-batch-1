import { expect, Page, Locator } from "@playwright/test";
export class FormAuthenticationPage {
  usernameFieldLocator: Locator;
  passwordFieldLocator: Locator;
  loginButtonLocator: Locator;
  logoutMessageLocator: Locator;

  constructor(page: Page) {
    this.usernameFieldLocator = page.getByRole("textbox", { name: "Username" });
    this.passwordFieldLocator = page.getByRole("textbox", { name: "Password" });
    this.loginButtonLocator = page.getByRole("button", { name: " Login" });
    this.logoutMessageLocator = page.getByText("You logged out of the secure");
  }
  async login(username: string, password: string): Promise<void> {
    await this.usernameFieldLocator.fill(username);
    await this.passwordFieldLocator.fill(password);
    await this.loginButtonLocator.click();
  }
  async verifyLogoutMessage(expectedText: string): Promise<void> {
    expect(this.logoutMessageLocator).toContainText(expectedText);
  }
}
