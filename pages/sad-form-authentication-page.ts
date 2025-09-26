import { expect, Page, Locator } from "@playwright/test";
export class FormAuthenticationPage {
  usernameFieldLocator: Locator;
  passwordFieldLocator: Locator;
  loginButtonLocator: Locator;
    errorUserNameMessageLocator: Locator;
    errorPasswordMessageLocator:Locator;

  constructor(page: Page) {
    this.usernameFieldLocator = page.getByRole("textbox", { name: "Username" });
    this.passwordFieldLocator = page.getByRole("textbox", { name: "Password" });
      this.loginButtonLocator = page.getByRole("button", { name: " Login" });
      this.errorUserNameMessageLocator = page.getByText("Your username is invalid! ×");
      this.errorPasswordMessageLocator = page.getByText(
        "Your password is invalid! ×"
      );
  }
    async login(username: string, password: string): Promise<void> {
        await this.usernameFieldLocator.fill(username);
        await this.passwordFieldLocator.fill(password);
        await this.loginButtonLocator.click();
    }
      
      async verifyErrorUserNameMessage(expectedText: string): Promise < void> {
    await expect(this.errorUserNameMessageLocator).toContainText(expectedText);
  }

  async verifyErrorPasswordMessage(expectedText: string): Promise < void> {
    await expect(this.errorPasswordMessageLocator).toContainText(expectedText);
  }

}