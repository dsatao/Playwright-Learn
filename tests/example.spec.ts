import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {

  test('login loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL("http://52.5.210.245/Account/Login");
    console.log('✅ Login page loaded');
  });

 /* test('navigation links are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
  });*/

  test('about page loads', async ({ page }) => {
    await page.goto('/Home/About');
    await expect(page.locator('h1')).toBeVisible();
  });

});

