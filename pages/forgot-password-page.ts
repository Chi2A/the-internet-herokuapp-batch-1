import { expect, Locator, Page } from "@playwright/test";
export class ForgotPasswordPage {
  emailFieldLocator: Locator;
  resetPasswordMessageLocator: Locator;

  constructor(page: Page) {
    this.emailFieldLocator = page.getByRole("textbox", { name: "E-mail" });
    this.resetPasswordMessageLocator = page.getByRole("heading", {
      name: "Internal Server Error",
    });
  }
  async enterEmail(email: string): Promise<void> {
    await this.emailFieldLocator.fill(email);
  }
  async validateResetPasswordMessage(expectedMessage: string): Promise<void> {
    await expect(this.resetPasswordMessageLocator).toHaveText(expectedMessage);
  }
}


