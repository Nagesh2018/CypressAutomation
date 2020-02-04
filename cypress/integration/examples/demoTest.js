/// <reference types="cypress" />

describe('Validate Cart', function () {
    it('Search and Add Item to Cart', function () {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms[name='q']").type("Apple MacBook Pro 13-inch")
        cy.get("[type=submit]").click()
        cy.get(".product-box-add-to-cart-button[value ='Add to cart']").click()
        cy.get("#addtocart_4_EnteredQuantity[type='text']").clear().type('3')
        cy.get("#add-to-cart-button-4[type='button']").click()
        cy.wait(5000)
        cy.get("#topcartlink > a >span.cart-label").click()
        cy.wait(5000)
        cy.get(".product-unit-price").contains("$1,800.00")
        
    })

})
