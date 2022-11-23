/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe('Verifying variables , CY commands and Jquery commands', () => {
    it('navigating to spesific product pages', () => {
        cy.visit('https://automationteststore.com/');
        const makeupLink = cy.get('a[href*="product/category&path="]').contains("Makeup");
        cy.get("h1 .maintext").then((mainText) => {
            const headerText = mainText.text();
            cy.log("Our header Text is" + headerText)
        })
    });
    it('Validate properties of contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should("contain", "First name");
    });
    it.only('Validate properties of contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(elem => {
            const firstName = elem.find("#field_11").text();
            expect(firstName).to.contain('First name')
        })
    
    });
});

