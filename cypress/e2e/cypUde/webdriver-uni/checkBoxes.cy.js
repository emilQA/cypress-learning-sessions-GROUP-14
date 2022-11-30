///<reference types='cypress'/>

describe('verify checkboxes via  webdriverUni', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
    });
    it('check and validate checkbox', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get(':nth-child(5) > input').should('be.checked');
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')

    });
});


