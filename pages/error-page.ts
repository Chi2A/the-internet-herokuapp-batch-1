
import { Page, Locator, expect } from '@playwright/test';
export class ErrorPage { 
    errorMessageLocator: Locator;

    constructor(page: Page) { 
    this.errorMessageLocator = page.getByRole("heading", {
          name: "Internal Server Error",
        });
    }
    async validateErrorMessage(expectedMessage): Promise<void> { 
        await expect(this.errorMessageLocator).toHaveText(expectedMessage);
    }

}