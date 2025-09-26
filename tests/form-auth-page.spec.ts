import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { FormAuthenticationPage } from "../pages/form-authentication-page";
import { SecurePage } from "../pages/secure-page";

test("Form Authentification Validation", async ({ page }) => {
  let homePage = new HomePage(page);
  let formAuthenticationPage = new FormAuthenticationPage(page);
  let securePage = new SecurePage(page);

  await page.goto("https://the-internet.herokuapp.com/");
  await homePage.clickOnFormAuthLink();
  await formAuthenticationPage.login("tomsmith", "SuperSecretPassword!");
  await securePage.verifySuccessfullMessage("You logged into a secure area!");
  await securePage.logout();
  await formAuthenticationPage.verifyLogoutMessage("You logged out of the secure area!");
});
