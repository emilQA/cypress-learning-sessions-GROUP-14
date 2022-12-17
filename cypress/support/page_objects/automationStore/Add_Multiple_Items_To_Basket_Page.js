class AddMultipleItemsToBasket {
    elements = {
        itemsName: () => cy.get(".fixed_wrapper .prdocutname"),
        addToCartMiniButton: () => cy.get('.productcart')
    }


    // Methods
    addMultipleItemsToBasketFunction(productNames) {
        this.elements.itemsName().each(($el, i) => {
            if ($el.text() === productNames) {
                this.elements.addToCartMiniButton().eq(i).click()
            }
        })
    }

}






module.exports = new AddMultipleItemsToBasket;