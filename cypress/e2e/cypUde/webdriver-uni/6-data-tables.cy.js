///<reference types='cypress'/>
/// <reference types="cypress-xpath"/>

describe('handling data via webdriver uni', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#data-table').invoke('removeAttr', 'target').click();

    });

    it('calculate and assert the total age of all users', () => {
        let userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1  > table >tbody > tr > td').each((el, i) => {
            // cy.log(i ,el.text() )
            userDetails[i] = el.text();
            // cy.log(userDetails[i] + ' USER DETAIL')
        }).then(() => {
            let i;
            for (let i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
            }
            cy.log('Found total age: ' + numb);
            expect(numb).to.eq(322)
        })
    });

});


