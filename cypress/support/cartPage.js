class cartPage {

    elements = {

        cart1remove: () => cy.get('#remove-sauce-labs-backpack'),
        cart2remove: () => cy.get('#remove-sauce-labs-onesie'),
        checkout: () => cy.get('#checkout'),

    }
    clickCart1Remove() {
        this.elements.cart1remove().click();
    }
    clickCart2Remove() {
        this.elements.cart2remove().click();
    }
    clickCheckout() {
        this.elements.checkout().click();
    }


}

module.exports = new cartPage();