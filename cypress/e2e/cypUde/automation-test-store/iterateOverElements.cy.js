///<reference types="cypress"/>

describe('Iterating over the elements', () => {
    beforeEach(() => {
        cy.saytaGet('automationteststore');
    })
    it('Displaying names of each element', () => {
        cy.servisAdı('Hair Care');
        cy.bütünServislər();
    });

    it('Should add selected product to the card', () => {
        cy.selectProduct('Tropiques Minerale Loose Bronzer');
    });

    it('Should add selected product to the card', () => {
        cy.selectProduct('Skinsheen Bronzer Stick');
    });

    it('Should add selected product to the card', () => {
        cy.selectProduct('Total Moisture Facial Cream');
    });

});




