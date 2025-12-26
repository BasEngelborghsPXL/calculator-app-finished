const { test, expect } = require('@playwright/test');

test('PXL Sid-in flow', async ({ page }) => {
  await page.goto('https://www.pxl.be');

  await expect(page.getByText('International')).toBeVisible();

  await page.getByRole('link', { name: 'international' }).click();

  await expect(page.getByText('Research')).toBeVisible();

  await page.getByRole('link', { name: 'research' }).click();

});