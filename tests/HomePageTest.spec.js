const {test, expect} = require('@playwright/test');
const { title } = require('process');

test('Home Page', async ({page})=>{

    await page.goto('https://www.wafilife.com/');

    const pageTitle = page.title();
    console.log('Page title is :', pageTitle);

    await expect(page).toHaveTitle('Buy Islamic Books - Online Book Shop in Bangladesh | Wafilife');

    // const pageURL = PageTransitionEvent.url();
    // console.log('page url is : ', pageURL);
    // await expect(page).toHaveURL('https://www.wafilife.com/');

    await page.close();
})