import { expect, Page, Locator } from "@playwright/test";
export class HomePage {
  mainTitleLocator: Locator;
  homePageContentLink: Locator;
    statusCodesLinkLocator: Locator;
    forgotPasswordLinkLocator: Locator;
    notificationMessageLinkLocator: Locator;

  constructor(page: Page) {
    this.mainTitleLocator = page.locator('h1[class="heading"]');
    this.homePageContentLink = page.locator("div[id='content'] ul li");
    this.statusCodesLinkLocator = page.locator('a[href="/status_codes"]');
      this.forgotPasswordLinkLocator = page.getByRole('link', { name: 'Forgot Password' })
      this.notificationMessageLinkLocator = page.getByRole("link", {
        name: "Notification Messages",
      });
  }
  async validateMainTitle(expectedTitle: string): Promise<void> {
    await expect(this.mainTitleLocator).toHaveText(expectedTitle);
  }
  async clickOnLink(linkName: string): Promise<void> {
    await this.homePageContentLink.getByText(linkName).click();
  }
  async clickStatusCodesLink(): Promise<void> {
    await this.statusCodesLinkLocator.click();
} async clickOnForgotPasswordLink(): Promise < void> {
    await this.forgotPasswordLinkLocator.click();
}
    async clickOnNotificationMessage(): Promise<void> { 
        await this.notificationMessageLinkLocator.click();
    }
}
