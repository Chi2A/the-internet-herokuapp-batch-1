import { expect, Locator, Page } from "@playwright/test";
export class StatusCodesPage {
    expectedStatusCodesPageMessage: Locator;
    status200CodeLocator: Locator;
    status301CodeLocator: Locator;
    status404CodeLocator: Locator;
    status500CodeLocator: Locator;
 
    constructor(page: Page) {
        this.expectedStatusCodesPageMessage = page.getByText(
          "HTTP status codes are a"
        );
        this.status200CodeLocator = page.getByRole('link', { name: '200' });
        this.status301CodeLocator = page.getByRole("link", { name: "301" });
        this.status404CodeLocator = page.getByRole("link", { name: "404" });
        this.status500CodeLocator = page.getByRole("link", { name: "500" });
    }
    async validateStatusCodesPageMessage(expectedText: string): Promise<void> {
        await expect (this.expectedStatusCodesPageMessage).toContainText(expectedText);
    }

}