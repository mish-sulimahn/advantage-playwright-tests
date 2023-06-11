import { test, expect } from '@playwright/test';

test('Make sure tests can fail', async({page})=> {
    test.fail()
    await page.goto('https://advantageonlineshopping.com/#/');

    //check that the new user is logged in
    await expect(page.locator('span.hi-user.containMiniTitle.ng-binding > #text')).toEqual('MishTest');
})

test('Login with pre created user', async ({page}) => {

    //login with the pre made user
    await page.goto('https://advantageonlineshopping.com/#/');
    await page.click("#menuUser")
    await page.locator('input[name="username"]').type('MishTest');
    await page.locator('input[name="password"]').type('Testing1');
    await page.getByRole('button', { name: 'SIGN IN' }).click(); // does not seem to be working in headless mode "element is outside of the viewport"
    
    
    const locator = await page.locator('span.hi-user.containMiniTitle.ng-binding', { hasText: 'MishTest'});
    const userName = await locator.textContent();
  
    //check that the new user is logged in
    await console.log(userName);
    await expect(userName).toEqual('MishTest');
})

test('Logout with precreated user', async ({page})  => {
    //login with the pre made user
    await page.goto('https://advantageonlineshopping.com/#/');
    await page.click("#menuUser")
    await page.locator('input[name="username"]').type('MishTest');
    await page.locator('input[name="password"]').type('Testing1');
    await page.getByRole('button', { name: 'SIGN IN' }).click();

    //logout with the pre made user
    await page.getByRole('link', { name: 'UserMenu' }).click();
    await page.getByRole('link', { name: 'Sign out' }).click();
    
    //check that log out functions
    const locator = await page.locator('span.hi-user.containMiniTitle.ng-binding.ng-hide');
    await expect(locator).toBeTruthy;
})
