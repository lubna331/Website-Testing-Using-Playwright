# Website-Testing-Using-Playwright

## Project Overview
This project automates the end-to-end flow of Wafilife bookstore using **Playwright** with the Page Object Model (POM).  
The test covers login, selecting an author, purchasing a book, filling in billing details, and verifying checkout flow.

---

## Features Automated
- **Login** with valid credentials  
- **Select Author** from the menu  
- **Choose Book** and add to cart  
- **Go to Cart** and proceed to checkout  
- **Fill Billing Details** (name, phone, email, district, area, address)  
- **Place Order** successfully  
- **Generate Test Report** (via Playwright Test HTML report)

---

## Tools & Technologies
- [Playwright](https://playwright.dev/)  
- JavaScript (Node.js)  
- Page Object Model (POM) structure  
- Playwright Test HTML Reporter  

---

## Project Structure
```
Bookstore-Automation/
│
├── pages/                   # Page Object classes
│   ├── LoginPage.js
│   ├── AuthorPage.js
│   └── CartPage.js
│
├── tests/                   # Test files
│   └── POMtest.spec.js
├── playwright.config.js     # Playwright configuration file
└── README.md 
