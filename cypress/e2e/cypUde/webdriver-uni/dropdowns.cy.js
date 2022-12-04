///<reference types='cypress'/>

describe('Interract with dropdown lists via webdriveruni', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
    });
    it('Select the spesific values via select dropdown list', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get('#dropdowm-menu-1').as('mainDropdown1')
        cy.get('#dropdowm-menu-1 > option').as('dropdownLists1')
        cy.get('@dropdownLists1').each((el) => {
            cy.get('@mainDropdown1').select(el.text()).should('have.value', el.text().toLocaleLowerCase())
        })
        cy.get('#dropdowm-menu-2').as('mainDropdown2')
        cy.get('#dropdowm-menu-2 > option').as('dropdownLists2')
        cy.get('@dropdownLists2').each((el) => {
            cy.get('@mainDropdown2').select(el.text()).should('have.value', el.text().toLocaleLowerCase())
        })
        cy.get('#dropdowm-menu-1').as('mainDropdown')
        cy.get('#dropdowm-menu-1 > option').as('dropdownLists')
        cy.get('@dropdownLists').each((el) => {
            cy.get('@mainDropdown').select(el.text()).should('have.value', el.text().toLocaleLowerCase())
        })
    });


    
    it.only('DROP', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get('.dropdown-menu-lists').not('#fruit-selects').as('dropdownMenuLists');
        cy.log('@dropdownMenuLists')
        cy.get('@dropdownMenuLists').each((el, i) => {
            if (cy.get('@dropdownMenuLists').should('have.id', `#dropdowm-menu-${i+1}`)) {
                cy.get(`#dropdowm-menu-${i + 1} > option`).as('dropdownMenuListsOption');
                cy.get('@dropdownMenuListsOption').each((elem) => {
                    cy.get('@dropdownMenuLists').select(el.text())
                })
            }
        })
    });
});


