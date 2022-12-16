///<reference types="cypress"/>
import HomePage from "../../../support/page_objects/automationStore/HomePage";


describe('Iterating over the elements', () => {
    // beforeEach(() => {
    //     cy.saytaGet('automationteststore');
    // })
    // it('Displaying names of each element', () => {
    //     cy.servisAdı('Hair Care');
    //     cy.butunMallar();
    // });

    // it('Should add selected product to the card', () => {
    //     cy.selectProduct('Tropiques Minerale Loose Bronzer');
    // });

    // it('Should add selected product to the card', () => {
    //     cy.selectProduct('Skinsheen Bronzer Stick');
    // });

    // it('Should add selected product to the card', () => {
    //     cy.selectProduct('Total Moisture Facial Cream');
    // });
    
    it('testing POM', () => {
        HomePage.accessHomePage()
        HomePage.addProductToCartAndVerifyIt('Skinsheen Bronzer Stick')
    });

});




