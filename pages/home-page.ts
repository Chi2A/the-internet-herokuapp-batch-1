import { expect, Page, Locator } from "@playwright/test";

export class HomePage {
  formAuthenticationLinkLocator: Locator;

  constructor(page: Page) {
    this.formAuthenticationLinkLocator = page.getByRole("link", {
      name: "Form Authentication",
    });
  }
  async clickOnFormAuthLink(): Promise<void> {
    await this.formAuthenticationLinkLocator.click();
  }
}
