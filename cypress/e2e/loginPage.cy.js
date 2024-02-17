import loginPage from "../support/loginPage";
import inventoryPage from "../support/inventoryPage";
import cartPage from "../support/cartPage";
import checkoutPage from "../support/checkoutPage";
import filterSwag from "../support/filterSwag";
import contiuneShopping from "../support/contiuneShopping";
import checkPaymentInformation from "../support/checkPaymentInformation";

describe('Swag Labs Testing', () => {
  let inputdata;
  before(function () {
    cy.fixture('pagedata').then(function (data) {
      inputdata = data;
    });
  });

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('https://www.saucedemo.com/');
    cy.url('eq', 'https://www.saucedemo.com/');
  });


  it('The login needs to be redirected to the inventory page', () => {
    loginPage.typeUsername(inputdata.typeusername);
    loginPage.typePassword(inputdata.typepassword);
    loginPage.clickLogin();
    cy.wait(2000);
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    filterSwag.selectFilterOption('za');
    inventoryPage.clickCart1();
    inventoryPage.clickCart2();
    inventoryPage.clickContainerCart();
    contiuneShopping.clickContinueButton();
    contiuneShopping.clickCart3();
    contiuneShopping.clickCart4();
    inventoryPage.clickContainerCart();
    cartPage.clickCart1Remove();
    cartPage.clickCart2Remove();
    cartPage.clickCheckout();
    checkoutPage.typefirstName(inputdata.firstname);
    checkoutPage.typelastName(inputdata.lastname);
    checkoutPage.typepostalCode(inputdata.postalcode);
    checkoutPage.clickContinue();
    checkPaymentInformation.checkPayment(inputdata.payment);
    checkPaymentInformation.checkShipping(inputdata.shipping);
    checkoutPage.clickFinish();
    checkoutPage.clickBackHome();
    inventoryPage.clickMenu();
    inventoryPage.clickLogout();

  });

});
