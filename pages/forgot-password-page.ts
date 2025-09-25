import { expect, Locator, Page } from "@playwright/test";
export class ForgotPasswordPage {
  emailFieldLocator: Locator;
    resetPasswordMessageLocator: Locator;
    retrievePasswordButton: Locator;

  constructor(page: Page) {
    this.emailFieldLocator = page.getByRole("textbox", { name: "E-mail" });
    this.retrievePasswordButton = page.getByRole("button", {
      name: "Retrieve password",
    });
  }
  async enterEmail(email: string): Promise<void> {
    await this.emailFieldLocator.fill(email);
  }
    async clickRetrievePasswordButton(): Promise<void> { 
        await this.retrievePasswordButton.click();
    }
  
}


