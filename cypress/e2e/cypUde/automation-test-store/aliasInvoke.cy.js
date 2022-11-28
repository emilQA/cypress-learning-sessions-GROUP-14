///<reference types="cypress"/>

describe('Iterating over the elements', () => {
    it('Displaying names of each element', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });
    it('Validate Product thumbnail', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
    it.only('Calculate total amount of normal and sale products', () => {
        let itemsTotal = 0;
        cy.visit('https://automationteststore.com/');
        cy.get('.price').as('priceBlock');
        cy.get('@priceBlock').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@priceBlock').find('.pricenew').invoke('text').as('saleItemPrice');

        cy.get('@itemPrice').then(linkText => {
            let itemTotalPrice = 0;
            let itemPrice = linkText.split('$')
            let i;
            for (i = 0; i < itemPrice.length; i++) {
                itemTotalPrice += Number(itemPrice[i])
            }
            itemsTotal += itemTotalPrice
            cy.log('Non sale item price is ' + itemTotalPrice)
        });

        cy.get('@saleItemPrice').then(linkText => {
            let saleItemPrice = linkText.split('$');
            let i;
            let totalSaleItemPrice = 0;
            for (i = 0; i < saleItemPrice.length; i++) {
                totalSaleItemPrice += Number(saleItemPrice[i])
            }
            cy.log('Sale Item Prices Is --> ' + totalSaleItemPrice)
        })
    });

});


