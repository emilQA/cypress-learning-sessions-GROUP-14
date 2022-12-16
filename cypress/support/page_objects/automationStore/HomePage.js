class HomePage {
    accessHomePage() {
        cy.visit('https://automationteststore.com/');
    }
    elements = {
        listedProducts: () => cy.get(".fixed_wrapper .prdocutname"),
        // productPage
        productTitle: () => cy.get('.bgnone'),
        addtoCartButton: () => cy.get('.cart'),
        productNameInBasket: () => cy.get('.name > a'),
    }

    // METHODS
    addProductToCartAndVerifyIt(productName) {
        this.elements.listedProducts().each(($el, i, $list) => {
            $el.text().includes(productName) ? cy.wrap($el).click() : "";
        })
        this.elements.productTitle().should('have.text', productName);
        this.elements.addtoCartButton().click()
        this.elements.productNameInBasket().should('have.text', productName);
    }


}






module.exports = new HomePage;