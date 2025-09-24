import { expect, Locator, Page } from "@playwright/test";
export class StatusCodesPage {
  status200CodeLocator: Locator;
  status301CodeLocator: Locator;
  status404CodeLocator: Locator;
  status500CodeLocator: Locator;
  expectedMessageLocator: Locator;
  constructor(page: Page) {
    this.status200CodeLocator = page.getByRole('link', { name: '200' });
    this.status301CodeLocator = page.getByRole("link", { name: "301" });
    this.status404CodeLocator = page.getByRole("link", { name: "404" });
    this.status500CodeLocator = page.getByRole("link", { name: "500" });
    this.expectedMessageLocator = page.getByText('This page returned a')
  }
    async clickStatusCode(statusCode: number): Promise<void> {
        if (statusCode === 200) {
          await this.status200CodeLocator.click();
        } else if (statusCode === 301) {
          await this.status301CodeLocator.click();
        } else if (statusCode === 404) {
          await this.status404CodeLocator.click();
        } else if (statusCode === 500) {
          await this.status500CodeLocator.click();
        }
        

  }
  async validateMessage(expectedMessage: string): Promise<void> {
    await expect(this.expectedMessageLocator).toHaveText(expectedMessage);
  }
}
