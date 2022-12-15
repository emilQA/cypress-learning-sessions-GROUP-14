///<reference types="cypress"/>

describe('Add multiple items to the basket', () => {
    before(function () {
        cy.fixture('products').then(function (data) {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        cy.saytaGet('automationteststore');
        cy.servisAdı('Hair Care');
    })
    it('Add spesific items to the basket', () => {
        globalThis.data.productName.forEach(element => {
            cy.addProductsToBasket(element)
        });
    });



});




