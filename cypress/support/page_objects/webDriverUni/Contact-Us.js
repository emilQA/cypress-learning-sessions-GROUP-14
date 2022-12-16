class ContactUs {
    // PROPERTIES
    elements = {
        firstNameInput: () => cy.get('[name="first_name"]'),
        lastNameInput: () => cy.get('[name="last_name"]'),
        emailInput: () => cy.get('[name="email"]'),
        commentInput: () => cy.get('textarea.feedback-input'),
        submitButton: () => cy.get('[type="submit"]'),
        resetButton: () => cy.get('[type="reset"]'),

        // elements for normalSubmission assertion
        selectSelector: () => cy.xpath('//div[@id = "contact_reply"]/h1'),
        textToLocate: () => 'Thank You for your Message!',
    }


    // METHODS
    normalSubmission(firstName, lastName, email, comment, $selector) {
        this.elements.firstNameInput().should("have.attr", "placeholder", "First Name").type(firstName);
        this.elements.lastNameInput().should("have.attr", "placeholder", "Last Name").type(lastName);
        this.elements.emailInput().type(email);
        this.elements.commentInput().type(comment);
        this.elements.submitButton().click();
        this.elements.selectSelector().should('have.text', this.elements.textToLocate())
    }
    resetSubmission(firstName, lastName, email, comment) {
        this.elements.firstNameInput().should("have.attr", "placeholder", "First Name").type(firstName);
        this.elements.lastNameInput().should("have.attr", "placeholder", "Last Name").type(lastName);
        this.elements.emailInput().type(email);
        this.elements.commentInput().type(comment);
        this.elements.resetButton().click();
        this.elements.firstNameInput().should('have.value', '');
        this.elements.lastNameInput().should('have.value', '');
        this.elements.emailInput().should('have.value', '');
        this.elements.commentInput().should('have.value', '');

    }

}

module.exports = new ContactUs