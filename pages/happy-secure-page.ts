import { expect, Locator, Page } from "@playwright/test";

export class SecurePage {
  successfullMessageLocator: Locator;

  logoutButtonLocator: Locator;

  constructor(page: Page) {
    this.successfullMessageLocator = page.getByText(
      "You logged into a secure area"
    );

    this.logoutButtonLocator = page.getByRole("link", { name: "Logout" });
  }

  async verifySuccessfullMessage(expectedText: string): Promise<void> {
    await expect(this.successfullMessageLocator).toContainText(expectedText);
  }
  async logout(): Promise<void> {
    await this.logoutButtonLocator.click();
  }
}
