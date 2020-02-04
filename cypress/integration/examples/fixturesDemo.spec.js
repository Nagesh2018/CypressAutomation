/// <reference types="cypress" />

describe('Validate Cart', function () {

    before(function(){
        cy.fixture('testData').then(function(data) {
        this.data = data
        })
        })

    it('Search and Add Item to Cart', function () {
        cy.visit("https://admin-demo.nopcommerce.com/")
        cy.get("input#Email").type(this.data.email)
        cy.get("input#Password").type(this.data.password)
        cy.get("input[value='Log in']").click()
        
    })

})