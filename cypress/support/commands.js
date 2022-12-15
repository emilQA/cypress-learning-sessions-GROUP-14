//İTERATE_OVER_ELEMENT--------AUTOMATİON_TEST_STORE--------------------------------
Cypress.Commands.add('saytaGet', saytinAdi => {
    cy.visit(`https://${saytinAdi}.com/`);
});
Cypress.Commands.add('servisAdı', servis => {
    cy.get('a[href*="product/category&path="]').contains(servis).click();
});
Cypress.Commands.add('butunMallar', () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, i, $list) => {
        cy.log('index ' + i + ':' + $el.text());
    })
});

Cypress.Commands.add('addProductsToBasket', product => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, i, $list) => {
        if($el.text() === product ){
                cy.get('.productcart').eq(i).click()
        }
    })
});

//İTERATE_OVER_ELEMENT--------AUTOMATİON_TEST_STORE-----------------END!---------------


Cypress.Commands.add('selectProduct', productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, i, $list) => {
        $el.text().includes(productName) ? cy.wrap($el).click() : "";
    })
    cy.get('.bgnone').should('have.text', productName);
    cy.get('.cart').click();
    cy.get('.name > a').should('have.text', productName);

})
// NORMAL SUBMISSION
Cypress.Commands.add('webdriverUni_contactUs_submission', (firstName,
    lastName,
    email,
    comment,
    $selector,
    textToLocate) => {
    cy.get('[name="first_name"]').should("have.attr", "placeholder", "First Name").type(firstName);
    cy.get('[name="last_name"]').should("have.attr", "placeholder", "Last Name").type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);
    cy.get('[type="submit"]').click();
    cy.xpath($selector).should('have.text', textToLocate)
})

// RESET SUBMISSION
Cypress.Commands.add('webdriverUni_contactUs_submission_reset', (firstName,
    lastName,
    email,
    comment) => {
    cy.get('[name="first_name"]').should("have.attr", "placeholder", "First Name").type(firstName);
    cy.get('[name="last_name"]').should("have.attr", "placeholder", "Last Name").type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);
    cy.get('[type="reset"]').click();
    cy.get('[name="first_name"]').should('have.value', '');
    cy.get('[name="last_name"]').should('have.value', '');
    cy.get('[name="email"]').should('have.value', '');
    cy.get('textarea.feedback-input').should('have.value', '');
})

// FAIL SUBMISSION
Cypress.Commands.add('webdriverUni_contactUs_submission_fail', (
    $selector,
    textToLocate) => {
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate)
})


//
// Cypress.Commands.add('convertToNumbInner' , (str)=>{
//     Number(str.text().replace(/\D/g, ''));
// })
//
// Cypress.Commands.add('convertToNumb' , (str)=>{
//     let itemsTotalsum = 0;
//     cy.convertToNumb(str).then((strn)=>{
//         let numb = strn;
//         itemsTotalsum += numb;
//         expect(itemsTotalsum).to.equal(num)
//
//     })
// })


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
