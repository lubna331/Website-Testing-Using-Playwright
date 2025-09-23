import {test, expect} from '@playwright/test';
import { AuthorPage } from '../pages/AuthorPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';


test('test', async({page})=>{

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('harry@potter.com','12341234');
    

    //Author
    const author = new AuthorPage(page);
    await author.authorpage();
    
    //Cart
    const cart = new CartPage(page);
    await cart.cartpage();
    await cart.billingDetails('Harry Potter','012345679','hogwartowl@letter.com','Oxford,England');
});
