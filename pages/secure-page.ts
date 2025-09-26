import { expect, Locator, Page } from "@playwright/test";

export class SecurePage {
  successfullMessageLocator: Locator;
  errorMessageLocator: Locator;
  logoutButtonLocator: Locator;

  constructor(page: Page) {
    this.successfullMessageLocator = page.getByText(
      "You logged into a secure area"
    );
    
    this.errorMessageLocator = page.getByText("You logged out of the secure");
    this.logoutButtonLocator = page.getByRole("link", { name: "Logout" });
  }

  async verifySuccessfullMessage(expectedText: string): Promise<void> {
    await expect(this.successfullMessageLocator).toHaveText(expectedText);
  }
  async logout(): Promise<void> {
    await this.logoutButtonLocator.click();
  }
  async verifyErrorMessage(expectedText: string): Promise<void> {
    expect(this.errorMessageLocator).toHaveText(expectedText);
  }
}

