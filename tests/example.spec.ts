import { test, expect } from "@playwright/test";

test("homepage loads successfully", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/The Internet/);
  await expect(page.locator("h1")).toContainText("Welcome to the-internet");
});

test("A/B Testing page navigation", async ({ page }) => {
  await page.goto("/");
  await page.click("text=A/B Testing");
  await expect(page).toHaveURL(/.*abtest/);
  await expect(page.locator("h3")).toContainText("A/B Test");
});
