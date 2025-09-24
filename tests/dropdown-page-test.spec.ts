import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { DropdownPage } from "../pages/dropdown-page";
test("Dropdown validation Option 1 ", async ({ page }) => {
  let dropdownPage = new DropdownPage(page);
  let homePage = new HomePage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await homePage.clickOnLink('Dropdown')
  await dropdownPage.selectOption('Option 1');
    await dropdownPage.validateSelectedOptionValue('1')
});

test("Dropdown validation Option 2 ", async ({ page }) => {
    let dropdownPage = new DropdownPage(page);
    let homePage = new HomePage(page);
    await page.goto("https://the-internet.herokuapp.com/");
    await homePage.clickOnLink('Dropdown')
    await dropdownPage.selectOption('Option 2');
    await dropdownPage.validateSelectedOptionValue('2')
})
