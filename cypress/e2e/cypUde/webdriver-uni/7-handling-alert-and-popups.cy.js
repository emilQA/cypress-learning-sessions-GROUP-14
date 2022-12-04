///<reference types='cypress'/>

describe('Handle js alers', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/');
    });
    it('Confirm js alerts contain the correct text', () => {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        cy.get('#button1').click();
        cy.on('window:alert', (param) => {
            expect(param).to.eq('I am an alert box!')
        })
    });
    it('Validate js confirm alert box  works corrextly when clicking Ok!', () => {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
        cy.get('#button4').click();
        cy.on('window:confirm', (param) => {
            return true //it'll click to OK.But if we return FALSE it'll click to CANCEL 
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')   
        // OR
        // cy.get('#confirm-alert-text').then(obj=>{
        //     expect(obj.text()).to.eq('You pressed OK!')
        // })

    });
    it('Validate js confirm alert box  works corrextly when clicking cancel', () => {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button4').click();
        cy.on('window:confirm', (param) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
    

});


