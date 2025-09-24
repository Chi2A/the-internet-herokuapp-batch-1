import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
test("Validation of home page title", async ({ page }) => {
  let homePage = new HomePage(page);
  await page.goto("https://the-internet.herokuapp.com");
  await homePage.validateMainTitle("Welcome to the-internet");
});
