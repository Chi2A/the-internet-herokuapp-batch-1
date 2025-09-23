import { expect, Page, Locator } from "@playwright/test";
export class HomePage {
  mainTitleLocator: Locator;
  constructor(page: Page) {
    this.mainTitleLocator = page.locator('h1[class="heading"]');
  }
  async validateMainTitle(expectedTitle: string): Promise<void> {
    await expect(this.mainTitleLocator).toHaveText(expectedTitle);
  }
}
