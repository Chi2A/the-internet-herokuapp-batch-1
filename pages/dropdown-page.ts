import { expect, Page, Locator } from "@playwright/test";

export class DropdownPage {
    dropDownListLocator: Locator;

    constructor(page: Page) {
        this.dropDownListLocator = page.locator('select[id="dropdown"]')
    }
    async selectOption(menuOption: string): Promise<void> {
        await this.dropDownListLocator.selectOption(menuOption)
    }
    async validationofOptionList(expectedOption: string): Promise<void> { 
        await expect(this.dropDownListLocator).toHaveValue(expectedOption)
    }
}