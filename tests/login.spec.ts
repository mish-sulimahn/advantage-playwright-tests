import { test, expect } from '@playwright/test';

test('Login with new user to validate user creation', async ({page}) => {

    //login with the pre made user
    await page.goto('https://advantageonlineshopping.com/#/');
    await page.click("#menuUser")
    await page.locator('input[name="username"]').type('MishTest');
    await page.locator('input[name="password"]').type('Testing1');
    await page.locator('#sign_in_btnundefined').click();
  
    //check that the new user is logged in
    await expect(page.locator('#menuUserLink > span')).toHaveText('MishTest');
})