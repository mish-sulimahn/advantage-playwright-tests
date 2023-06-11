import { test, expect } from '@playwright/test';

test('Registration page validation', async ({ page }) => {
    await page.goto('https://advantageonlineshopping.com/#/register');
  
    await page.locator('input[name="usernameRegisterPage"]').type('aaa');
    await page.locator('input[name="emailRegisterPage"]').click();
    await expect(page.getByText('Use 5 character or longer', { exact: true })).toBeVisible;
    //"Use 5 characters or longer" this should read.
    
    await page.locator('input[name="emailRegisterPage"]').type('aaa');
    await page.locator('input[name="passwordRegisterPage"]').click();;
    await page.getByText('Use 5 character or longer', { exact: true }).click();
    //"Your email address is not formatted correctly"
    
    await page.locator('input[name="usernameRegisterPage"]').clear();
})