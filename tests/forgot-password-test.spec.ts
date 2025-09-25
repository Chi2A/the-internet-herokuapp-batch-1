import { test } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ForgotPasswordPage } from "../pages/forgot-password-page";
import { ErrorPage } from "../pages/error-page";

test('Forgot Password Error Message validation', async ({ page }) => { 

    let homePage = new HomePage(page);
    let forgotPasswordPage = new ForgotPasswordPage(page);
    let errorPage = new ErrorPage(page);

    await page.goto("https://the-internet.herokuapp.com/");
    await homePage.clickOnForgotPasswordLink();
    await forgotPasswordPage.enterEmail('sarah23@gmail.com');
    await forgotPasswordPage.clickRetrievePasswordButton();
    await errorPage.validateErrorMessage('Internal Server Error');
})