import {  Page, Locator,expect } from "@playwright/test";
export class TyposPage {
    typosLinkLocator: Locator;
    expectedTextLocator: Locator;

    constructor(page: Page) {

        this.typosLinkLocator = page.locator('a[href="/typos"]');
        this.expectedTextLocator = page.locator('div[id="content"] p')
    }

    async navigateToTyposPage(): Promise<void> {
        await this.typosLinkLocator.click();
    }

    async validateExpectedText(expectedText: string): Promise<void> {
        await expect(this.expectedTextLocator).toHaveText(expectedText)
    }
}