class continueShopping {

    elements = {

        clickContinue: () => cy.get('#continue-shopping'),
        cart3add: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        cart4add: () => cy.get('#add-to-cart-sauce-labs-bike-light')

    }
    clickContinueButton() {
        this.elements.clickContinue().click();
    }
    clickCart3() {
        this.elements.cart3add().click();
    }
    clickCart4() {
        this.elements.cart4add().click();
    }


}

module.exports = new continueShopping();