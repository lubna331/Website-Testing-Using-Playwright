import {test, expect} from '@playwright/test';
import { AuthorPage } from '../pages/AuthorPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';


test('test', async({page})=>{

    //Home


    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('Lubna','12341234');
    await page.waitForTimeout(3000);

    //Cart

});
