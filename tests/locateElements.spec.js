// const { test, expect} = require('@playwright/test');
import {test,expect} from '@playwright/test'

// test block

test('locator', async({page})=>{

    await page.goto("https://www.wafilife.com/");

    // await page.locator("//a[@title='আমার অ্যাকাউন্ট']").click();
    await page.click("//a[@title='আমার অ্যাকাউন্ট']");

})