///<reference types="cypress"/>
import HomePage from "../../../support/page_objects/automationStore/Home_Page_autoStore";
import ProductAddToCartPage from "../../../support/page_objects/automationStore/Add_One_Selected_Product_To_Cart_Page";

describe('Iterating over the elements', () => {
    beforeEach(() => {
        cy.saytaGet('automationteststore');
    })
    it('Displaying names of each element', () => {
        cy.servisAdı('Hair Care');
        cy.butunMallar();
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

    it('Should add selected product to the card via POM', () => {
        // HomePage.accessHomePage();
        ProductAddToCartPage.addProductToCartAndVerifyIt('Skinsheen Bronzer Stick')
    });

});




