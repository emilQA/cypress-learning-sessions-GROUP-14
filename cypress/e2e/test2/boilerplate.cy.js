/// <reference types="cypress" />
describe('It should ', function () {
    it('should visit the website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#contact-us > .thumbnail > .section-title').invoke('removeAttr' , 'target').click();
        // cy.get('#contact-us').click({force:true})
        
    });
});


