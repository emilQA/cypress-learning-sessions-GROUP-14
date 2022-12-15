import HomePage from "../../../support/page_objects/webDriverUni/HomePage";
///<reference types='cypress'/>
const homePage = new HomePage()

describe('Test mouse actions', () => {
    beforeEach(() => {
        homePage.visitHomePage()
    });

    it.only('Scroll element into view and click on it', () => {

        homePage.clickOn_Actions_button()
    });

    it('I should be able drag and drop a draggable element', () => {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#droppable>p>b').should('have.text', 'Dropped!');

    });

    it('I should be able to double mouse click event', () => {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get('#double-click').dblclick()
    });

    it('I should be able click and hold mouse down on given element', () => {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then((element) => {
            expect(element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });
});


