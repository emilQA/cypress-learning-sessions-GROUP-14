///<reference types='cypress'/>
import AutoComplate from "../../../support/page_objects/webDriverUni/AutoComplate";

describe('verify autocomplate dropdown lists via  webdriverUni', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
    });
    it('select spesific product via autocomplate list', () => {
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();
        cy.get('#myInput').type('a');
        cy.get('#myInputautocomplete-list > *').each(($list) => {
            const text = $list.text();
            const givenSearch = 'Avacado';
            // $list.click() --> is deprecated.Instead of click we should use following command -$list.trigger('click')
            text === givenSearch ? ($list.trigger('click'), cy.get('#submit-button').click().then(() => {
                cy.url().should("contain", text)
            })) : '';
        })
    });
    it('select spesific product via autocomplate list with POM', () => {
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();
       AutoComplate.autoComplateAction()
    });

});


