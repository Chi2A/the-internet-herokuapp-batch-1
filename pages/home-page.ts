import { expect, Page, Locator } from "@playwright/test";
export class HomePage {
    mainTitleLocator: Locator;
    dropdownLocator: Locator;
  constructor(page: Page) {
    this.mainTitleLocator = page.locator('h1[class="heading"]');
    this.dropdownLocator = page.locator('a[href="/dropdown"]');
  }
  async validateMainTitle(expectedTitle: string): Promise<void> {
    await expect(this.mainTitleLocator).toHaveText(expectedTitle);
  }
  async navigateToDropdown(): Promise<void> {
    await this.dropdownLocator.click();
  }
}
