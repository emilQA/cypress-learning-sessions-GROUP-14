/// <reference types="cypress" />

describe("Test File Upload via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})

    })
    it("Upload a file...", () => {
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');
        cy.get('#submit-button').click()

    });
    it("Upload NO file...", () => {
        cy.get('#submit-button').click()
        cy.on("window:alert" , (param)=>{
            expect(param).to.eq('You need to select a file to upload!')
        })
    });

})