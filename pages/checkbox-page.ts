import { Page, Locator, expect } from "@playwright/test";
import { HomePage } from "./home-page";
export class CheckboxPage {
  checkbox1Locator: Locator;
  checkbox2Locator: Locator;
  constructor(page: Page) {
    this.checkbox1Locator = page.getByRole("checkbox").first();
    this.checkbox2Locator = page.getByRole("checkbox").nth(1);
  }
  async validateCheckbox1IsNotChecked(): Promise<void> {
    await expect(this.checkbox1Locator).not.toBeChecked();
  }
  async validateCheckbox2IsChecked(): Promise<void> {
    await expect(this.checkbox2Locator).toBeChecked();
  }
    async clickCheckBox1(): Promise<void> { 
        await this.checkbox1Locator.click();
    }
  async validateCheckBox1IsChecked(): Promise<void> {
    await expect(this.checkbox1Locator).toBeChecked();
  }
}
