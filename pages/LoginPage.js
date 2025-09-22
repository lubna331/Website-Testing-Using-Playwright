exports.LoginPage = 
class LoginPage {

    constructor(page){
        this.page = page;
        this.gotoLogin = "//a[@title='আমার অ্যাকাউন্ট']";
        this.usernameInput = "//input[@id='username']";
        this.passwordInput = "//input[@id='password']";
        this.loginButton = "//input[@name='login']";
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.wafilife.com/");
    }

    async login(username, password){
        await this.page.click(this.gotoLogin);
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.click(this.loginButton);
    }
}