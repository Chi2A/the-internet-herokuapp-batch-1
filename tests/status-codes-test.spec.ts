import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { StatusCodesPage } from "../pages/ status-codes-page";

test("Status Codes Validation", async ({ page }) => {
  let homePage = new HomePage(page);
  let statusCodesPage = new StatusCodesPage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await homePage.clickOnLink("Status Codes");
  await statusCodesPage.clickStatusCode(200);
  await statusCodesPage.validateMessage(
    "This page returned a 200 status code."
  );
  await statusCodesPage.clickStatusCode(301);
  await statusCodesPage.validateMessage(
    "This page returned a 301 status code."
  );
  await statusCodesPage.clickStatusCode(404);
  await statusCodesPage.validateMessage(
    "This page returned a 404 status code."
  );
  await statusCodesPage.clickStatusCode(500);
  await statusCodesPage.validateMessage(
    "This page returned a 500 status code."
  );
});
