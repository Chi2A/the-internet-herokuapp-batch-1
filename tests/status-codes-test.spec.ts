import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { StatusCodesPage } from "../pages/ status-codes-page";

test("Status Codes Validation", async ({ page }) => {
  let homePage = new HomePage(page);
  let statusCodesPage = new StatusCodesPage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await homePage.clickOnLink("Status Codes");
  await statusCodesPage.validateStatusCodesPageMessage('This page returned a 200 status code.');
  await statusCodesPage.validateStatusCodesPageMessage('This page returned a 301 status code.');
  await statusCodesPage.validateStatusCodesPageMessage('This page returned a 404 status code.');
  await statusCodesPage.validateStatusCodesPageMessage('This page returned a 500 status code.');
});
