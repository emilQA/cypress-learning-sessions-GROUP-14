class HomePage {
    accessHomePage() {
        cy.visit('https://automationteststore.com/');
    }

    elements = {
        topMenuItem: () => cy.get('a[href*="product/category&path="]').contains('Hair Care') //-->30
    }

    clickTo_TopMenuItem() {
        this.elements.topMenuItem().click()
    }

}






module.exports = new HomePage;