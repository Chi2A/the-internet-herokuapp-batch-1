import { Page,Locator,expect } from "@playwright/test";
export class HomePage { 
    checkBoxLinkLocator: Locator;

    constructor(page: Page) { 
        this.checkBoxLinkLocator = page.getByRole("link", {
          name: "Checkboxes",
        });
    }
    async navigateToCheckboxLink(): Promise<void> { 
        await this.checkBoxLinkLocator.click();
    }
}
