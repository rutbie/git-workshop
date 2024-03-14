import { test, expect } from '@playwright/test';

test('should logout', async ({ page }) => {
  await page.goto('https://playwright.dev/logout');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Logout/);
  // add comment
  // add another comment
});