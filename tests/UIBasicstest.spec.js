import { test, expect } from '@playwright/test';

test('Registration Playwright test', async ({page})=> {
    await page.goto("https://ua.puma.com/uk/");
    console.log(await page.title());
    //css, xpath
    await page.locator('#register').click();
    await page.locator('#username').fill('dkkkk');
    await page.locator('#passwordenter').fill('password1Q');
    await page.locator('@signIn').click();
    //await page.waitForLoadState('networkidle');
    const titles = await page.locator('card-body').allTextContents();
    console.log(titles);
});

test('Page Playwright test', async ({page})=> {
    await page.goto("https://google.com");
    //get title -> assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test ("UI Controls", async ({page}) => {
    await page.goto("https://ua.puma.com/uk/");
    console.log(await page.title());
    await page.locator('#register').click();
    await page.locator('#username').fill('dkkkk');
    await page.locator('#passwordenter').fill('password1Q');
    const dropdown = page.locator('select.form-constrol');
    await dropdown.selectOption('consult');
    await page.locator('radiotexty').last().click();
    await page.locator('okaybtn').click();
    await expect(page.locator('radiotexty').last()).toBeChecked();
    console.log(await (page.locator('radiotexty').last()).isChecked()); //boolean
    await page.locator('#terms').click();
    await expect(page.locator('terms')).toBeChecked();
    await page.locator('terms').uncheck();
    expect(await page.locator('terms').isChecked()).toBeFalsy();
    await page.pause();
});

test("Child window handle", async ({ browser }) => {
    const context = await browser.newContext();  
    const page = await context.newPage();        
    await page.goto("https://ua.puma.com/uk/");
    const documentLink = page.locator('a');  
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ]);
    await newPage.waitForLoadState();
    // Отримуємо текст з елемента з класом .red
    const text = await newPage.locator('.red').textContent();
    console.log(text);
});

