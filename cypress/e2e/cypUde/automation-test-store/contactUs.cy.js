/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('Test contact us form  via  Automation  test store', () => {
    before(()=>{ cy.fixture('example').as('user')})
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://automationteststore.com/');
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        // cy.xpath("//a[contains(@href , 'contact')]").click()
        cy.get("a[href$='contact']").click().then((text)=>{cy.log(text.text())});
        cy.get('@user').then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.firstName);
            cy.get('#ContactUsFrm_email').type(user.email);
            cy.get('#ContactUsFrm_enquiry').type(user.comment);
        })
        // cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click();
        cy.xpath('//p[contains(text() , "owner!")]').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.xpath('//p[contains(text() , "owner!")]').then(
            (elemItem) => {console.log('DONE' + elemItem.text())}
        )
    });
});


//(//li-icon[contains(@type , "chevron-down")])[3]