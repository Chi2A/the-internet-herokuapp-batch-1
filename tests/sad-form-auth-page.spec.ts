import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { FormAuthenticationPage } from "../pages/sad-form-authentication-page";

test("Form Authentification Negative UserName Validation", async ({ page }) => {
  let homePage = new HomePage(page);
  let formAuthenticationPage = new FormAuthenticationPage(page);


  await page.goto("https://the-internet.herokuapp.com/");
  await homePage.clickOnFormAuthLink();
  await formAuthenticationPage.login("omsmith", "SuperSecretPassword!");
  await formAuthenticationPage.verifyErrorUserNameMessage("Your username is invalid! ×");
});

test("Form Authentification Negative Password Validation", async ({ page }) => {
  let homePage = new HomePage(page);
  let formAuthenticationPage = new FormAuthenticationPage(page);

  await page.goto("https://the-internet.herokuapp.com/");
  await homePage.clickOnFormAuthLink();
  await formAuthenticationPage.login("tomsmith", "SuperSecretPassword");
  await formAuthenticationPage.verifyErrorPasswordMessage(
    "Your password is invalid! ×"
  );
});