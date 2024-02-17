class checkPaymentInformation {

    elements = {

        payment: () => cy.get('.summary_value_label'),
        shipping: () => cy.get('.summary_value_label'),

    }
    checkPayment(paymentData) {
        this.elements.payment().contains(paymentData);
    }
    checkShipping(shippingData) {
        this.elements.shipping().contains(shippingData);
    }
    

}

module.exports = new checkPaymentInformation();