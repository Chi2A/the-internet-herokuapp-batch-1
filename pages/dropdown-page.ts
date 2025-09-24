import { expect, Page, Locator } from "@playwright/test";
export class DropdownPage {
  private selectDropDown: Locator;
  constructor(page: Page) {
    this.selectDropDown = page.locator('#dropdown');
  }
  async selectOption(optionText: string): Promise<void> {
      await this.selectDropDown.selectOption({label: optionText});
  }
  async validateSelectedOption(expectedOptionValue: string): Promise<void> {
    await expect(this.selectDropDown).toHaveValue(expectedOptionValue);
  }
}
