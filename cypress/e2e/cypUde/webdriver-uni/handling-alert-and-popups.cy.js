///<reference types='cypress'/>

describe('Handle js alers', () => {
    it('Confirm js alerts contain the correct text', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click();

        cy.get('#button1').click();
        cy.on('window:alert' , (param)=>{
            expect(param).to.eq('I am an alert box!')
        } )
    });
});


