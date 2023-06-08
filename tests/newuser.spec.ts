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

test('Login with new user to validate user creation', async ({page}) => {

  //unable to get feedback that the registration is complete? In which case I have to do a login to check it is created successfully
  await page.goto('https://advantageonlineshopping.com/#/register');

  //account details
  await page.locator('input[name="usernameRegisterPage"]').type(userName);
  await page.locator('input[name="emailRegisterPage"]').type('test@test.com');
  await page.locator('input[name="passwordRegisterPage"]').type('Testing1');
  await page.locator('input[name="confirm_passwordRegisterPage"]').type('Testing1');

  //personal details
  await page.locator('input[name="first_nameRegisterPage"]').type('Test');
  await page.locator('input[name="last_nameRegisterPage"]').type('User');
  await page.locator('input[name="phone_numberRegisterPage"]').type('99999999');

  //address
  await page.getByRole('listbox').selectOption('object:234');
  await page.locator('input[name="cityRegisterPage"]').fill('Trondheim');
  await page.locator('input[name="addressRegisterPage"]').fill('Sunny Way');
  await page.locator('input[name="state_\\/_province_\\/_regionRegisterPage"]').fill('Trøndelag');
  await page.locator('input[name="postal_codeRegisterPage"]').fill('7000');

  //agree to terms, disagree with offers
  await page.locator('input[name="i_agree"]').check();
  await page.locator('input[name="allowOffersPromotion"]').uncheck();

  //register
  await page.getByRole('button', { name: 'REGISTER' }).click();

  //login with the new user
  await page.goto('https://advantageonlineshopping.com/#/');
  await page.click("#menuUser")
  await page.locator('input[name="username"]').type(userName);
  await page.locator('input[name="password"]').type('Testing1');
  await page.locator('#sign_in_btnundefined').click(); // does not seem to be working in headless mode

  //check that the new user is logged in
  await expect(page.locator('#menuUserLink > span')).toHaveText(userName);
})