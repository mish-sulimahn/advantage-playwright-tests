import { test, expect } from '@playwright/test';

test('Buying speakers', async ({page}) => {

    //login with the pre made user
    await page.goto('https://advantageonlineshopping.com/#/');
    await page.getByRole('link', { name: 'SpeakersCategory', exact: true }).click();
    await page.getByRole('button', { name: 'BUY NOW' }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    await page.getByRole('button', { name: 'CHECKOUT ($200.00)' }).click();

    //login
    await page.locator('input[name="usernameInOrderPayment"]').click();
    await page.locator('input[name="usernameInOrderPayment"]').fill('MishTest');
    await page.locator('input[name="usernameInOrderPayment"]').press('Tab');
    await page.locator('input[name="passwordInOrderPayment"]').fill('Testing1');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('button', { name: 'NEXT' }).click();

    //pay with safepay
    await page.getByRole('img', { name: 'Safepay' }).click();
    await page.locator('input[name="safepay_username"]').click();
    await page.locator('input[name="safepay_username"]').fill('Mish90');
    await page.locator('input[name="safepay_password"]').click();
    await page.locator('input[name="safepay_password"]').fill('Testing1');
    await page.locator('#pay_now_btn_SAFEPAY').click();
  
})

