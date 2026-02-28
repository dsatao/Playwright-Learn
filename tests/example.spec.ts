import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {

  test('login loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL("http://localhost:5227/Account/Login");
    console.log('✅ Login page loaded');
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill('admin');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL("http://localhost:5227/");
    console.log('✅ Login successful, homepage loaded');
  });

  test('logout buttons are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL("http://localhost:5227/Account/Login");
    console.log('✅ Login page loaded');
    await page.locator('#username').fill('admin');
    await page.locator('#password').fill('admin');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL("http://localhost:5227/");
    console.log('✅ Login successful, homepage loaded');
    await expect(page.locator('body > div > form > button')).toBeVisible();
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/Home/About');
    await expect(page.locator('h1')).toBeVisible();
  });

});

