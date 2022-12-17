///<reference types="cypress"/>
import Home_Page_autoStore from "../../../support/page_objects/automationStore/Home_Page_autoStore";
import AddMultipleItemsToBasket from "../../../support/page_objects/automationStore/Add_Multiple_Items_To_Basket_Page";

describe('Add multiple items to the basket', () => {
    before(function () {
        cy.fixture('products').then(function (data) {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        cy.saytaGet('automationteststore');
    })
    it('Add spesific items to the basket', () => {
        cy.servisAdı('Hair Care');
        globalThis.data.productName.forEach(element => {
            cy.addProductsToBasket(element)
        });
    });

    it.only('Add spesific items to the basket POM', () => {
        globalThis.data.productName.forEach(element => {
            Home_Page_autoStore.clickTo_TopMenuItem('Hair Care');
            AddMultipleItemsToBasket.addMultipleItemsToBasketFunction(element)
        });
    });

});
