import { test, expect } from '@playwright/test';

test('Registration page validation', async ({ page }) => {
    await page.goto('https://advantageonlineshopping.com/#/register');
  

    await test.step(`Check username`, async () => {
        await page.locator('input[name="usernameRegisterPage"]').type('aaa');
        await page.locator('input[name="emailRegisterPage"]').click();
        await expect(page.getByText('Use 5 character or longer', { exact: true })).toBeVisible;
        //"Use 5 characters or longer" this should read.
    });
    
    await test.step(`Check email address`, async () => {
        await page.locator('input[name="emailRegisterPage"]').type('aaa');
        await page.locator('input[name="passwordRegisterPage"]').click();;
        await expect(page.getByText("Your email address is not formatted correctly", { exact: true })).toBeVisible;
        //"Your email address is not formatted correctly"
    });
    
})