import { test, expect } from '@playwright/test';

test('should login', async ({ page }) => {
  await page.goto('https://playwright.dev/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login/);
  // new comment
});