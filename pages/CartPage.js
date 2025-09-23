exports.CartPage =
class CartPage {

    constructor(page){
        this.page = page;
        this.cartLogo = "//a[@title='View your shopping cart']";
        this.placeOrder = "//a[contains(text(),'অর্ডার করুন')]";
        this.nameInput = "//input[@id='billing_first_name']";
        this.phoneInput = "//input[@id='billing_phone']";
        this.emailInput = "//input[@id='billing_email']";
        this.districtDropdown = '#select2-billing_state-container';
        this.districtOption = 'ul.select2-results__options li';
        this.areaInput = "billing_area";
        this.addressInput = "//textarea[@id='billing_address_1']";
    }

    async cartpage(){
        await this.page.click(this.cartLogo);
        await this.page.click(this.placeOrder);
    }

    async billingDetails(name,phone,email,address){
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.phoneInput, phone);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.addressInput, address);

        // District (custom Select2 dropdown)
        await this.page.click(this.districtDropdown);
        await this.page.click(this.districtOption);
        await this.page.getByRole('option', { name: 'Cumilla' }).click();
        // Area (normal <select>)
        await this.page.selectOption(this.areaInput, '492');
    }
}