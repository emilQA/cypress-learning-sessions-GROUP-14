class AutoComplate {
    elements = {
        input: () => cy.get('#myInput'),
        autoComplateList: () => cy.get('#myInputautocomplete-list > *'),
        submitButton: () => cy.get('#submit-button')
    }
    autoComplateAction() {
        this.elements.input().type('A')
        const givenSearch = 'Avacado';
        this.elements.autoComplateList().each((list) => {
            // console.log(list.text())
            const text = list.text();
            if (text === givenSearch) {
                list.trigger('click');
                this.elements.submitButton().click().then(() => {
                    cy.url().should("contain", text)
                })
            }
        })
    }
}

module.exports = new AutoComplate;

// it('select spesific product via autocomplate list', () => {
//     cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click();
//     cy.get('#myInput').type('a');
//     cy.get('#myInputautocomplete-list > *').each(($list) => {
//         const text = $list.text();
//         const givenSearch = 'Avacado';
//         // $list.click() --> is deprecated.Instead of click we should use following command -$list.trigger('click')
//         text === givenSearch ? ($list.trigger('click'), cy.get('#submit-button').click().then(() => {
//             cy.url().should("contain", text)
//         })) : '';
//     })
// });