import { expect, Page, Locator } from "@playwright/test";
export class HomePage {
    mainTitleLocator: Locator;
    homePageContentLink: Locator;
  constructor(page: Page) {
    this.mainTitleLocator = page.locator('h1[class="heading"]');
    this.homePageContentLink = page.locator("div[id='content'] ul li");
  }
  async validateMainTitle(expectedTitle: string): Promise<void> {
    await expect(this.mainTitleLocator).toHaveText(expectedTitle);
  }
  async clickOnLink(linkName: string): Promise<void> {
      await this.homePageContentLink.getByText(linkName).click();
  }
}
