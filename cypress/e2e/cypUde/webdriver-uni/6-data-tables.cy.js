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
    userDetails[i] = el.text();
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
it.only('Calculate and assert the age of a given user based on last name', () => {
cy.get('#thumbnail-1 tr td:nth-child(2)').each((el, index) => {
    const text = el.text()
    if (text.includes('Woods')) {
        cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
            const userAge = age.text();
            expect(userAge).to.eq('80')
        })
    }
})
});

});


