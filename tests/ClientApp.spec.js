// Optimized version of this file is ClientAppPO 

import { test, expect } from '@playwright/test'

test ("Client App login", async ({page}) => {
    const email = "user1@getMaxListeners.com";
    const productName = 'Zara Coat 4';
    const products = page.locator('.card-body');
    await page.goto("https://ua.puma.com/uk/");
    console.log(await page.title());
    //login
    await page.locator('#username').fill('dkkkk');
    await page.locator('#passwordenter').fill('password1Q');
    await page.locator('#signIn').click();
    await page.waitForLoadState('networkidle');
    //add to the cart
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; ++i ){
        if (await products.nth(i).locator('b').textContent() === productName)
        {
        //add to cart
        await products.nth(i).locator('text = Add to Cart').click();
        break;
        }
    }

    await page.locator('#clickonthecarticon').click();
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

