///<reference types='cypress'/>

describe('Verify radio buttons via  webdriverUni', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
    });
    it('check spesific radio buttons', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get('#radio-buttons').find("input[type='radio']").as('radioButtons')
        cy.get('@radioButtons').each((el, i) => {
            cy.wrap(el).as('wrappedRadioButtons')
            // cy.log('@wrappedRadioButtons')
            cy.get('@wrappedRadioButtons').check().should('be.checked')
        })
    });
    it('Validate the state of spesific radio buttons', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get('#radio-buttons').find("input[type='radio']").as('radioButtons')
       
    });
});


