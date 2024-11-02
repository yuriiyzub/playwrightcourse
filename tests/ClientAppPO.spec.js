import { test, expect } from '@playwright/test'
const {POManager} = require ("../pageobjects/POManager")

test ("Client App login PO", async ({page}) => {
    const poManager = new POManager();
    const username = "user1@getMaxListeners.com"
    const password = "password1!"
    const productName = 'Zara Coat 4';
    const products = page.locator('.card-body');
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProduct(productName);
    await dashboardPage.navigateToCart();

    //need optimization
    //cart page...
    await page.locator('div li').first().waitFor();

    const bool = await page.locator('h3:has-text("Zara Coat 4")').isVisible();
    expect(bool).toBeTruthy();
    await page.locator('text=Checkout').click();
    await page.locator('#placeholder').pressSequentially('ind');
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator('button').count();
    for (let i = 0; 0 < optionsCount; ++i){
       const text = await dropdown.locator('button').nth(1).textContent();
       if (text === "India"){
        await dropdown.locator('button').nth(i).click();
        break;
       }
    }
    expect(page.locator('.user__name_mail').first()).toHaveText('#currentusreemail');
    await page.locator('#submitform').click();
    await expect (page.locator('hero-primary')).toHaveText('Thank you for the order')
    const orderId = await page.locator('orderId').textContent();
    console.log(orderId);
    await page.locator('button1').click();
    const rows = await page.locator('tbody tr');

    for(let i = 0; i < await rows.count(); ++i){
        const roOrderId = await rows.nth(i).locator('th').textContent();

    }
});