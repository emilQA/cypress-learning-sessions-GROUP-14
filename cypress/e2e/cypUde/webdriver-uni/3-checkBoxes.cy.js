///<reference types='cypress'/>

describe('verify checkboxes via  webdriverUni', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
    });
    it('check and validate checkboxes', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get(':nth-child(5) > input').should('be.checked');
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')

    });
    it.only('check multiple checkboxes', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get('#checkboxes').as('allCheckboxes');
        cy.get('input[type="checkbox"]').as('checkbox');
        cy.get('@checkbox').each((elem) => {
            cy.wrap(elem).as('wrappedElement');
            cy.get('@wrappedElement').check()
        })

    });
});


