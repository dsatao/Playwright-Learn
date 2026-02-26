import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {

  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Home/);
    console.log('✅ Homepage loaded');
  });

  test('navigation links are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/Home/About');
    await expect(page.locator('h1')).toBeVisible();
  });

});

