///<reference types="cypress"/>

describe('Iterating over the elements', () => {
    it('Displaying names of each element', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").each(($el, i, $list) => {
            cy.log('index ' + i + ':' + $el.text() );

        })
    });
    it('Clicks on element that we selected from iterate', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").each(($el, i, $list) => {
            $el.text().includes("Eau Parfumee au The Vert Shampoo") ? cy.wrap($el).click() : ""; 

        })
    });
    it('should ', function () {

    });

});




