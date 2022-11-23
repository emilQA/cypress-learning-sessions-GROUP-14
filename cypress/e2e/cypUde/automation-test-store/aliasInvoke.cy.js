///<reference types="cypress"/>

describe('Iterating over the elements', () => {
    it('Displaying names of each element', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt' , 5);
        cy.get('@productThumbnail').should('include' , 'Seaweed Conditioner')

    });  
    it.only('task', () => {
        cy.visit('https://automationteststore.com/');       
        
        cy.get('.prdocutname')

    });
});


