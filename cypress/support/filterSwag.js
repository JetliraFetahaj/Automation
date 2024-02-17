class filterOption {
    elements = {
        filterDropdown: () => cy.get('.product_sort_container')
    }

    selectFilterOption(optionValue) {
        this.elements.filterDropdown().select(optionValue);
    }
}

module.exports = new filterOption();
