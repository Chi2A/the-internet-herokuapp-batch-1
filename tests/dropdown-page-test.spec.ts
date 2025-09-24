import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { DropdownPage } from "../pages/dropdown-page";
test("Dropdown validation", async ({ page }) => {
  let dropdownPage = new DropdownPage(page);
  let homePage = new HomePage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await homePage.navigateToDropdown();
  await dropdownPage.selectOption("Option 1");
  await dropdownPage.validationofOptionList("1");
});
