class LoginPage{
    constructor(page){
        this.page = page;
        this.signInButton = page.locator('[value="Login"]');
        this.userName = page.locator('#username');
        this.password = page.locator('#passwordenter');
    
    }

    async goTo() {
        await page.goTo('https://ua.puma.com/uk/');
    }

    async validLogin(username, password){
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.waitForLoadState('networkidle');
    }
    }
    module.exports = {LoginPage};