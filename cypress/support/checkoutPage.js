class checkoutPage {

    elements = {

        firstnameInput: () => cy.get('#first-name'),
        lastnameInput: () => cy.get('#last-name'),
        postalcodeInput: () => cy.get('#postal-code'),
        continue: () => cy.get('#continue'),
        finish: () => cy.get('#finish'),
        backhome: () => cy.get('#back-to-products')

    }
    typefirstName(firstname) {
        this.elements.firstnameInput().type(firstname);
    }
    typelastName(lastname) {
        this.elements.lastnameInput().type(lastname);
    }
    typepostalCode(postalcode) {
        this.elements.postalcodeInput().type(postalcode);
    }
    clickContinue() {
        this.elements.continue().click();
    }
    clickFinish() {
        this.elements.finish().click();
    }
    clickBackHome() {
        this.elements.backhome().click();
    }
}

module.exports = new checkoutPage();