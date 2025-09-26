import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { CheckboxPage } from "../pages/checkbox-page";
test("Checkbox 1 Validation", async ({ page }) => {
  let homePage = new HomePage(page);
  let checkBoxPage = new CheckboxPage(page);
  await page.goto("https://the-internet.herokuapp.com");
  await homePage.navigateToCheckboxLink();
  await checkBoxPage.validateCheckbox1IsNotChecked();
  await checkBoxPage.validateCheckbox2IsChecked();
  await checkBoxPage.clickCheckBox1();
  await checkBoxPage.validateCheckBox1IsChecked();
});
