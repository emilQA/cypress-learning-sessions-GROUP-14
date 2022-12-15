///<reference types='cypress'/>
/// <reference types="cypress-xpath"/>

describe('Test contact us form via WebdriverUni', () => {
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            // this.data = data
            globalThis.data = data
        })
        cy.visit('/');
        cy.document().should("have.property", 'charset').and('eq', "UTF-8")
        cy.get('#contact-us').invoke('removeAttr', 'target').click();

    });

    it.only('Should be able to submit a successful submission via contact us form', () => {
        cy.webdriverUni_contactUs_submission(Cypress.env('first_name'), data.lastName, data.email, data.comment, '//div[@id = "contact_reply"]/h1', 'Thank You for your Message!')
    });


    it('Should  be able to reset submission via contact us form', () => {
        cy.webdriverUni_contactUs_submission_reset(data.firstName, data.lastName, data.comment, data.comment)
    });
    

    it('Should not be able to submit a successful submission via contact us form', () => {
         cy.webdriverUni_contactUs_submission_fail('body', 'Error: all fields are required Error: Invalid email address')

    });
});


