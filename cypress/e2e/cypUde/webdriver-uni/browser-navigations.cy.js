///<reference types='cypress'/>
/// <reference types="cypress-xpath"/>

describe('Validate WebdriverUni homepage links', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.document().should("have.property", 'charset').and('eq', "UTF-8")
    });

    it('Confirm Links are redirected to the correct pages', () => {
        //contact us
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.url().should("include", 'contactus.html');
        cy.go('back');
        cy.url().should("include", 'http://www.webdriveruniversity.com/');
        cy.reload();
        //cy.reload(true) // reload without using cache
        cy.go('forward');
        cy.url().should("include", 'contactus.html');
        cy.go('back');

        //Login
        cy.get('#login-portal').invoke('removeAttr', 'target').click();
        cy.url().should("include", 'Login-Portal/index.html');
        cy.go('back');

        //TODO list
        cy.get('#to-do-list').invoke('removeAttr', 'target').click();
        cy.url().should("include", 'To-Do-List/index.html');
        cy.go('back');
        

    });
});


