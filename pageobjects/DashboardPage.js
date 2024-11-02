class DashboardPage
{
constructor(page)
{
    this.products = page.locator('.card-body b');
    this.productsText = page.locator('.card-body b');
    this.cart = page.locator('#clickonthecarticon');
}

async searchProduct(productName)
{
    const titles = await this.productsText.allTextContents();
    console.log(titles);
    const count = await this.products.count();
    for (let i = 0; i < count; ++i ){
        if (await this.products.nth(i).locator('b').textContent() === productName)
        {
            //add to cart
            await this.products.nth(i).locator('text = Add to Cart').click();
            break;
        }}
}
async navigateToCart()
{
    await this.cart.click();
}
}
module.exports = {DashboardPage};