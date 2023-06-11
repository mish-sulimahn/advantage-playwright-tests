import { test, expect } from '@playwright/test';
import { Guid } from "guid-typescript";

const userName = Guid.create().toString().substring(0, 10);

test('Registration page exists', async ({ page }) => {
  await page.goto('https://advantageonlineshopping.com/');
  await page.click("#menuUser")
  await page.click(".create-new-account")

  // Expects to be at the registration page
  await expect(page).toHaveURL(/.*register/);
});

test('Create a new user', async ({page}) => {

  //unable to get feedback that the registration is complete? In which case I have to do a login to check it is created successfully
  await page.goto('https://advantageonlineshopping.com/#/register');

  //account details
  await page.locator('input[name="usernameRegisterPage"]').type(userName);
  await page.locator('input[name="emailRegisterPage"]').type('test@test.com');
  await page.locator('input[name="passwordRegisterPage"]').type('Testing1');
  await page.locator('input[name="confirm_passwordRegisterPage"]').type('Testing1');

  //agree to terms, disagree with offers
  await page.locator('input[name="i_agree"]').check();
  await page.locator('input[name="allowOffersPromotion"]').uncheck();

  //register
  await page.getByRole('button', { name: 'REGISTER' }).click();
})

