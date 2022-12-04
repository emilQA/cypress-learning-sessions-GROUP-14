///<reference types='cypress'/>
/// <reference types="cypress-xpath"/>

describe('Handling Iframe and modules', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.document().should("have.property", 'charset').and('eq', "UTF-8")
    });

    it('Handle webdriver unique iframe and module', () => {
        cy.get('#iframe').invoke('removeAttr', 'target').click();

        cy.get('#frame').then(frame => {
            const body = frame.contents().find('body');
            cy.wrap(body).as('iframe');
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('.modal-content').as('iframeModal')
        // way-1
        // cy.get('@iframeModal').find('.modal-body').then((modalObj)=>{
        //     const modalText = modalObj.text();
        //     expect(modalText).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras.')
        // })

        // way - 2
        cy.get('@iframeModal').find('.modal-body').should((expectedText) => {
            const text = expectedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras.')
        })
    });


});


