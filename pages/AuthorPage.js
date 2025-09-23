exports.AuthorPage = 
class AuhtorPage {

    constructor(page){
        this.page = page;
        this.author = "//span[@class='menu-label-level-0'][contains(text(),'লেখক')]";
        this.authorName = "//h3[normalize-space()='John Sanday']";
        this.book = "//img[@title='Discover-the-Monuments-of-Bangladesh-:-A-Guide-to-their-History,-Location']";
        this.order = "//button[@class='single_add_to_cart_button button alt ']";
    }

    async authorpage(){
        await this.page.click(this.author);
        await this.page.click(this.authorName);
        await this.page.click(this.book);
        await this.page.click(this.order);
    }
}