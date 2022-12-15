//look at e2e>webdriveruni>9.mouseActions.cyjs
class HomePage {
    visitHomePage() {
        cy.visit(Cypress.env('webSite_url'))
    }

    clickOn_Actions_button() {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();

    }
}

module.exports = new HomePage