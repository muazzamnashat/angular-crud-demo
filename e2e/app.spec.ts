import { test, expect } from '@playwright/test';

test.describe('Angular CRUD Demo', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the app to be loaded
    await page.waitForSelector('app-root');
    
    // Basic assertion to ensure the page loaded
    const title = await page.title();
    expect(title).toBeTruthy();
  });
}); 