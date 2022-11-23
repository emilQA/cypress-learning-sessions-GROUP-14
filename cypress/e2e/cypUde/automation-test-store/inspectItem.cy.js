/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>



describe('Inspec Automation Test Store  items using chain of commands', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
    })
    it('click on the first item using item header', () => {
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
    });
    it('click on the first item using item header', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });
    it('click on the first item using item header', () => {
        cy.get('.fixed_wrapper').find('.fixed').find('.prdocutname').contains('Skinsheen Bronzer Stick')
    });
    it('click on the first item using item header', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').contains('Skinsheen Bronzer Stick')
    });
    it('click on the first item using item header', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
});

