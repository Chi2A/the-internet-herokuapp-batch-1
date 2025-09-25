import { expect, Locator, Page } from '@playwright/test'
export class NotificationMessagePage { 
    notificationMessageTitleLocator: Locator;
    clickHereLinkLocator: Locator;
    blueBoxMessageLocator: Locator;

    constructor(page: Page) { 
        this.notificationMessageTitleLocator = page.getByRole("heading", {
          name: "Notification Message",
        });
        this.clickHereLinkLocator = page.getByRole("link", {
          name: "Click here",
        });
        this.blueBoxMessageLocator = page.locator("div#flash");
    }
    async validateNotificationMessage(expectedText: string): Promise<void> { 
        await expect(this.notificationMessageTitleLocator).toHaveText(expectedText)
    }
    async navigateToClickHereLink(): Promise<void> { 
        await this.clickHereLinkLocator.click();

    }
    async validateBlueBoxMessage(expectedMessage: string[]): Promise<void> { 
        let actualText = await this.blueBoxMessageLocator.innerText();
        await expect(actualText).toContain(expectedMessage);
    }

}