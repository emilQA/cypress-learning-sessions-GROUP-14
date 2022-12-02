///<reference types='cypress'/>

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
            text === givenSearch ? ($list.click(), cy.get('#submit-button').click().then(() => {
                cy.url().should("contain", text)
            })) : '';
        }).then(() => {
            let text = '';
            cy.get('#myInput').type('g');
            cy.get('#myInputautocomplete-list > *').each(list => {
                const text = list.text();
                const givenSearch = 'Ginger';
                if (text === givenSearch) {
                    list.click();
                    cy.get('#submit-button').click();
                    text === givenSearch
                }
            }).then(() => {
                cy.url().should('contain', text)
            })
        })
    });



});


