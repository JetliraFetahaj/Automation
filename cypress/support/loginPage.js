class loginPage {

    elements = {

        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }
    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }
    typePassword(password) {
        this.elements.passwordInput().type(password);
    }
    clickLogin() {
        this.elements.loginButton().click();
    }
}
module.exports = new loginPage();