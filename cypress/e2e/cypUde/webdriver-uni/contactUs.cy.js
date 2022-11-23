///<reference types='cypress'/>
/// <reference types="cypress-xpath"/>

describe('Test contact us form via WebdriverUni', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.document().should("have.property" , 'charset').and('eq' , "UTF-8") 
    });

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.get('#contact-us').invoke('removeAttr' , 'target').click();
        cy.url().should('include' , 'contactus');
        // cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').should("have.attr" , "placeholder" , "First Name").type('Emil');
        cy.get('[name="last_name"]').should("have.attr" , "placeholder" , "Last Name").type('Gambarli');
        cy.get('[name="email"]').type('emil@gmail.com');
        cy.get('textarea.feedback-input').type('lorem ipsum dolor sit amet');
        cy.get('[type="reset"]').click();
        cy.get('[name="first_name"]').type('Emil');
        cy.get('[name="last_name"]').type('Gambarli');
        cy.get('[name="email"]').type('emil@gmail.com');
        cy.get('textarea.feedback-input').type('lorem ipsum dolor sit amet');
        cy.get('[type="submit"]').click();
        cy.xpath('//div[@id = "contact_reply"]/h1').should('have.text' , 'Thank You for your Message!')
    });

    xit('Should not be able to submit a successful submission via contact us form', () => {
        cy.get('#contact-us').invoke('removeAttr' , 'target').click();
        // cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').type('Emil');
        cy.get('[name="last_name"]').type('Gambarli');
        // cy.get('[name="last_name"]').
        cy.get('textarea.feedback-input').type('lorem ipsum dolor sit amet');
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required');
        
        
    });
});


