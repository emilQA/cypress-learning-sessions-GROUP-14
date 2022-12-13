///<reference types='cypress'/>
/// <reference types="cypress-xpath"/>

describe('Test contact us form via WebdriverUni', () => {
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            // this.data = data
            globalThis.data = data
        })
        cy.visit('http://www.webdriveruniversity.com/');
        cy.document().should("have.property", 'charset').and('eq', "UTF-8")
        cy.get('#contact-us').invoke('removeAttr', 'target').click();

    });

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.webdriverUni_contactUs_submission(data.firstName, data.lastName, data.email, data.comment, '//div[@id = "contact_reply"]/h1', 'Thank You for your Message!')
    });


    it.only('Should not be able to submit a successful submission via contact us form', () => {
        cy.webdriverUni_contactUs_submission(data.firstName, ' ', data.comment, data.comment, 'body', 'Error: Invalid email address')
    });

    it('Should  be able to reset submission via contact us form', () => {
       // cy.get('body').contains('Error: all fields are required');
       //  cy.webdriverUni_contactUs_submission(data.firstName, ' ', ' ', data.comment, '//div[@id = "contact_reply"]/h1', 'Thank You for your Message!')


    });
});


