//UI test of Adidas website using GetBy locators

const { test, expect } = require('@playwright/test');

test ('Adidas shop E2E tes. Login', async ({page})=> {
    const email = "kmtlccc@gmail.com";
    await page.goto("https://www.adidas.ua/login");
    console.log(await page.title());
    await page.locator("input.input-field").first().fill('kmt@###@mail.com');
    await page.locator("input.input-field").last().fill('password');
    await page.getByRole("button", {name: "Увійти"}).click();
    await page.waitForLoadState('load');

    await expect(page).toHaveURL('https://www.adidas.ua/account');
//new page, need fixing...
    await page.locator('div.header-icon-menu').click();
    await page.getByText('Чоловіки').click();
    await page.getByText('Одяг').click();
    await page.getByText('Зимові куртки').click();
    await page.waitForLoadState('load');
    await page.getByText('Пуховик Tonal Hooded').allTextContents();
    //new page opens
    await products.nth(i).locator('text = Add to Cart').click();
});