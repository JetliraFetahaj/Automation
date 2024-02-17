class inventoryPage {

    elements = {

        cart1add: () => cy.get('#add-to-cart-sauce-labs-onesie'),
        cart2add: () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
        cartcontainer: () => cy.get('#shopping_cart_container'),
        menu: () => cy.get('#react-burger-menu-btn'),
        logout: () => cy.get('#logout_sidebar_link')

    }
    clickCart1() {
        this.elements.cart1add().click();
    }
    clickCart2() {
        this.elements.cart2add().click();
    }
    clickContainerCart() {
        this.elements.cartcontainer().click();
    }
    clickMenu() {
        this.elements.menu().click();
    }
    clickLogout() {
        this.elements.logout().click();
    }
}

module.exports = new inventoryPage();